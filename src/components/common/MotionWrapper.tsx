'use client';

import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

// Linear / Apple caliber smooth easing curve
const smoothEasing = [0.16, 1, 0.3, 1];

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  blur?: boolean;
}

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 16,
  blur = false,
  className = '',
  ...props
}: FadeInProps) {
  const getInitialPosition = () => {
    const base = blur ? { filter: 'blur(6px)' } : {};
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance, ...base };
      case 'down':
        return { opacity: 0, y: -distance, ...base };
      case 'left':
        return { opacity: 0, x: distance, ...base };
      case 'right':
        return { opacity: 0, x: -distance, ...base };
      case 'none':
      default:
        return { opacity: 0, ...base };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{
        duration,
        delay,
        ease: smoothEasing,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.04,
  className = '',
  ...props
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}

export function StaggerItem({
  children,
  className = '',
  distance = 14,
  ...props
}: StaggerItemProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: distance },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: smoothEasing,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

interface InteractiveCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  lift?: number;
}

export function InteractiveCard({
  children,
  className = '',
  lift = -4,
  ...props
}: InteractiveCardProps) {
  return (
    <motion.div
      whileHover={{ y: lift, transition: { duration: 0.22, ease: smoothEasing } }}
      whileTap={{ scale: 0.99, transition: { duration: 0.1 } }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface PageHeaderRevealProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description?: string;
  tags?: string[];
  children?: React.ReactNode;
}

export function PageHeaderReveal({
  badge,
  title,
  highlightText,
  description,
  tags,
  children,
}: PageHeaderRevealProps) {
  return (
    <div className="space-y-6">
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: smoothEasing }}
          className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em]"
        >
          <span className="w-8 h-[2px] bg-amber-400" />
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, delay: 0.05, ease: smoothEasing }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl"
      >
        {title}{' '}
        {highlightText && <span className="text-amber-400">{highlightText}</span>}
      </motion.h1>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: smoothEasing }}
          className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed font-normal"
        >
          {description}
        </motion.p>
      )}

      {tags && tags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18, ease: smoothEasing }}
          className="flex flex-wrap gap-2.5 pt-2"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      )}

      {children && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: smoothEasing }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
