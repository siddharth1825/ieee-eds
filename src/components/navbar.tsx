import Image from "next/image";
import styles from "@/styles/navbar.module.css"; // Import your CSS module?
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute flex h-[90px] w-full items-center justify-center py-8 text-white">
      <Link href="/">
        <Image
          src={"/logo.svg"}
          width={150}
          height={100}
          alt={"logo"}
          className="absolute left-4 top-1/2 -translate-y-1/2 "
        />
      </Link>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden">
        <input
          className={`${styles.checkbox} absolute right-2 top-1/2 -translate-y-1/2`}
          type="checkbox"
          name=""
          id=""
        />
        <div
          className={`${styles.hamburgerLines} absolute right-2 top-1/2 -translate-y-1/2`}
        >
          <span className={`${styles.line} ${styles.line1}`}></span>
          <span className={`${styles.line} ${styles.line2}`}></span>
          <span className={`${styles.line} ${styles.line3}`}></span>
        </div>
        <div className={styles.menuItems}>
          <Link href="#about" className={styles.navlinks}>
            About Us
          </Link>
          <Link href="#events" className={styles.navlinks}>
            Events
          </Link>
          <Link href="#team" className={styles.navlinks}>
            Team
          </Link>
          <Link href="#contact" className={styles.navlinks}>
            Contact Us
          </Link>
        </div>
      </div>

      <div className="LibreFranklin ml-auto mr-20 hidden gap-10 text-sm md:flex lg:text-lg">
        <Link href="#about" className="Montserrat my-auto font-bold">
          About Us
        </Link>
        <Link href="#events" className="Montserrat my-auto font-bold">
          Events
        </Link>
        <Link href="#team" className="Montserrat my-auto font-bold">
          Team
        </Link>
        <Link
          href="#contact"
          className="Montserrat border bg-[#000] px-2 py-1 font-bold"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
