'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import type { Dictionary } from '@/i18n/getDictionary';

interface EventFormProps {
  dictionary: Dictionary;
}

export default function EventForm({ dictionary }: EventFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const eventTypes = Object.entries(dictionary.events.form.eventTypes);

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
      {/* Event Type */}
      <div>
        <label className="form-label" htmlFor="eventType">
          {dictionary.events.form.eventType}
        </label>
        <select id="eventType" name="eventType" required className="form-input">
          <option value="">-</option>
          {eventTypes.map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>

      {/* Date and Guests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="form-label" htmlFor="date">
            {dictionary.events.form.date}
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="guests">
            {dictionary.events.form.guests}
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="100"
            className="form-input"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div>
        <label className="form-label" htmlFor="name">
          {dictionary.events.form.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="form-input"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="form-label" htmlFor="email">
            {dictionary.events.form.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="phone">
            {dictionary.events.form.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="form-label" htmlFor="message">
          {dictionary.events.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="form-input resize-none"
        />
      </div>

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
          dictionary.cta.requestQuote
        )}
      </button>

      <p className="text-sm text-ferro/60 text-center">{dictionary.events.form.note}</p>
    </form>
  );
}
