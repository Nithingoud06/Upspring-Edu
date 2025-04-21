import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { CourseCategory } from './CourseCard';

interface CoursePopupProps {
  course: CourseCategory;
  isOpen: boolean;
  onClose: () => void;
}

const courseDetails: Record<string, {
  description: string;
  duration: string;
  features: string[];
  prerequisites: string[];
}> = {
  'UI/UX': {
    description: 'Master the fundamentals of user interface and experience design with industry-standard tools and methodologies.',
    duration: '12 Weeks',
    features: [
      'Design thinking methodology',
      'Wireframing and prototyping',
      'User research techniques',
      'Interactive design principles'
    ],
    prerequisites: ['Basic computer skills', 'Creative mindset']
  },
  'Website Design': {
    description: 'Learn to create visually stunning and functional websites using modern design principles and technologies.',
    duration: '10 Weeks',
    features: [
      'HTML5, CSS3, and JavaScript basics',
      'Responsive design techniques',
      'Web accessibility standards',
      'Visual design principles'
    ],
    prerequisites: ['Basic HTML knowledge', 'Familiarity with graphic design tools']
  },
  'Fornt End (React)': {
    description: 'Become proficient in building modern web applications using React and related frontend technologies.',
    duration: '14 Weeks',
    features: [
      'React fundamentals and hooks',
      'State management with Redux',
      'Single page application architecture',
      'Performance optimization techniques'
    ],
    prerequisites: ['JavaScript basics', 'HTML/CSS knowledge']
  },
  'Back End (Java)': {
    description: 'Master server-side programming with Java to build robust, scalable backend systems.',
    duration: '16 Weeks',
    features: [
      'Java programming fundamentals',
      'Spring Boot framework',
      'RESTful API development',
      'Database integration and ORM'
    ],
    prerequisites: ['Basic programming concepts', 'Problem-solving skills']
  },
  'Java Full Stack': {
    description: 'Comprehensive training in both frontend and backend development using Java and modern web technologies.',
    duration: '30 Days',
    features: [
      'Java core and advanced concepts',
      'Spring framework ecosystem',
      'Frontend integration with React/Angular',
      'Microservices architecture'
    ],
    prerequisites: ['Basic programming knowledge', 'Logical thinking']
  },
  'SAP Success Factors': {
    description: 'Learn to implement and configure SAP SuccessFactors, a leading cloud-based HR management system.',
    duration: '8 Weeks',
    features: [
      'SuccessFactors modules and integration',
      'HR process automation',
      'Reporting and analytics',
      'System configuration and customization'
    ],
    prerequisites: ['HR domain knowledge', 'Basic IT skills']
  },
  'HR Operations': {
    description: 'Master the fundamentals of HR operations, processes, and best practices for organizational success.',
    duration: '6 Weeks',
    features: [
      'HR policies and procedures',
      'Employee lifecycle management',
      'Compliance and regulations',
      'HR systems and tools'
    ],
    prerequisites: ['Basic understanding of workplace dynamics', 'Organizational skills']
  },
  'HR Recruitment': {
    description: 'Learn effective talent acquisition strategies and techniques for identifying and hiring top talent.',
    duration: '8 Weeks',
    features: [
      'Sourcing and screening techniques',
      'Interview methodologies',
      'Candidate assessment tools',
      'Onboarding best practices'
    ],
    prerequisites: ['Communication skills', 'People skills']
  },
  'Spoken English': {
    description: 'Improve your English speaking skills for personal and professional development with practical exercises.',
    duration: '12 Weeks',
    features: [
      'Pronunciation and accent reduction',
      'Conversation practice and fluency',
      'Business English vocabulary',
      'Presentation and public speaking'
    ],
    prerequisites: ['Basic English understanding', 'Willingness to practice']
  },
};

const CoursePopup: React.FC<CoursePopupProps> = ({ course, isOpen, onClose }) => {
  const details = courseDetails[course.title] || {
    description: 'Comprehensive training program designed to help you master essential skills in this field.',
    duration: '8-12 Weeks',
    features: ['Hands-on projects', 'Expert-led instruction', 'Industry-relevant curriculum', 'Career support'],
    prerequisites: ['Basic knowledge in the field', 'Dedication to learning']
  };

  const handleEnrollClick = () => {
    onClose();
    const contactSection = document.getElementById('contact');
    const courseSelect = document.querySelector('select[name="course"]') as HTMLSelectElement;
    if (contactSection && courseSelect) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      courseSelect.value = course.title;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 ${!isOpen && 'pointer-events-none'}`}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: isOpen ? 1 : 0.9, opacity: isOpen ? 1 : 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-2xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className={`${course.color} w-12 h-12 rounded-full flex items-center justify-center`}>
              <course.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">{course.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-white/80 mb-4">{details.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-purple-400 font-semibold mr-2">Duration:</span>
            <span className="text-white">{details.duration}</span>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-white mb-3">What You'll Learn</h4>
          <ul className="space-y-2">
            {details.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-white mb-3">Prerequisites</h4>
          <ul className="space-y-2">
            {details.prerequisites.map((prerequisite, index) => (
              <li key={index} className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2 mt-2 flex-shrink-0"></div>
                <span className="text-white/80">{prerequisite}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnrollClick}
            className={`${course.color} text-white px-6 py-3 rounded-lg font-semibold transition flex-1 flex items-center justify-center`}
          >
            Enroll Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/5 transition flex-1"
            onClick={onClose}
          >
            Learn More Later
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CoursePopup;