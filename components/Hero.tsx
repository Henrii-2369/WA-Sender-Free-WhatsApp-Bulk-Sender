import React from 'react';
import { Download, CheckCircle, MessageCircle, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Static Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-light/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full py-12">
        
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold mb-6 border border-slate-200">
            <span className="inline-block w-2 h-2 rounded-full bg-brand"></span>
            Free Forever Version Available
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2] mb-6">
            WA Sender <br/>
            <span className="text-gradient">100% Free WhatsApp Bulk Sending Tool</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Automate your WhatsApp marketing with the most reliable Chrome extension. Send personalized bulk messages, attach files, and manage your campaigns effortlessly without getting banned.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <a 
              href="https://wasender.wadesk.io/?utm_source=github&utm_medium=referral&utm_campaign=github_repo_hero" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand rounded-xl hover:bg-brand-dark transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Free
            </a>
            <a 
              href="https://wasender.wadesk.io/?utm_source=github&utm_medium=referral&utm_campaign=github_repo_learn_more"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Visit Official Site
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 max-w-lg mx-auto lg:mx-0">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand" /> 
              <span>Bulk Messaging w/ Attachments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand" /> 
              <span>Smart Anti-Ban Tech</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand" /> 
              <span>Excel/CSV Upload</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand" /> 
              <span>Real-time Reports</span>
            </div>
          </div>
        </div>

        {/* Visual Content - Static */}
        <div className="relative hidden lg:block h-auto">
           <div className="relative mx-auto w-full max-w-[500px]">
              {/* Static Card Representation */}
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-6">
                <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center text-white">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">New Campaign</h3>
                      <p className="text-xs text-slate-500">Target: 5,000 Recipients</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Active</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <p className="text-sm text-slate-600 mb-2 font-medium">Message Preview:</p>
                    <p className="text-sm text-slate-800">Hello {`{Name}`}, don't miss our exclusive 50% discount on all premium plans! 🚀</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Progress</span>
                    <span className="font-bold text-slate-900">1,245 / 5,000</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-brand h-2 rounded-full w-1/4"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-3 rounded-lg text-center">
                    <Zap className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                    <p className="text-xs text-slate-500">Speed</p>
                    <p className="font-bold text-slate-900">Fast</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg text-center">
                    <CheckCircle className="w-5 h-5 text-brand mx-auto mb-1" />
                    <p className="text-xs text-slate-500">Success Rate</p>
                    <p className="font-bold text-slate-900">99.8%</p>
                  </div>
                </div>
              </div>

              {/* Static Decoration Dots */}
              <div className="absolute -z-10 top-10 -right-10 w-24 h-24 bg-brand/10 rounded-full"></div>
              <div className="absolute -z-10 -bottom-5 -left-5 w-32 h-32 bg-brand-light/10 rounded-full"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;