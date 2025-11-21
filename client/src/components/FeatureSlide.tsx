import React from 'react';

export interface Feature {
  id: number;
  badge: string;
  title: string;
  description: string;
}

interface FeatureSlideProps {
  feature: Feature;
  isActive: boolean;
}

export const FeatureSlide: React.FC<FeatureSlideProps> = ({ feature, isActive }) => {
  return (
    <div className="w-full flex-shrink-0 snap-center px-4 sm:px-12 py-8">
      <div className="flex h-full w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
        
        {/* Media Placeholder (Left) */}
        <div 
          className={`relative aspect-video w-full overflow-hidden rounded-xl transition-all duration-700 lg:w-3/5 ${
            isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-50'
          }`}
          style={{
            background: 'radial-gradient(circle at center, rgba(90, 60, 180, 0.15), rgba(8, 10, 20, 1))',
            border: '1px solid rgba(255,255,255,0.05)'
          }}
        >
          
          {/* Fake UI Elements for visual interest */}
          <div className="absolute left-4 top-4 flex gap-2 opacity-50">
             <div className="h-2.5 w-2.5 rounded-full bg-white/20"></div>
             <div className="h-2.5 w-2.5 rounded-full bg-white/20"></div>
             <div className="h-2.5 w-2.5 rounded-full bg-white/20"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-xs font-medium tracking-widest text-white/30 uppercase">
              Visual Preview
            </div>
          </div>
        </div>

        {/* Content (Right) */}
        <div className={`flex w-full flex-col lg:w-2/5 transition-all duration-700 delay-100 ${
           isActive ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        }`}>
          <div className="mb-4 inline-flex items-center self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md shadow-[0_0_10px_rgba(167,139,250,0.2)]">
            {feature.badge}
          </div>
          
          <h3 className="mb-4 font-serif text-3xl text-white md:text-4xl lg:text-5xl tracking-tight">
            {feature.title}
          </h3>
          
          <p className="text-lg leading-relaxed text-muted-foreground/80">
            {feature.description}
          </p>
        </div>

      </div>
    </div>
  );
};