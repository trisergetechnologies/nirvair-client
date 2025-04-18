"use client"

import { useState } from 'react';

export default function ContactForm() {
  const [visibleFields, setVisibleFields] = useState({
    name: true,
    email: false,
    phone: false,
    queryType: false,
    message: false
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    queryType: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (value.trim() !== '') {
      switch(name) {
        case 'name':
          setVisibleFields(prev => ({...prev, email: true}));
          break;
        case 'email':
          setVisibleFields(prev => ({...prev, phone: true}));
          break;
        case 'phone':
          setVisibleFields(prev => ({...prev, queryType: true}));
          break;
        case 'queryType':
          setVisibleFields(prev => ({...prev, message: true}));
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData({
        name: "",
        email: "",
        phone: "",
        queryType: "",
        message: ""
      })
      setVisibleFields({
        name: true,
        email: false,
        phone: false,
        queryType: false,
        message: false
      })
    // console.log('Formular eingereicht:', formData);
  };

  return (
    <div id='contactSection' className="px-4 sm:px-6 lg:px-8 pt-16 pb-8"> {/* Reduced vertical padding */}
      <div className="max-w-3xl mx-auto rounded-xl shadow-2xl overflow-hidden transition-all duration-500 h-fit">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-black">
          <h2 className="text-3xl text-white font-bold text-center">Kontaktieren Sie uns</h2>
          <p className="text-white text-center mt-2">
            Wir freuen uns auf Ihre Nachricht
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Name Field - Always visible */}
                    <div className={`transition-all duration-500 ${visibleFields.name ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <label  htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Ihr vollständiger Name"
            />
          </div>

          {/* Email Field */}
          <div className={`transition-all duration-500 ${visibleFields.email ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              E-Mail-Adresse *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="beispiel@email.de"
            />
          </div>

          {/* Phone Field */}
          <div className={`transition-all duration-500 ${visibleFields.phone ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
              Telefonnummer
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="+49 123 456789"
            />
          </div>

          {/* Query Type Field */}
          <div className={`transition-all duration-500 ${visibleFields.queryType ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <label htmlFor="queryType" className="block text-sm font-medium text-white mb-1">
              Betreff *
            </label>
            <select
              id="queryType"
              name="queryType"
              required
              value={formData.queryType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">Bitte auswählen</option>
              <option value="general">Allgemeine Anfrage</option>
              <option value="support">Support</option>
            </select>
          </div>

          {/* Message Field */}
          <div className={`transition-all duration-500 ${visibleFields.message ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Ihre Nachricht *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Wie können wir Ihnen helfen?"
            />
          </div>

          {/* Submit Button */}
          {visibleFields.message && (
            <div className="pt-4 max-w-md mx-auto">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105"
              >
                Nachricht senden
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
