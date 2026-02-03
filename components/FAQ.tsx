import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Is WAExport free to use?",
    answer: "Yes, we offer a free tier that allows you to export a limited number of contacts daily. For power users needing unlimited exports and advanced filtering, we offer a premium plan."
  },
  {
    id: 2,
    question: "Is my data safe?",
    answer: "Absolutely. WAExport operates entirely on your local machine. We do not store, access, or transmit your WhatsApp contacts or chat history to any external servers."
  },
  {
    id: 3,
    question: "Does it work with WhatsApp Business?",
    answer: "Yes, WAExport supports both personal WhatsApp and WhatsApp Business accounts via WhatsApp Web."
  },
  {
    id: 4,
    question: "Can I export contacts from groups I'm not an admin of?",
    answer: "Yes, you can export participant lists from any group you are a member of, regardless of your admin status."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Have questions? We have answers.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200 hover:border-brand/30 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-slate-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              
              <div 
                className={`px-6 text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;