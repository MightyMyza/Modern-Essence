export default function Header() {
  return (
    <header className="py-4 px-10">
      <nav className="flex justify-between items-center">
        <div className="font-modern text-sm font-medium tracking-[0.5em] uppercase">
          Modern Essence
        </div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#services"
              className="flex py-2 text-foreground hover:text-foreground_light"
            >
              Styling Services
            </a>
          </li>
          <li>
            <button className="bg-accent hover:bg-accent_dark text-white font-bold py-2 px-4 rounded-full">
              <a href="#apply">Apply now</a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
