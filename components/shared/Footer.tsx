import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  var year: number;
  year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex flex-between flex-col gap-4 p-5 sm:flex-row ">
        <Link href="/">
          <Image
            src="assets/images/logo.svg"
            height={28}
            width={128}
            alt="logo"
          />
        </Link>
        <p>{year} Evently. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
