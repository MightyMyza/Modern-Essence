'use client';

import { useState } from 'react';

export default function ApplicationForm({ toggleForm }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        setShowForm(false); // Close the form after submission
      } else {
        alert('Failed to submit the application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="applicationForm"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-xl font-bold mb-4">Apply Now</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-gray-700">Name</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 mb-4"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg p-2 mb-4"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <div className="mb-4">
            <p className="mb-2 text-gray-700">Select a Service:</p>
            <div>
              <input
                type="radio"
                id="virtual_style"
                name="service"
                value="Virtual Styling"
                checked={formData.service === 'Virtual Styling'}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
              />
              <label htmlFor="virtual_style" className="ml-2">
                Virtual Styling
              </label>
            </div>
            <div className="mt-2">
              <input
                type="radio"
                id="inperson_style"
                name="service"
                value="In-Person Styling"
                checked={formData.service === 'In-Person Styling'}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
              />
              <label htmlFor="inperson_style" className="ml-2">
                In-Person Styling
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={toggleForm} // Close the form when this button is clicked
        >
          ✕
        </button>
      </div>
    </div>
  );
}
