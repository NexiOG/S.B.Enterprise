'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { enquirySchema, EnquiryFormInputs } from '@/lib/validations';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface EnquiryFormProps {
  defaultInterest?: EnquiryFormInputs['interest'];
}

export default function EnquiryForm({ defaultInterest = 'TallyPrime' }: EnquiryFormProps) {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormInputs>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      interest: defaultInterest,
    },
  });

  const onSubmit = async (data: EnquiryFormInputs) => {
    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit enquiry. Please try again.');
      }

      setFormStatus('success');
      reset();
    } catch (err: unknown) {
      setFormStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-8 lg:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] space-y-6">
      {formStatus === 'success' ? (
        <div className="py-12 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-950">Enquiry Submitted</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            Thank you for contacting S.B. Enterprise. Our Kolkata team will review your requirements and respond within one working day.
          </p>
          <button
            onClick={() => setFormStatus('idle')}
            className="px-6 py-3 text-sm font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors cursor-pointer"
          >
            Submit Another Requirement
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-slate-950">
              Send Your Requirements
            </h3>
            <span className="text-xs text-slate-400 font-medium">* Required fields</span>
          </div>

          {formStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-red-100 text-red-700 rounded-2xl text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                placeholder="e.g. Rahul Sharma"
                className={`w-full px-4 py-3 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${
                  errors.name ? 'border-red-300 bg-red-50/50' : 'border-slate-200'
                }`}
              />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="+91 98300 XXXXX"
                className={`w-full px-4 py-3 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${
                  errors.phone ? 'border-red-300 bg-red-50/50' : 'border-slate-200'
                }`}
              />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              placeholder="name@company.com"
              className={`w-full px-4 py-3 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${
                errors.email ? 'border-red-300 bg-red-50/50' : 'border-slate-200'
              }`}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>

          {/* Interest Select */}
          <div className="space-y-2">
            <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Primary Area of Interest <span className="text-red-500">*</span>
            </label>
            <select
              id="interest"
              {...register('interest')}
              className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            >
              <option value="TallyPrime">TallyPrime Licensing (Silver / Gold / Server)</option>
              <option value="Tally services">Tally Services & Technical AMC Support</option>
              <option value="S.B. Enterprise products">S.B. Enterprise Products</option>
              <option value="Nexiog products">Digital Web & Mobile App Services</option>
              <option value="General enquiry">General Business Enquiry</option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Requirement Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              {...register('message')}
              placeholder="Describe your operational requirement, multi-user setup size, or web software goals..."
              className={`w-full px-4 py-3 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-y ${
                errors.message ? 'border-red-300 bg-red-50/50' : 'border-slate-200'
              }`}
            />
            {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formStatus === 'submitting'}
            className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 rounded-xl transition-all shadow-lg shadow-indigo-600/25 cursor-pointer"
          >
            {formStatus === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting Request...
              </>
            ) : (
              <>
                Send Enquiry Now
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-xs text-slate-400 text-center">
            Need urgent assistance? Call our Kolkata desk at{' '}
            <a href="tel:+917059574585" className="text-indigo-600 hover:underline font-bold">
              +91-7059574585
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
