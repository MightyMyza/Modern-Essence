import Image from 'next/image';
import logo from './../../../public/ME_logo.webp';

import Button from './button';

export default function Header({ toggleForm }) {
  return (
    <header className="py-2 px-10">
      <nav className="flex justify-between items-center">
        <div className="">
          <Image
            src={logo.src}
            width="100"
            height="100"
            alt="Modern Essence Logo"
          />
        </div>
        <ul className="flex space-x-6">
          <li>
            <Button className="bg-primary">Find Out More</Button>
          </li>
          <li>
            <Button
              className="bg-accent hover:bg-accent_dark"
              onClick={toggleForm}
            >
              <a href="#apply">Apply now</a>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
