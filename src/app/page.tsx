// app/page.js or pages/index.js
export default function CatalystDashboard() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 flex flex-col border-r shadow-lg">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg w-10 h-10 flex items-center justify-center text-white font-bold">
            C
          </div>
          <span className="font-bold text-xl text-gray-800">Catalyst</span>
        </div>
        
        <nav className="flex-1 space-y-3">
          <a href="#" className="flex items-center gap-3 text-blue-600 bg-blue-50 p-3 rounded-lg font-medium">
            <span>📊</span> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>💼</span> Internships
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>🎯</span> Skills & Profile
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>📝</span> Projects
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>🏆</span> Achievements
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>👥</span> Connections
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>⚙️</span> Settings
          </a>
        </nav>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
          <p className="text-sm text-gray-700 mb-2">Complete your profile for better matches!</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
          </div>
          <p className="text-xs text-gray-600 mt-1">75% complete</p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Welcome back, Alex! 👋</h2>
            <p className="text-gray-600 mt-1">Ready to find your next internship opportunity?</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white p-2 rounded-lg shadow hover:shadow-md">🔔</button>
            <button className="bg-white p-2 rounded-lg shadow hover:shadow-md">✉️</button>
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 bg-blue-500 rounded-full" alt="Profile" />
              <div>
                <p className="font-semibold text-gray-800">Alex Kumar</p>
                <p className="text-sm text-gray-500">CS Student</p>
              </div>
            </div>
          </div>
        </header>

        {/* Quick Stats */}
        <section className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Applications</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <span className="text-blue-600 text-xl">📄</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Interview Calls</p>
                <p className="text-2xl font-bold text-green-600">3</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <span className="text-green-600 text-xl">📞</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Profile Views</p>
                <p className="text-2xl font-bold text-purple-600">127</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <span className="text-purple-600 text-xl">👁️</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Skill Score</p>
                <p className="text-2xl font-bold text-yellow-600">8.2/10</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <span className="text-yellow-600 text-xl">⭐</span>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Opportunities & Projects */}
        <div className="grid grid-cols-2 gap-8">
          {/* Recommended Internships */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Recommended for You</h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-800">Frontend Developer Intern</h4>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">92% Match</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Microsoft • Bangalore • Remote</p>
                <div className="flex gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Node.js</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Posted 2 days ago</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Apply Now</button>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-800">Data Science Intern</h4>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">85% Match</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Google • Hyderabad • Hybrid</p>
                <div className="flex gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">ML</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">SQL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Posted 5 days ago</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Apply Now</button>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Projects */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">📝 Recent Projects</h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-800">E-commerce Website</h4>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">A+</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Faculty: Dr. Sharma • Web Development</p>
                <p className="text-gray-500 text-sm mb-3">Built a full-stack e-commerce platform with React and Node.js</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Submitted 1 week ago</span>
                  <button className="text-blue-600 text-sm hover:text-blue-700">View Details</button>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-800">ML Stock Predictor</h4>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">In Review</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Faculty: Prof. Agarwal • Data Science</p>
                <p className="text-gray-500 text-sm mb-3">Machine learning model to predict stock prices using LSTM</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Submitted 3 days ago</span>
                  <button className="text-blue-600 text-sm hover:text-blue-700">View Details</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
