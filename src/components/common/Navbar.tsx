// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";
import UserProfile from "../user/User";

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar} className="bg-secondary  ">
      <div className="max-w-5xl m-auto  w-full flex justify-between items-center ">
        <div style={styles.logo}>
          <Link href={"/"}>
            <Image src="/logo.png" alt="Logo" width={100} height={50} />
          </Link>
        </div>
        <ul style={styles.menu} className="flex gap-5 items-center">
          <li style={styles.menuItem}>
          <Link href="/" style={styles.link}>
              Home
            </Link>
          </li>
          <li style={styles.menuItem}>
            <Link href="/about" style={styles.link}>
              About
            </Link>
          </li>
          <li style={styles.menuItem}>
            <Link href="/contact" style={styles.link}>
              Contact
            </Link>
          </li>
          <li style={styles.menuItem}>
            <Link href={"/user/"}>
              <UserProfile />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
    color: "#FFF",
  },
  menuItem: {
    marginLeft: "1rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Navbar;
