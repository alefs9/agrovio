import React from 'react';
import { Camera, LayoutDashboard, Smartphone, Image as ImageIcon } from 'lucide-react';

export interface ImagePlaceholderProps {
  label: string;
  description?: string;
  aspectRatio?: 'video' | 'square' | 'mobile' | 'dashboard' | 'wide' | 'auto';
  className?: string;
  type?: 'documentary' | 'dashboard' | 'mobile' | 'grid';
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  description,
  aspectRatio = 'video',
  className = '',
  type = 'documentary',
}) => {
  const aspectClasses = {
    video: 'aspect-video w-full',
    square: 'aspect-square',
    mobile: 'w-64 aspect-[9/16] mx-auto',
    dashboard: 'aspect-[16/10] w-full',
    wide: 'aspect-[21/9] w-full',
    auto: 'w-full min-h-[220px]',
  };

  const getIcon = () => {
    switch (type) {
      case 'dashboard':
        return <LayoutDashboard className="w-8 h-8 text-emerald-600 mb-2" />;
      case 'mobile':
        return <Smartphone className="w-8 h-8 text-emerald-600 mb-2" />;
      case 'grid':
        return <ImageIcon className="w-8 h-8 text-emerald-600 mb-2" />;
      default:
        return <Camera className="w-8 h-8 text-emerald-600 mb-2" />;
    }
  };

  return (
    <div
      className={`relative rounded-2xl border-2 border-dashed border-emerald-300/80 bg-gradient-to-br from-emerald-50/60 via-green-50/30 to-white flex flex-col items-center justify-center p-6 text-center shadow-inner overflow-hidden group hover:border-emerald-500/80 transition-all duration-300 ${aspectClasses[aspectRatio]} ${className}`}
    >
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#16a34a_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="p-3 bg-white/90 rounded-2xl shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform duration-300">
          {getIcon()}
        </div>
        
        <span className="mt-3 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200/60">
          📷 {label}
        </span>

        {description && (
          <p className="mt-2 text-xs text-gray-500 max-w-sm leading-relaxed font-medium">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
