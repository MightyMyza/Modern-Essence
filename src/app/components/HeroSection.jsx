import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="text-center py-8 px-10">
      <h2 className="text-4xl font-bold mb-4 text-foreground">
        Transform your look. Elevate your life. Your journey to effortless style
        starts here.
      </h2>
      <div className="flex justify-center py-5">
        <Image
          src="/man-in-white-and-light-tan-outfit.jpg"
          alt="Man in white and light tan outfit"
          width="300"
          height="150"
        ></Image>
        <Image
          src="/pexels-aj-collins-artistry.jpg"
          alt="Aj collins artistry"
          width="350"
          height="250"
        ></Image>
      </div>
    </section>
  );
}
