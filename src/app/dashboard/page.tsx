"use client";
import Sidebar from '../../../components/sidebar';

export default function Dashboard() {
  const applications = 8;
  const interviews = 3;
  const profileViews = 127;
  const skillScore = 8.2;

  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Microsoft",
      location: "Bangalore · Remote",
      tags: ["React", "TypeScript", "Node.js"],
      match: "92%",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Google",
      location: "Hyderabad · Hybrid",
      tags: ["Python", "ML", "SQL"],
      match: "85%",
      posted: "5 days ago"
    }
  ];

  const projects = [
    {
      id: 1,
      name: "E-commerce Website",
      faculty: "Dr. Sharma",
      area: "Web Development",
      grade: "A+",
      desc: "Built a full-stack e-commerce platform with React and Node.js",
      submitted: "1 week ago"
    },
    {
      id: 2,
      name: "ML Stock Predictor",
      faculty: "Prof. Agarwal",
      area: "Data Science",
      grade: "In Review",
      desc: "Machine learning model to predict stock prices using LSTM",
      submitted: "3 days ago"
    }
  ];

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 px-14 py-12 bg-blue-50 min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome back, Alex! <span className="ml-2">👋</span></h2>
            <p className="text-gray-700 mt-1">Ready to find your next internship opportunity?</p>
          </div>
          <div className="flex items-center gap-4">
            {/* Notification, Profile */}
            <button className="bg-white p-2 rounded-lg shadow hover:shadow-md">🔔</button>
            <button className="bg-white p-2 rounded-lg shadow hover:shadow-md">📩</button>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-blue-400 w-10 h-10 flex items-center justify-center text-white font-bold text-lg">A</div>
              <div>
                <p className="font-semibold text-gray-800">Alex Kumar</p>
                <p className="text-xs text-gray-500">CS Student</p>
              </div>
            </div>
          </div>
        </div>
        {/* Stats */}
        <section className="grid grid-cols-4 gap-7 mb-12">
          <div className="bg-white p-7 rounded-xl shadow text-center">
            <p className="mb-2 text-sm text-gray-500">Active Applications</p>
            <div className="text-2xl font-bold">{applications}</div>
          </div>
          <div className="bg-white p-7 rounded-xl shadow text-center">
            <p className="mb-2 text-sm text-gray-500">Interview Calls</p>
            <div className="text-2xl font-bold text-green-500">{interviews}</div>
          </div>
          <div className="bg-white p-7 rounded-xl shadow text-center">
            <p className="mb-2 text-sm text-gray-500">Profile Views</p>
            <div className="text-2xl font-bold text-purple-600">{profileViews}</div>
          </div>
          <div className="bg-white p-7 rounded-xl shadow text-center">
            <p className="mb-2 text-sm text-gray-500">Skill Score</p>
            <div className="text-2xl font-bold text-yellow-500">{skillScore}/10</div>
          </div>
        </section>
        {/* Recommended + Recent Projects */}
        <div className="grid grid-cols-2 gap-8">
          <section>
            <h3 className="text-xl font-bold mb-4">🎯 Recommended for You</h3>
            <div className="space-y-5">
              {internships.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-xl shadow flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-lg">{job.title}</h4>
                      <p className="text-gray-700 text-sm mb-1">{job.company} • {job.location}</p>
                      <div className="flex gap-2 mb-1">
                        {job.tags.map(tag => (
                          <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{tag}</span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">{job.posted}</span>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">{job.match} Match</span>
                      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Apply Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-xl font-bold mb-4">📝 Recent Projects</h3>
            <div className="space-y-5">
              {projects.map(prj => (
                <div key={prj.id} className="bg-white p-6 rounded-xl shadow flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">{prj.name}</h4>
                      <p className="text-gray-700 text-xs mb-1">Faculty: {prj.faculty} • {prj.area}</p>
                      <p className="text-gray-500 text-sm mb-1">{prj.desc}</p>
                      <span className="text-xs text-gray-400">{prj.submitted}</span>
                    </div>
                    <div>
                      <span className={`font-semibold px-2 py-1 rounded-full text-xs ${prj.grade === "A+" ? "bg-green-100 text-green-700" : prj.grade === "In Review" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>{prj.grade}</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="text-blue-600 text-sm hover:underline">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
