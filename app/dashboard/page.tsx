'use client'

import { useState } from 'react'
import { Trophy, Target, TrendingUp, Users, Code2, Calendar, Star, Award } from 'lucide-react'

export default function DashboardPage() {
  const [user] = useState({
    name: 'Coder',
    level: 5,
    xp: 1250,
    nextLevelXp: 2000,
    streak: 7,
    rank: 42
  })

  const stats = [
    {
      title: 'Current Streak',
      value: user.streak,
      icon: TrendingUp,
      color: 'bg-orange-500',
      change: '+2 days'
    },
    {
      title: 'Daily Rank',
      value: `#${user.rank}`,
      icon: Trophy,
      color: 'bg-yellow-500',
      change: 'Keep going!'
    },
    {
      title: 'Lessons Completed',
      value: '18',
      icon: Target,
      color: 'bg-green-500',
      change: 'This week: +5'
    },
    {
      title: 'Active Learners',
      value: '2.5k',
      icon: Users,
      color: 'bg-purple-500',
      change: 'Online now: 347'
    }
  ]

  const dailyChallenges = [
    { id: 1, title: 'Complete 3 HTML exercises', xp: 50, completed: true },
    { id: 2, title: 'Build a simple navbar', xp: 100, completed: false },
    { id: 3, title: 'Learn CSS Grid basics', xp: 75, completed: false }
  ]

  const leaderboard = [
    { rank: 1, name: 'Alex Johnson', xp: 12500, level: 15 },
    { rank: 2, name: 'Maria Silva', xp: 11800, level: 14 },
    { rank: 3, name: 'Tom Chen', xp: 11200, level: 14 },
    { rank: 42, name: 'You', xp: user.xp, level: user.level, isCurrentUser: true }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-gray-400 mt-2">
            Ready for today's coding challenge? Keep your streak alive!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-sm text-gray-400">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-400">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Progress */}
          <div className="lg:col-span-2 space-y-8">
            {/* XP Progress */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Your Progress</h2>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="font-bold">{user.level}</span>
                  </div>
                  <span className="font-semibold">Level {user.level}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>XP Progress</span>
                  <span>{user.xp} / {user.nextLevelXp} XP</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                 <div 
                     className="h-full bg-blue-500"
                     style={{ width: `${(user.xp / user.nextLevelXp) * 100}%` }}
                   />
                 </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold">{user.streak}</div>
                  <div className="text-sm text-gray-400">Day Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">18</div>
                  <div className="text-sm text-gray-400">Lessons</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
              </div>
            </div>

            {/* Continue Learning */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-6">Continue Learning</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500 rounded-lg">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">HTML & CSS Basics</h3>
                      <p className="text-sm text-gray-400">Module 2: CSS Layouts</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">65% complete</div>
                    <div className="w-32 h-2 bg-gray-600 rounded-full mt-1">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '65%' }} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500 rounded-lg">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">JavaScript Fundamentals</h3>
                      <p className="text-sm text-gray-400">Module 1: Variables & Functions</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">30% complete</div>
                    <div className="w-32 h-2 bg-gray-600 rounded-full mt-1">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '30%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Daily Challenges */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Daily Challenges</h2>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="space-y-4">
                {dailyChallenges.map((challenge) => (
                  <div key={challenge.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        challenge.completed ? 'bg-green-500' : 'bg-gray-600'
                      }`}>
                        {challenge.completed ? (
                          <Star className="w-4 h-4" />
                        ) : (
                          <span className="text-sm">!</span>
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium">{challenge.title}</h4>
                        <p className="text-sm text-gray-400">{challenge.xp} XP</p>
                      </div>
                    </div>
                    <button className={`px-3 py-1 rounded text-sm ${
                      challenge.completed 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {challenge.completed ? 'Completed' : 'Start'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Leaderboard Preview */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">🏆 Monthly Leaderboard</h2>
                <span className="text-sm text-gray-400">Ends in 5 days</span>
              </div>

              <div className="space-y-3">
                {leaderboard.map((player) => (
                  <div
                    key={player.rank}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      player.isCurrentUser ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        player.rank === 1 ? 'bg-yellow-500' :
                        player.rank === 2 ? 'bg-gray-300' :
                        player.rank === 3 ? 'bg-orange-700' :
                        'bg-gray-600'
                      }`}>
                        <span className={`font-bold text-sm ${
                          player.rank <= 3 ? 'text-gray-900' : 'text-white'
                        }`}>
                          {player.rank}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium">{player.name}</h4>
                        <p className="text-sm text-gray-400">Level {player.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{player.xp.toLocaleString()} XP</div>
                      <div className="text-sm text-gray-400">{player.rank === 1 ? '🏆 Leader' : 'Coding...'}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-700/50 rounded-xl">
                <h4 className="font-bold mb-2">This Month's Prizes:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Award className="w-4 h-4 mr-2 text-yellow-500" />
                    <span>1st: 1 Year Pro + iPhone 15</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="w-4 h-4 mr-2 text-gray-300" />
                    <span>2nd: 6 Months Pro + PS5</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="w-4 h-4 mr-2 text-orange-700" />
                    <span>3rd: 3 Months Pro + Headphones</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}