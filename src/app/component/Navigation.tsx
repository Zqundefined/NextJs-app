import React from "react";
import Link from "next/link";
const navgation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link rel="stylesheet" href="/">
            home
          </Link>
        </li>
        <li>
          <Link rel="stylesheet" href="/book">
            my Book
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default navgation;
