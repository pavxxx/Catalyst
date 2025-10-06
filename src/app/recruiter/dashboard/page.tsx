
export default function RecruiterDashboardPage() {
    return (
      // The <main> tag and sidebar are already in the layout.tsx file,
      // so we only need to provide the content that goes inside.
      <>
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Welcome, Recruiter! 👋</h2>
            <p className="text-gray-600 mt-1">Manage your postings and find the best talent.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white p-2 rounded-lg shadow hover:shadow-md">🔔</button>
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 bg-purple-500 rounded-full" alt="Profile" />
              <div>
                <p className="font-semibold text-gray-800">Sarah Lee</p>
                <p className="text-sm text-gray-500">Talent Acquisition</p>
              </div>
            </div>
          </div>
        </header>
  
        {/* Quick Stats for Recruiter */}
        <section className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-600">Active Listings</p>
            <p className="text-2xl font-bold text-gray-900">5</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-600">Total Applicants</p>
            <p className="text-2xl font-bold text-blue-600">258</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-600">New This Week</p>
            <p className="text-2xl font-bold text-green-600">32</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-600">Interviews Set</p>
            <p className="text-2xl font-bold text-purple-600">12</p>
          </div>
        </section>
  
        {/* You can add more sections here, like recent applicants or top candidates */}
  
      </>
    );
  }