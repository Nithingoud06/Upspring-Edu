import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

export interface CourseCategory {
  icon: typeof LucideIcon;
  title: string;
  fee: string;
  color: string;
  count?: string;
  description?: string;
}

interface CourseCardProps {
  category: CourseCategory;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ category, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition cursor-pointer"
      onClick={onClick}
    >
      <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
        <category.icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
      {category.count && <p className="text-purple-400">{category.count}</p>}
    </motion.div>
  );
};

export default CourseCard;