import Image from "next/image";
import Link from "next/link";
import logoBlue from "../../public/images/brand/onethird-logo.png";
import logoWhite from "../../public/images/brand/onethird-logo-white.png";

const logos = { blue: logoBlue, white: logoWhite };

/**
 * The logo is deliberately in Devanagari (वन/थर्ड). The alt text gives the
 * name in English for screen readers and search engines.
 */
export default function Logo({
  variant = "blue",
  className = "",
}: {
  variant?: keyof typeof logos;
  className?: string;
}) {
  return (
    <Link href="/" className={`inline-flex ${className}`}>
      <Image
        src={logos[variant]}
        alt="OneThird home"
        loading="eager"
        sizes="180px"
        className="h-12 w-auto lg:h-14"
      />
    </Link>
  );
}
