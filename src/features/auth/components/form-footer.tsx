import Link from "next/link";

interface FormFooterProps {
  infoText: string;
  linkHref: string;
  linkLabel: string;
}

export const FormFooter = ({
  infoText,
  linkHref,
  linkLabel,
}: FormFooterProps) => {
  return (
    <div className="text-center text-muted-foreground">
      {infoText}{" "}
      <Link href={linkHref} className="text-ecstasy-500 hover:underline underline-offset-2">{linkLabel}</Link>
    </div>
  );
};
