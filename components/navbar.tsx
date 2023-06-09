import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div>
        <a>My website</a>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
