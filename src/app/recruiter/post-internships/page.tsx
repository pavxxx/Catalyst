export default function PostInternshipsPage() {
    return (
      <>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Post & Manage Internships</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            + Create New Listing
          </button>
        </div>
  
        {/* A placeholder for the list of internships */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-500">Your internship listings will appear here.</p>
        </div>
      </>
    );
  }