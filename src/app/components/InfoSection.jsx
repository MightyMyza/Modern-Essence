// Data for information section
const infos = [
  {
    title: 'Customised Selection 🛍️',
    description:
      "We tailor our services to each client's unique style preferences, budget, and specific needs, providing guidance in selecting clothing, accessories, and other fashion essentials. With our deep expertise in brands, trends, and retail options, we guarantee curated recommendations that perfectly suit our clients.",
    video: '/outfit_curation_vid.mp4',
  },
  {
    title: 'Outfit Curation 👔',
    description:
      'We take into account factors such as the occasion, body shape, and color palette to create outfits that are both visually appealing and flattering. Our approach focuses on identifying the unique colors that compliment you best and expertly coordinating them with others. We guide you on mastering monochromatic looks, creating striking contrasts, and selecting the perfect attire for every event in your lifestyle.',
    video: '/outfit_curation_vid.mp4',
  },
];

export default function InfoSection() {
  return (
    <section className="mx-auto max-w-[80%] bg-green-400">
      {/* Information section heading and subheading */}
      <div className="w-fit mx-auto">
        <h2 className="font-aleo text-7xl font-bold shadow-lg mt-14 bg-blue-500 mb-5">
          Getting Styled with Us is a Game-Changer
        </h2>
        <p className="max-w-[50%] mx-auto mb-[10%]">
          Discover your signature style with a expert stylist. We blend timeless
          sophistication with modern trends to craft looks that reflect your
          personality and boost your confidence.
        </p>
      </div>

      {/* Information section cards */}

      <div className="flex flex-col bg-yellow-400">
        {infos.map((info, index) => (
          <div
            key={index}
            className={`flex justify-center gap-[10%] mb-[10%] ${
              index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className="basis-1/3 bg-red-600 my-auto">
              <h2 className="font-aleo text-7xl mx-auto w-fit mb-5">
                {info.title}
              </h2>
              <p className="text-2xl">{info.description}</p>
            </div>
            <video
              loop
              autoPlay
              muted
              className="object-contain h-[75dvh] rounded-[3rem]"
            >
              <source src={info.video} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </section>
  );
}
