import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="inline-block p-2 max-w-[90px] flex-[0_0_auto]" href="/">
      <Image className="w-full h-auto" src="/assets/images/logo.png" alt="logo" width={128} height={32} />
    </Link>
  )
};

export default Logo;