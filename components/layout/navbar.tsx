"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/#about"],
  ["Services", "/#services"],
  ["Work", "/#work"],
  ["Process", "/#process"],
  ["Contact", "/#contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="topbar">
      <Link href="/" className="logo" aria-label="Tecvion Solutions home">
        <span>TS</span>
        <b>TECVION SOLUTIONS</b>
        <small>Creative Designer Studio</small>
      </Link>
      <div className="desktop-links">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </div>
      <Link href="/#contact" className="topbar-cta">Start Project</Link>
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
