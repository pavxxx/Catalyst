// app/achievements/page.tsx

const achievements = [
  { id: 1, title: "Dean's List", description: "Achieved a GPA of 4.0 in Fall 2024.", icon: "🏆" },
  { id: 2, title: "Hackathon Winner", description: "1st place in the annual university hackathon.", icon: "🥇" },
  { id: 3, title: "Top Intern", description: "Top performer in the Microsoft internship program.", icon: "⭐" },
  { id: 4, title: "Code Master", description: "Completed 500 coding challenges.", icon: "💻" },
  { id: 5, title: "Perfect Attendance", description: "Never missed a single class in Spring 2025.", icon: "✅" },
  { id: 6, title: "Lead Volunteer", description: "Led the university's annual charity drive.", icon: "🤝" },
];

export default function AchievementsPage() {
  return (
    <main className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Achievements</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map(achievement => (
          <div key={achievement.id} className="bg-white p-6 rounded-xl shadow-md text-center transition-transform hover:-translate-y-1">
            <div className="text-6xl mb-4">{achievement.icon}</div>
            <h2 className="font-bold text-lg text-gray-800">{achievement.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{achievement.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}