import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight, 
  Brush,
  Globe,
  Briefcase,
  UserCheck,
  Mic,
  Code, 
  Database, 
  Terminal,
  X,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
} from 'lucide-react';
import CourseCard, { CourseCategory } from './components/CourseCard';
import CoursePopup from './components/CoursePopup';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseCategory | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const courseCategories = [
  
    { icon: Globe, title: 'Website Design', color: 'bg-green-500' },
    { icon: Terminal, title: 'Fornt End (React)', color: 'bg-blue-500' },
    { icon: Code, title: 'Back End (Java)', color: 'bg-red-500' },
    { icon: Database, title: 'Java Full Stack', count: '30 Days', color: 'bg-purple-500' },
    { icon: Briefcase, title: 'SAP Success Factors', color: 'bg-indigo-500' },
    { icon: UserCheck, title: 'HR Operations', color: 'bg-blue-400' },
    { icon: Users, title: 'HR Recruitment', color: 'bg-teal-500' },
    { icon: Mic, title: 'Spoken English', color: 'bg-orange-400' },
  ];

  const handleCourseClick = (course: CourseCategory) => {
    setSelectedCourse(course);
  };

  const testimonials = [
    {
      name: 'Nithya',
      role: 'web Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
      content: 'The web Designer program completely transformed my career. Now I work at a top tech company.',
    },
    {
      name: 'Rajesh',
      role: 'Front End (React)',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
      content: 'The Front End (React) courses were exactly what I needed to transition into cloud architecture.',
    },
    {
      name: 'Harika',
      role: 'Back End (Java)',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
      content: "Thanks to UpspringEdu's DevOps course, I mastered modern deployment practices and doubled my salary.",
    },
  ];

  const stats = [
    { label: 'Active Students', value: '50,000+' },
    { label: 'Expert Instructors', value: '300+' },
    { label: 'Course Completion Rate', value: '94%' },
    { label: 'Career Transitions', value: '25,000+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <GraduationCap className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">UpspringEdu</span>
          </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#courses" className="text-white hover:text-purple-400 transition">Courses</a>
              <a href="#testimonials" className="text-white hover:text-purple-400 transition">Testimonials</a>
              <a href="#stats" className="text-white hover:text-purple-400 transition">Stats</a>
              <a href="#contact" className="text-white hover:text-purple-400 transition">Contact</a>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowContactForm(true)}
              className="bg-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-600 transition"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Master Software Development with
            <span className="block text-purple-400">Expert-Led Training</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Join our comprehensive software development programs and transform your career with industry-leading instructors.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-600 transition flex items-center justify-center space-x-2"
            >
              <a href="#courses">Browse Courses</a>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400/10 transition"
            >
            
            </motion.button>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
          >
            <BookOpen className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Expert-Led Courses</h3>
            <p className="text-white/70">Learn from industry professionals and gain practical skills for the real world.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
          >
            <Users className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Community Learning</h3>
            <p className="text-white/70">Connect with peers, share knowledge, and grow together in a supportive environment.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
          >
            <Award className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Industry Recognition</h3>
            <p className="text-white/70">Earn certificates valued by top tech companies worldwide.</p>
          </motion.div>
        </div>

        {/* Course Categories */}
        <section id="courses" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Software Development Courses</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Master the most in-demand software development skills with our comprehensive course catalog.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseCategories.map((category) => (
              <CourseCard 
                key={category.title} 
                category={category} 
                onClick={() => handleCourseClick(category)}
              />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-white/70 max-w-2xl mx-auto">See how our students transformed their careers through our platform.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section id="stats" className="py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-white/70 mb-8">Have questions about our courses? We're here to help you start your journey in software development.</p>
                <div className="space-y-4">
                  <div className="flex items-center text-white/70">
                    <Mail className="h-5 w-5 mr-3 text-purple-400" />
                    <span>upspringedu@gmail.com</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <Phone className="h-5 w-5 mr-3 text-purple-400" />
                    <span>8886355612</span>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-400" />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-400" />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Course</label>
                    <select 
                      name="course"
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-400"
                    >
                      <option value="">Select a course</option>
                      {courseCategories.map((course) => (
                        <option key={course.title} value={course.title}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-400"></textarea>
                  </div>
                  <button className="w-full bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold text-white">UpspringEdu</span>
              </div>
              <p className="text-white/70">Empowering the next generation of software developers through quality education.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#courses" className="hover:text-purple-400">Courses</a></li>
                <li><a href="#testimonials" className="hover:text-purple-400">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-purple-400">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-purple-400">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/70 hover:text-purple-400">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/70 hover:text-purple-400">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-white/50 mt-12">
            © 2025 UpspringEdu. All rights reserved.
          </div>
        </footer>
      </main>

      {/* Welcome Popup Dialog */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-md mx-4"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">Start Your Journey Today</h3>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-white/70 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="text-white/70 mb-6">
                Sign up now and get 20% off your first course! Limited time offer for new students.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-400"
                />
                <button
                  className="w-full bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <CheckCircle className="h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Course Details Popup */}
      <AnimatePresence>
        {selectedCourse && (
          <CoursePopup 
            course={selectedCourse}
            isOpen={selectedCourse !==null}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;