import { useState } from 'react';
import { ArrowRight, Zap, BookOpen, Sparkles, ChevronDown, Menu, X } from 'lucide-react';

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('stories');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-[#111827]/80 border-b border-[#374151] z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-[#F472B6]" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#A78BFA] to-[#F472B6] bg-clip-text text-transparent">StoryVerse</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-[#A78BFA] transition">Features</a>
            <a href="#creators" className="hover:text-[#A78BFA] transition">For Creators</a>
            <a href="#pricing" className="hover:text-[#A78BFA] transition">Pricing</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          <button className="hidden md:block px-6 py-2 bg-[#F472B6] hover:bg-[#F472B6]/90 rounded-lg font-semibold transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#111827] border-t border-[#374151] p-4 space-y-3">
            <a href="#features" className="block hover:text-[#A78BFA]">Features</a>
            <a href="#creators" className="block hover:text-[#A78BFA]">For Creators</a>
            <a href="#pricing" className="block hover:text-[#A78BFA]">Pricing</a>
            <button className="w-full px-4 py-2 bg-[#F472B6] hover:bg-[#F472B6]/90 rounded-lg font-semibold transition">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#374151]/50 border border-[#A78BFA]/30 rounded-full">
            <span className="text-sm text-[#A78BFA]">✨ AI-Powered Stories at Your Fingertips</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Stories That Adapt
            <br />
            <span className="bg-gradient-to-r from-[#6366F1] via-[#A78BFA] to-[#F472B6] bg-clip-text text-transparent">
              To Your Taste
            </span>
          </h1>

          <p className="text-xl text-[#A78BFA] mb-12 max-w-2xl mx-auto">
            Swipe through endless micro-stories. Create your own. Remix endings. Switch POV. Experience storytelling reimagined.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-[#F472B6] hover:bg-[#F472B6]/90 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition transform hover:scale-105">
              Launch App <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-[#A78BFA] hover:bg-[#A78BFA]/10 rounded-lg font-bold text-lg transition">
              Watch Demo
            </button>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/20 to-[#A78BFA]/20 blur-3xl rounded-full"></div>
            <div className="relative bg-gradient-to-br from-[#1F2937] to-[#111827] border border-[#A78BFA]/30 rounded-2xl p-8 backdrop-blur">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-video bg-gradient-to-br from-[#6366F1]/20 to-[#A78BFA]/20 rounded-lg flex items-center justify-center border border-[#374151]">
                    <div className="text-center">
                      <Sparkles className="w-8 h-8 mx-auto mb-2 text-[#A78BFA]" />
                      <p className="text-sm text-[#A78BFA]">Story Card {i}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#1F2937]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The MVP Experience</h2>
            <p className="text-[#A78BFA] text-lg">Everything you need to discover and create</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-[#374151]/50 to-[#1F2937]/50 border border-[#374151] hover:border-[#A78BFA]/50 rounded-xl p-8 transition hover:shadow-lg hover:shadow-[#A78BFA]/20">
              <div className="w-12 h-12 bg-[#6366F1]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#A78BFA]/20 transition">
                <BookOpen className="w-6 h-6 text-[#A78BFA]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Micro-Story Feed</h3>
              <p className="text-[#A78BFA] mb-4">Swipe through 5–8 sentence stories. Horror. Romance. Sci-fi. Comedy. Each one freshly generated for you.</p>
              <ul className="space-y-2 text-sm text-[#A78BFA]/80">
                <li>✓ Infinite variety of genres</li>
                <li>✓ Smart recommendation engine</li>
                <li>✓ Read in seconds</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-[#374151]/50 to-[#1F2937]/50 border border-[#374151] hover:border-[#F472B6]/50 rounded-xl p-8 transition hover:shadow-lg hover:shadow-[#F472B6]/20">
              <div className="w-12 h-12 bg-[#F472B6]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#A78BFA]/20 transition">
                <Zap className="w-6 h-6 text-[#F472B6]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Creator Tools <span className="text-sm text-[#A78BFA]">(Premium)</span></h3>
              <p className="text-[#A78BFA] mb-4">Turn consumption into creation. Generate stories from prompts. Remix endings, POV, tone.</p>
              <ul className="space-y-2 text-sm text-[#A78BFA]/80">
                <li>✓ Story Generator</li>
                <li>✓ One-click Remix</li>
                <li>✓ Share with community</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-[#374151]/50 to-[#1F2937]/50 border border-[#374151] hover:border-[#A78BFA]/50 rounded-xl p-8 transition hover:shadow-lg hover:shadow-[#A78BFA]/20">
              <div className="w-12 h-12 bg-[#A78BFA]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#A78BFA]/20 transition">
                <Sparkles className="w-6 h-6 text-[#A78BFA]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Smart Recommendations</h3>
              <p className="text-[#A78BFA] mb-4">Our algorithm learns what you love. The feed gets better every time you swipe.</p>
              <ul className="space-y-2 text-sm text-[#A78BFA]/80">
                <li>✓ Personalized feed</li>
                <li>✓ Genre preferences</li>
                <li>✓ Engagement-driven</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="group bg-gradient-to-br from-[#374151]/50 to-[#1F2937]/50 border border-[#374151] hover:border-[#F472B6]/50 rounded-xl p-8 transition hover:shadow-lg hover:shadow-[#F472B6]/20">
              <div className="w-12 h-12 bg-[#F472B6]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#A78BFA]/20 transition">
                <BookOpen className="w-6 h-6 text-[#F472B6]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Book Summary Mode</h3>
              <p className="text-[#A78BFA] mb-4">Discover books in the same swipe feed. 5–8 sentence summaries. Buy instantly via affiliate links.</p>
              <ul className="space-y-2 text-sm text-[#A78BFA]/80">
                <li>✓ Curated summaries</li>
                <li>✓ Direct purchase links</li>
                <li>✓ Mixed with stories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Creators Section */}
      <section id="creators" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#6366F1]/10 to-[#A78BFA]/10 border border-[#A78BFA]/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6">For Creators</h2>
            <p className="text-lg text-[#A78BFA] mb-8">
              Premium features that turn you into a storyteller. Generate unlimited stories, remix them infinitely, and build your audience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1F2937]/50 rounded-lg p-6 border border-[#374151]">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#F472B6]" /> Story Generator
                </h3>
                <p className="text-[#A78BFA]">Enter a prompt → get a complete story in seconds. No writer's block.</p>
              </div>
              
              <div className="bg-[#1F2937]/50 rounded-lg p-6 border border-[#374151]">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#A78BFA]" /> Story Remix
                </h3>
                <p className="text-[#A78BFA]">One click to change endings, switch POV, rewrite as comedy, or swap genres.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-[#1F2937]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-[#A78BFA] text-lg">Free to explore. Premium to create.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gradient-to-br from-[#374151]/50 to-[#1F2937]/50 border border-[#374151] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-[#A78BFA] mb-6">Perfect for readers</p>
              <div className="text-4xl font-bold mb-8">$0<span className="text-lg text-[#A78BFA]">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="text-[#A78BFA]">✓ Unlimited story feed</li>
                <li className="text-[#A78BFA]">✓ Smart recommendations</li>
                <li className="text-[#A78BFA]">✓ Book summaries</li>
                <li className="text-[#A78BFA]/50">✗ Creator tools</li>
              </ul>
              <button className="w-full px-6 py-3 border-2 border-[#A78BFA] hover:bg-[#A78BFA]/10 rounded-lg font-semibold transition">
                Get Started
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-[#6366F1]/20 to-[#A78BFA]/20 border border-[#A78BFA] rounded-xl p-8 ring-2 ring-[#F472B6]/30">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold">Premium</h3>
                <span className="text-xs bg-[#F472B6] text-white px-3 py-1 rounded-full">Popular</span>
              </div>
              <p className="text-[#A78BFA] mb-6">For serious creators</p>
              <div className="text-4xl font-bold mb-8">$9.99<span className="text-lg text-[#A78BFA]">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="text-white">✓ Everything in Free</li>
                <li className="text-white">✓ Story Generator</li>
                <li className="text-white">✓ Unlimited Remixes</li>
                <li className="text-white">✓ Community sharing</li>
              </ul>
              <button className="w-full px-6 py-3 bg-[#F472B6] hover:bg-[#F472B6]/90 rounded-lg font-semibold transition">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Enter StoryVerse?</h2>
          <p className="text-lg text-[#A78BFA] mb-8">Join thousands discovering stories their way.</p>
          <button className="px-8 py-4 bg-[#F472B6] hover:bg-[#F472B6]/90 rounded-lg font-bold text-lg flex items-center justify-center gap-2 mx-auto transition transform hover:scale-105">
            Launch App <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#374151] py-12 px-6 bg-[#111827]/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#F472B6]" />
                <span className="font-bold">StoryVerse</span>
              </div>
              <p className="text-sm text-[#A78BFA]">AI stories, endless possibilities.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-[#A78BFA] hover:text-white">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-[#A78BFA]">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-[#A78BFA]">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#374151] pt-8 text-center text-sm text-[#A78BFA]">
            <p>&copy; 2025 StoryVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}