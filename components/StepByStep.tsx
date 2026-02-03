import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Install Extension',
    description: 'Add WAExport to your browser from the Chrome Web Store in seconds.',
  },
  {
    id: 2,
    title: 'Open WhatsApp Web',
    description: 'Log in to your WhatsApp Web. The tool integrates seamlessly into the interface.',
  },
  {
    id: 3,
    title: 'Select & Export',
    description: 'Choose to export from All Chats, Labels, or Specific Groups. Click Export.',
  },
];

const StepByStep: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
             <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand to-brand-light opacity-10 rounded-3xl transform rotate-3 scale-105"></div>
                <img 
                  src="https://picsum.photos/600/400?grayscale&blur=2" 
                  alt="WAExport Dashboard Interface" 
                  className="relative rounded-3xl shadow-2xl border border-slate-100 w-full object-cover"
                />
                {/* Overlay UI Mockup */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-xl shadow-lg border border-brand/10">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-500 uppercase font-bold">Status</span>
                            <span className="text-brand font-bold flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                                Active
                            </span>
                        </div>
                        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                            Export Now
                        </button>
                    </div>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-brand font-bold tracking-wide uppercase text-sm mb-3">Simple Workflow</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10">
              Get Started in 3 Simple Steps
            </h3>
            
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.id} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-brand text-brand flex items-center justify-center text-xl font-bold shadow-sm group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                      {step.id}
                    </div>
                    {step.id !== steps.length && (
                       <div className="w-0.5 h-12 bg-slate-200 mx-auto my-2"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StepByStep;