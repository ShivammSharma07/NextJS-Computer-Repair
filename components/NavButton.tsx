import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  icon: LucideIcon;
  href: string;
  label: string;
};

function NavButton({ icon: Icon, href, label }: Props) {
  return (
    <Button
      variant="ghost"
      size={"icon"}
      aria-label={label}
      title={label}
      className="rounded-full"
      asChild
    >
      {href ? (
        <Link href={href}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
}

export default NavButton;
