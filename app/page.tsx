'use client';
import { useState } from 'react';
import { ArrowRight, Zap, BookOpen, Sparkles } from 'lucide-react';

export default function Landing() {
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [agreeToEmails, setAgreeToEmails] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const features = [
    {
      icon: BookOpen,
      title: 'AI Micro-Story Feed',
      description: 'Swipe through 5–8 sentence stories. Horror. Romance. Sci-fi. Comedy. Each one freshly generated for you.',
      color: 'from-[#6366F1] to-[#A78BFA]'
    },
    {
      icon: Zap,
      title: 'Creator Tools',
      description: 'Turn consumption into creation. Generate stories from prompts. Remix endings, POV, tone.',
      color: 'from-[#F472B6] to-[#A78BFA]'
    },
    {
      icon: Sparkles,
      title: 'Smart Recommendations',
      description: 'Our algorithm learns what you love. The feed gets better every time you swipe.',
      color: 'from-[#A78BFA] to-[#6366F1]'
    },
    {
      icon: BookOpen,
      title: 'Book Summary Mode',
      description: 'Discover books in the same swipe feed. 5–8 sentence summaries. Buy instantly via affiliate links.',
      color: 'from-[#F472B6] to-[#6366F1]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white">
      {/* Logo - Top Left */}
      <div className="fixed top-6 left-6 z-50">
          <div className="flex items-center gap-2">
          <img src="/logo.png" alt="PickPlot" className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#A78BFA] to-[#F472B6] bg-clip-text text-transparent">PickPlot</span>
        </div>
          </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="text-center mb-24">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Stories That Adapt
            <br />
            <span className="bg-gradient-to-r from-[#6366F1] via-[#A78BFA] to-[#F472B6] bg-clip-text text-transparent">
              To Your Taste
            </span>
          </h1>

          {/* Description - Simplified */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed font-light">
              Experience <span className="font-bold bg-gradient-to-r from-[#6366F1] via-[#A78BFA] to-[#F472B6] bg-clip-text text-transparent">ENDLESS</span> AI-generated micro-stories.
            </p>
          </div>

          {/* CTA Button */}
          <button 
            className="px-10 py-5 bg-gradient-to-r from-[#F472B6] to-[#A78BFA] hover:from-[#F472B6]/90 hover:to-[#A78BFA]/90 rounded-xl font-bold text-xl flex items-center justify-center gap-3 mx-auto transition transform hover:scale-105 shadow-lg shadow-[#F472B6]/30"
            onClick={() => setWaitlistModalOpen(true)}
          >
            Join Waitlist <ArrowRight className="w-6 h-6" />
            </button>
        </section>

        {/* Features Grid - 4 Squares */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#374151]/40 to-[#1F2937]/40 border border-[#374151] hover:border-[#A78BFA]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#A78BFA]/20 hover:-translate-y-1"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[#A78BFA] group-hover:to-[#F472B6] transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-[#A78BFA]/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
              </div>
              );
            })}
        </div>
      </section>
          </div>

      {/* Waitlist Modal */}
      {waitlistModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Blurred Background Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setWaitlistModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-gradient-to-br from-[#1F2937] via-[#111827] to-[#1F2937] border border-[#A78BFA]/30 rounded-2xl p-8 md:p-10 w-full max-w-md shadow-2xl shadow-[#A78BFA]/20">
            {/* Close Button */}
            <button
              onClick={() => setWaitlistModalOpen(false)}
              className="absolute top-4 right-4 text-[#A78BFA] hover:text-white transition p-2 hover:bg-[#374151] rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Beta Badge */}
            <div className="inline-block mb-4 px-3 py-1 bg-gradient-to-r from-[#6366F1] to-[#F472B6] rounded-full">
              <span className="text-xs font-bold text-white">🚀 BETA RELEASE</span>
            </div>

            {/* Header */}
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#A78BFA] to-[#F472B6] bg-clip-text text-transparent">
              Join the Beta Waitlist
            </h2>
            <p className="text-[#A78BFA] mb-6 text-lg">
              Be among the first to experience PickPlot. Get early access to AI-powered storytelling and shape the future of how we consume stories.
            </p>

            {/* Form */}
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setSubmitError('');
                setSubmitSuccess(false);

                try {
                  const response = await fetch('/api/waitlist', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      email,
                      agreeToEmails,
                    }),
                  });

                  const data = await response.json();

                  if (!response.ok) {
                    throw new Error(data.error || 'Failed to join waitlist');
                  }

                  // Success!
                  setSubmitSuccess(true);
                  setEmail('');
                  setAgreeToEmails(false);

                  // Close modal after 2 seconds
                  setTimeout(() => {
                    setWaitlistModalOpen(false);
                    setSubmitSuccess(false);
                  }, 2000);
                } catch (error) {
                  setSubmitError(
                    error instanceof Error 
                      ? error.message 
                      : 'Failed to join waitlist. Please try again.'
                  );
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="space-y-5"
            >
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#A78BFA] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-[#374151] text-white placeholder-[#A78BFA]/50 focus:outline-none focus:border-[#A78BFA] focus:ring-2 focus:ring-[#A78BFA]/20 transition"
                />
              </div>
              
              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeToEmails"
                  checked={agreeToEmails}
                  onChange={(e) => setAgreeToEmails(e.target.checked)}
                  required
                  className="mt-1 w-5 h-5 accent-[#F472B6] rounded border-[#374151] bg-[#111827] focus:ring-2 focus:ring-[#A78BFA]/20"
                />
                <label htmlFor="agreeToEmails" className="text-sm text-[#A78BFA] cursor-pointer">
                  I agree to receive email notifications about the beta release, new features, and updates from PickPlot.
                </label>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-sm text-red-400">{submitError}</p>
          </div>
              )}

              {/* Success Message */}
              {submitSuccess && (
                <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-sm text-green-400">
                    🎉 Successfully joined the waitlist! We'll be in touch soon.
                  </p>
            </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!email || !agreeToEmails || isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#F472B6] to-[#A78BFA] hover:from-[#F472B6]/90 hover:to-[#A78BFA]/90 rounded-lg font-bold text-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Additional Info */}
            {!submitSuccess && (
              <p className="text-xs text-[#A78BFA]/60 mt-4 text-center">
                We'll send an invite as soon as we're ready. No spam, promise! ✨
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
