export default function TelemetryPanel() {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Event Log</h2>
        <div className="text-sm space-y-1 text-gray-600">
          <div>DRN001 → Delivery started</div>
          <div>DRN002 → Low battery alert</div>
          <div>DRN001 → Package delivered</div>
        </div>
      </div>
    );
  }