import Link from 'next/link'
import { Code2, Gamepad2, Globe, Trophy, Users, Zap } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Learn Like a Game",
      description: "Interactive challenges, XP points, and level up your coding skills"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "5 Languages",
      description: "Learn in Italian, English, Spanish, German, or French"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full Stack Path",
      description: "From HTML to deployment - complete journey to job-ready"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Monthly Prizes",
      description: "Win tech gadgets and subscriptions in our coding tournaments"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Learn together in language-specific communities"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Tutor",
      description: "Get personalized hints when you're stuck (no spoilers!)"
    }
  ]

  const languages = [
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">CodesPlayer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Play to learn full-stack web development. Earn XP, join tournaments, 
            and build real projects in your native language.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Start Learning Free
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 bg-gray-800 rounded-xl font-semibold text-lg hover:bg-gray-700 transition-colors"
            >
              Already have an account?
            </Link>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Learn in Your Language</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang) => (
              <div
                key={lang.code}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <span className="text-2xl">{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why CodesPlayer?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition-colors"
              >
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Level Up?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of developers learning through play. 
            No boring lectures, just pure coding fun with real rewards.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors"
          >
            Start Your Journey Today
          </Link>
        </div>
      </div>
    </div>
  )
}