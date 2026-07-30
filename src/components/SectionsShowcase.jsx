import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, History, BookOpen, Mail, Phone, MapPin, ExternalLink, 
  Sparkles, CheckCircle2, ChevronRight, Cpu, FlaskConical, Landmark, 
  BarChart3, Code, Palette, Compass 
} from 'lucide-react';

export default function SectionsShowcase() {
  const historyMilestones = [
    { year: 'Foundation Year', title: 'Established Vision', desc: 'Aurora College was founded to cater to the growing demand for world-class technical and professional education.' },
    { year: 'Academic Expansion', title: 'Multidisciplinary Growth', desc: 'Introduced premier departments across Engineering, Sciences, Management, Data Informatics, and Fine Arts.' },
    { year: 'Research Hub', title: 'Cutting-Edge Innovation', desc: 'Transformed into a nationally recognized innovation hub, attracting elite researchers and student pioneers.' },
    { year: 'Global Recognition', title: 'Strategic Alliances', desc: 'Forged global collaborations with leading international tech corporations and premier academic universities.' },
  ];

  const courses = [
    { category: 'Engineering', code: 'B.Tech', desc: 'CSE, AIML, Data Science, Full Stack Dev, Cyber Security', icon: Cpu, badge: 'Popular' },
    { category: 'Sciences', code: 'B.Sc', desc: 'Artificial Intelligence, Machine Learning, Computer Science', icon: FlaskConical, badge: 'High Demand' },
    { category: 'Commerce', code: 'B.Com', desc: 'Banking, International Finance & Digital Taxation', icon: Landmark, badge: 'Professional' },
    { category: 'Finance', code: 'B.Fin', desc: 'Fintech, Algorithmic Trading & Digital Economy', icon: BarChart3, badge: 'New' },
    { category: 'Management', code: 'BBA', desc: 'Business Analytics, Entrepreneurship & Leadership', icon: Building2, badge: 'Industry Choice' },
    { category: 'Informatics', code: 'BCA', desc: 'Data Science, Cloud Computing & Software Architecture', icon: Code, badge: 'Top Tech' },
    { category: 'Fine Arts', code: 'BFA', desc: 'Gaming Technology, Fashion Design, 3D Animation & VFX', icon: Palette, badge: 'Creative' },
    { category: 'Architecture', code: 'B.Arch', desc: 'Sustainable Design, Urban Planning & Smart Infrastructure', icon: Compass, badge: '5-Year Program' },
  ];

  return (
    <div className="relative z-30 pt-16 pb-24 space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* About Us Section */}
      <section id="about" className="relative scroll-mt-28">
        <div className="glass-panel p-8 sm:p-12 md:p-16 rounded-[36px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Aurora University</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              Pioneering Knowledge, Innovation, & Leadership
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              Aurora University is built upon a foundation of academic excellence, multidisciplinary research, 
              and state-of-the-art laboratory infrastructure. Our mission is to nurture critical thinkers, technological 
              innovators, and visionary leaders equipped to solve tomorrow’s global challenges.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <div className="text-3xl font-extrabold text-white">15,000+</div>
                <div className="text-xs text-indigo-300 font-semibold mt-1">Alumni Network</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">200+</div>
                <div className="text-xs text-cyan-300 font-semibold mt-1">Expert Faculty</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">50+</div>
                <div className="text-xs text-purple-300 font-semibold mt-1">Degree Programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section id="history" className="relative scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 mb-3">
            <History className="w-3.5 h-3.5" />
            <span>Legacy & Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            History of Aurora University
          </h2>
          <p className="text-slate-300 text-sm mt-3">
            From humble beginnings to an internationally acclaimed center of academic research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {historyMilestones.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass-card-subtle p-7 rounded-3xl border border-white/10 hover:border-indigo-400/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {item.year}
                </span>
                <CheckCircle2 className="w-5 h-5 text-indigo-400/60" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300/90 leading-relaxed font-normal">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courses Grid Section */}
      <section id="courses" className="relative scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Our World-Class Courses
          </h2>
          <p className="text-slate-300 text-sm mt-3">
            Industry-aligned curriculum designed to foster expertise and practical innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group glass-card-subtle p-6 rounded-3xl border border-white/10 hover:border-indigo-400/40 hover:bg-white/[0.09] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-indigo-300" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 text-slate-300">
                      {course.badge}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-1">
                    {course.code}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {course.category}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {course.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-indigo-300 group-hover:text-white transition-colors">
                  <span>View Syllabus</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative scroll-mt-28">
        <div className="glass-panel p-8 sm:p-12 rounded-[36px] border border-white/15 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300 mb-4">
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
                Have Questions? Talk to Admissions
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Our admissions counselors and department advisors are available to guide you through program options, 
                scholarships, and campus visits.
              </p>

              <div className="space-y-4">
                <a 
                  href="https://aurora.edu.in/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-sm font-semibold text-indigo-300 hover:text-white transition-all w-max"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Official Portal: aurora.edu.in</span>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 text-sm text-slate-300 w-max">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Admissions Helpline: +1234567890</span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 text-sm text-slate-300 w-max">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Aurora Main Campus, Innovation Way</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/15">
              <h3 className="text-lg font-bold text-white mb-4">Send an Enquiry</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert("Enquiry submitted successfully! We will contact you soon."); }} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-sm text-white rounded-xl glass-input outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 text-sm text-white rounded-xl glass-input outline-none"
                />
                <textarea
                  rows="3"
                  required
                  placeholder="Your Enquiry Message"
                  className="w-full px-4 py-3 text-sm text-white rounded-xl glass-input outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-bold text-white rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:shadow-lg hover:shadow-indigo-500/40 transition-all active:scale-98"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="pt-10 border-t border-white/10 text-center text-xs text-slate-400">
        <p>&copy; 2026 Aurora University. All Rights Reserved. Preserving academic excellence and modern innovation.</p>
      </footer>
    </div>
  );
}
