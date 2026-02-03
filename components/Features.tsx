import React from 'react';
import { FileSpreadsheet, Shield, Zap, Filter, Users, History } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    id: 1,
    title: 'One-Click Export',
    description: 'Instantly export thousands of WhatsApp contacts to Excel or CSV formats with a single click. No technical skills required.',
    icon: FileSpreadsheet,
  },
  {
    id: 2,
    title: 'Group Contact Saver',
    description: 'Extract all phone numbers from any WhatsApp Group. Perfect for community managers and marketers building lookalike audiences.',
    icon: Users,
  },
  {
    id: 3,
    title: 'Smart Filtering',
    description: 'Automatically filter out invalid numbers and duplicates. Keep your lead lists clean and ready for campaigns.',
    icon: Filter,
  },
  {
    id: 4,
    title: 'Chat History Backup',
    description: 'Securely backup your chat history including media links. Never lose important customer conversations again.',
    icon: History,
  },
  {
    id: 5,
    title: 'Privacy Focused',
    description: 'All processing happens locally on your browser. Your data never touches our servers, ensuring 100% privacy and security.',
    icon: Shield,
  },
  {
    id: 6,
    title: 'Lightning Fast',
    description: 'Optimized for performance. Handle 10,000+ contacts in seconds without freezing your browser.',
    icon: Zap,
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand font-bold tracking-wide uppercase text-sm mb-3">Why Choose WAExport?</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Everything you need to manage <br className="hidden md:block"/> WhatsApp Leads
          </h3>
          <p className="text-lg text-slate-600">
            Stop manually saving numbers. Automate your workflow and focus on closing deals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand/20 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-brand-light/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300 text-brand-dark">
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;