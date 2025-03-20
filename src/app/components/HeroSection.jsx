import Header from './Header';

export default function HeroSection() {
  return (
    <section className="bg-[url('/hero.webp')] bg-cover bg-center h-screen relative">
      <Header />
      <h1 className="absolute bottom-0 left-0 ml-8 flex flex-col text-[12rem] text-font tracking-widest font-code font-bold uppercase leading-none">
        <span className="ml-4">Modern</span>
        <span className="mt-[-2rem]">Essence</span>
      </h1>
    </section>
  );
}
