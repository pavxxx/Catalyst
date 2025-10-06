export default function SettingsPage() {
    return (
      <>
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
  
        {/* Placeholder for settings forms */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Account Information</h2>
          <p className="text-gray-500 mb-6">Forms to edit your company profile and personal details will go here.</p>
          
          <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
          <p className="text-gray-500">Checkboxes to manage email notifications will go here.</p>
        </div>
      </>
    );
  }