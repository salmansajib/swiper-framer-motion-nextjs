import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-6 container mx-auto">
      <nav className="container">
        <ul className="flex gap-6 items-center justify-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/slides">Slides</Link>
          </li>
          <li>
            <Link href="/thumbnails">Thumbnails</Link>
          </li>
          <li>
            <Link href="/controlled">Controlled</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
