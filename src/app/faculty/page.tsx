export default function FacultyDashboard() {
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
          <a href="/faculty/dashboard" className="flex items-center gap-3 text-blue-600 bg-blue-50 p-3 rounded-lg font-medium">
            <span>📊</span> Faculty Dashboard
          </a>
          <a href="/faculty/reviews" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>📝</span> Project Reviews
          </a>
          <a href="/faculty/students" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>👨‍🎓</span> Student Profiles
          </a>
          <a href="/faculty/feedback" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>💬</span> Feedback Center
          </a>
          <a href="/faculty/connections" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>👥</span> Connections
          </a>
          <a href="/faculty/settings" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>⚙️</span> Settings
          </a>
        </nav>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
          <p className="text-sm text-gray-700 mb-2">Faculty Account</p>
          <p className="text-xs text-gray-600">Dr. Sharma</p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Faculty Dashboard 👨‍🏫</h2>
            <p className="text-gray-600 mt-1">Overview of student activity and pending reviews</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white p-2 rounded-lg shadow hover:shadow-md">🔔</button>
            <button className="bg-white p-2 rounded-lg shadow hover:shadow-md">✉️</button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">DS</div>
              <div>
                <p className="font-semibold text-gray-800">Dr. Sharma</p>
                <p className="text-sm text-gray-500">Computer Science</p>
              </div>
            </div>
          </div>
        </header>

        {/* Quick Stats */}
        <section className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
                <p className="text-2xl font-bold text-yellow-600">12</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <span className="text-yellow-600 text-xl">📋</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Students</p>
                <p className="text-2xl font-bold text-blue-600">45</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <span className="text-blue-600 text-xl">👨‍🎓</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Project Score</p>
                <p className="text-2xl font-bold text-green-600">8.4/10</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <span className="text-green-600 text-xl">⭐</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Feedback Given</p>
                <p className="text-2xl font-bold text-purple-600">28</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <span className="text-purple-600 text-xl">💬</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pending Reviews & Student Activity */}
        <div className="grid grid-cols-2 gap-8">
          {/* Pending Reviews */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">⏳ Pending Reviews</h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-800">E-commerce Platform</h4>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Urgent</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Student: Alex Kumar • Due: Today</p>
                <p className="text-gray-500 text-sm mb-3">Full-stack e-commerce website with React & Node.js</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Web Development</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Review Now</button>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-800">ML Stock Predictor</h4>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Due Tomorrow</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Student: Priya Singh • Due: Tomorrow</p>
                <p className="text-gray-500 text-sm mb-3">LSTM model for stock price prediction</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Data Science</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Review Now</button>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Student Activity */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">📈 Recent Student Activity</h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-800">Alex Kumar</h4>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Submitted: E-commerce Project</p>
                <div className="flex gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Node.js</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">MongoDB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2 hours ago</span>
                  <button className="text-blue-600 text-sm hover:text-blue-700">View Profile</button>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-800">Priya Singh</h4>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Completed: Python Certification</p>
                <div className="flex gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Machine Learning</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Data Analysis</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">5 hours ago</span>
                  <button className="text-blue-600 text-sm hover:text-blue-700">View Profile</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}