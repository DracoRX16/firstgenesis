import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/solid';

const Header = () => (
  <header className="flex justify-between p-4 bg-blue-500 text-white">
    <h1>FirstGenesis</h1>
    <MenuIcon className="h-8 w-8" />
  </header>
);

export default Header;
