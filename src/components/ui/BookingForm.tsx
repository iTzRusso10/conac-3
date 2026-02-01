'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Send } from 'lucide-react';
import { suites } from '@/data/suites';
import type { Dictionary } from '@/i18n/getDictionary';

interface BookingFormProps {
  dictionary: Dictionary;
  compact?: boolean;
}

export default function BookingForm({ dictionary, compact = false }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-verde-bosco/10 border border-verde-bosco/30 rounded-sm p-8 text-center"
      >
        <div className="w-16 h-16 bg-verde-bosco rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="text-bianco-latte" size={24} />
        </div>
        <p className="text-lg text-verde-bosco font-medium">{dictionary.form.success}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Dates Row */}
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4`}>
        <div>
          <label className="form-label" htmlFor="arrival">
            <Calendar size={14} className="inline mr-2" />
            {dictionary.contact.form.arrivalDate}
          </label>
          <input
            type="date"
            id="arrival"
            name="arrival"
            required
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="departure">
            <Calendar size={14} className="inline mr-2" />
            {dictionary.contact.form.departureDate}
          </label>
          <input
            type="date"
            id="departure"
            name="departure"
            required
            className="form-input"
          />
        </div>
      </div>

      {/* Guests Row */}
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4`}>
        <div>
          <label className="form-label" htmlFor="adults">
            <Users size={14} className="inline mr-2" />
            {dictionary.contact.form.adults}
          </label>
          <select id="adults" name="adults" required className="form-input">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="form-label" htmlFor="children">
            {dictionary.contact.form.children}
          </label>
          <select id="children" name="children" className="form-input">
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Suite Selection */}
      <div>
        <label className="form-label" htmlFor="suite">
          {dictionary.contact.form.suite}
        </label>
        <select id="suite" name="suite" className="form-input">
          <option value="">{dictionary.contact.form.noPreference}</option>
          {suites.map((suite) => (
            <option key={suite.id} value={suite.id}>
              {dictionary.suites.list[suite.id as keyof typeof dictionary.suites.list].name}
            </option>
          ))}
        </select>
      </div>

      {!compact && (
        <>
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label" htmlFor="name">
                {dictionary.contact.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="email">
                {dictionary.contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label className="form-label" htmlFor="phone">
              {dictionary.contact.form.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="form-label" htmlFor="notes">
              {dictionary.contact.form.notes}
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              className="form-input resize-none"
            />
          </div>
        </>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="inline-block w-4 h-4 border-2 border-crema/30 border-t-crema rounded-full"
            />
            ...
          </span>
        ) : (
          dictionary.cta.sendRequest
        )}
      </button>

      {!compact && (
        <p className="text-sm text-ferro/60 text-center">{dictionary.contact.form.note}</p>
      )}
    </form>
  );
}
