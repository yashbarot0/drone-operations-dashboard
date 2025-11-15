import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Table, BillingMode } from 'aws-cdk-lib/aws-dynamodb';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { RestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';

export class DroneStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // DynamoDB
    const table = new Table(this, 'DroneTelemetryTable', {
      partitionKey: { name: 'droneId', type: aws_cdk_lib.aws_dynamodb.AttributeType.STRING },
      sortKey: { name: 'timestamp', type: aws_cdk_lib.aws_dynamodb.AttributeType.NUMBER },
      billingMode: BillingMode.PAY_PER_REQUEST,
    });

    // S3 Bucket
    new Bucket(this, 'DroneLogsBucket', {
      bucketName: 'drone-logs-' + this.account,
    });

    // Lambda (placeholder)
    const handler = new Function(this, 'TelemetryHandler', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: Code.fromInline(`
        exports.handler = async (event) => {
          console.log('Received:', event);
          return { statusCode: 200, body: 'OK' };
        };
      `),
    });

    // API Gateway
    const api = new RestApi(this, 'DroneApi', {
      restApiName: 'Drone Service',
    });

    const telemetry = api.root.addResource('telemetry');
    telemetry.addMethod('POST', new LambdaIntegration(handler));
  }
}