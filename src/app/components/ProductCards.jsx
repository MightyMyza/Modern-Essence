'use client';
import { useState } from 'react';

export default function ProductCards() {
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
    <section id="services" className="py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-sm bg-white"
            onMouseEnter={() => setApplyIndex(index)}
            onMouseLeave={() => setApplyIndex(null)}
          >
            {applyIndex === index ? (
              <button
                className="bg-accent hover:bg-accent_dark text-white font-bold py-2 px-4 rounded-full"
                onClick={() => handleApplyClick}
              >
                Apply Now
              </button>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-2 text-center">
                  {product.title}
                </h3>
                <p className="mb-4 font-light text-sm">{product.description}</p>
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
  );
}

function handleApplyClick() {
  const formModal = document.getElementById('applicationForm');
  if (formModal) formModal.style.display = 'block';
}
