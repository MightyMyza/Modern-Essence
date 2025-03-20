'use client';
import { useState } from 'react';
import ApplicationForm from './ApplicationForm';

export default function ProductCards({ toggleForm }) {
  const [applyIndex, setApplyIndex] = useState(null);

  const products = [
    {
      title: 'Virtual Styling',
      description:
        'Curate the perfect outfit from the comfort of your home. Let us take care of the details while you focus on looking your best.',
      features: [
        'Personalised Outfit Curation',
        'Detailed Styling Drafts',
        'Collaborative Refinement',
        'Finalised Outfit with Purchase Links',
        'Expert Guidance',
      ],
    },
    {
      title: 'In-Person Styling',
      description:
        "A hands-on styling experience where we guide you through finding the perfect outfit. From expert advice to in-store shopping, we'll make your styling journey seamless and enjoyable.",
      features: [
        'Personalised Outfit Curation',
        'One-on-One Consultation',
        'Guided Shopping Experience (Chadstone/ Melbourne CBD)',
        'Real-Time Feedback',
        'Expert Guidance',
        'Hands-On Experience',
      ],
    },
  ];

  return (
    <div className="bg-cards py-8 mt-20">
      <div className="text-center text-4xl font-bold my-4 text-accent_dark font-aleo">
        Get your next outfit sorted
      </div>
      <section
        id="services"
        className="pt-4 pb-12 px-6 max-w-[900px] flex mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`border p-6 rounded-lg shadow-sm text-foreground relative min-h-[350px] min-w-[250px] ${
                applyIndex === index
                  ? 'flex flex-col items-center justify-center'
                  : ''
              }`}
              onMouseEnter={() => setApplyIndex(index)}
              onMouseLeave={() => setApplyIndex(null)}
            >
              {applyIndex === index ? (
                <button
                  className="bg-accent hover:bg-accent_dark text-white font-bold py-2 px-4 rounded-full"
                  onClick={toggleForm}
                >
                  Apply Now
                </button>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-2 text-center font-aleo">
                    {product.title}
                  </h3>
                  <p className="mb-4 font-light text-sm">
                    {product.description}
                  </p>
                  <ul className="list-disc font-medium px-4">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
