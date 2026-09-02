'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const generateRandomData = (count: number, min: number, max: number) => {
  return Array.from({ length: count }, () => 
    Math.floor(Math.random() * (max - min + 1)) + min
  );
};

export default function StockChart() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const data = generateRandomData(15, 50, 200);
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;
  
  const width = 800;
  const height = 300;
  const padding = 20;
  
  const xStep = (width - 2 * padding) / (data.length - 1);
  
  const getY = (value: number) => {
    return height - padding - ((value - minValue) / range) * (height - 2 * padding);
  };
  
  const points = data.map((value, i) => ({
    x: padding + i * xStep,
    y: getY(value),
    value
  }));
  
  const path = `M${points.map(p => `${p.x},${p.y}`).join(' L')}`;
  
  useEffect(() => {
    if (isInView) {
      controls.start({
        pathLength: 1,
        opacity: 1,
        transition: { duration: 1.5, ease: 'easeInOut' }
      });
    }
  }, [controls, isInView]);
  
  return (
    <div ref={ref} className="relative w-full max-w-4xl mx-auto my-12">
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <line
            key={i}
            x1={padding}
            y1={height - padding - (height - 2 * padding) * t}
            x2={width - padding}
            y2={height - padding - (height - 2 * padding) * t}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}
        
        {/* Animated path */}
        <motion.path
          d={path}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={controls}
        />
        
        {/* Dots at data points */}
        {points.map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#3b82f6"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          />
        ))}
        
        {/* X and Y axis */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="#9ca3af"
          strokeWidth="1"
        />
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="#9ca3af"
          strokeWidth="1"
        />
      </svg>
      
      {/* Stock info */}
      <div className="flex justify-between mt-2 text-sm text-gray-500">
        <span>9:30 AM</span>
        <span>4:00 PM</span>
      </div>
      
      <div className="absolute top-4 left-4">
        <div className="text-2xl font-bold">S&P 500</div>
        <div className="text-green-600">+1.5% Today</div>
      </div>
    </div>
  );
}
