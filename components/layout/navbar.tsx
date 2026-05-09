"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Process", "/process"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="topbar">
      <Link href="/" className="logo"><span>T</span>Tecvion</Link>
      <div className="desktop-links">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </div>
      <Link href="/contact" className="topbar-cta">Book call</Link>
      <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
        <span /><span />
      </button>
      {open ? (
        <div className="mobile-menu">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </div>
      ) : null}
    </nav>
  );
}
