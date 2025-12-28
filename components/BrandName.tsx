import React from 'react';

interface BrandNameProps {
  className?: string;
}

const BrandName: React.FC<BrandNameProps> = ({ className = "" }) => (
  <span className={`font-black tracking-tighter ${className}`}>
    <span className="text-blue-600">ADENO</span>
    <span className="text-slate-800">FRIN</span>
  </span>
);

export default BrandName;