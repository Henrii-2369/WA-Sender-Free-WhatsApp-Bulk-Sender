import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-dark to-brand px-6 py-16 md:px-16 md:py-20 text-center shadow-2xl shadow-brand/20">
          
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-5"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-5"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Supercharge Your WhatsApp Marketing?
            </h2>
            <p className="text-brand-surface/90 text-lg md:text-xl mb-10 leading-relaxed">
              Join thousands of businesses using WAExport to streamline their contact management. Export your first list in less than 2 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/download" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-dark bg-white rounded-xl shadow-lg hover:bg-slate-50 transition-transform duration-200 hover:-translate-y-1"
              >
                Install for Chrome Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/pricing" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                View Pricing
              </a>
            </div>
            
            <p className="mt-8 text-sm text-white/60">
              No credit card required for free version.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;