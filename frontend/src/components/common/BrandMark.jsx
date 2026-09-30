// File: src/components/common/BrandMark.jsx
import React from 'react';
import { COLOR_TOKENS } from '../../config/constants';

export function BrandMark({ size = 36, className = '' }) {
  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: COLOR_TOKENS.bg,
      }}
    >
      <img 
        src="/logo.png" 
        alt="Nigrani Logo" 
        style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }} 
      />
    </div>
  );
}

export default BrandMark;
