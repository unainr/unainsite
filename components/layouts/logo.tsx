import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.png" // or your public path
        alt="UNAIN Logo"
        width={130}
        height={50}
        priority
      />
    </Link>
  );
};

export default Logo;