import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
}

const logoSrc = "/OCTO_PayGate_Logo.png";

export function Logo({ href, className = "" }: LogoProps) {
  const content = (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src={logoSrc}
        alt="OCTOPayGate"
        width={130}
        height={48}
        className="object-contain"
        priority
      />
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
