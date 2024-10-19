import Link from "next/link";
import CustomButton from "./CustomButton";
import { Url } from "url";

const LinkButton: React.FC<{
  href: Url;
  ariaLabel: string;
}> = ({ ariaLabel = "", href = "" }) => {
  return (
    <Link aria-label={ariaLabel} href={href}>
      <CustomButton />
    </Link>
  );
};

export default LinkButton;
