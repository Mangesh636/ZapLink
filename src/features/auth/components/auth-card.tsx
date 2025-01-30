import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AuthCardProps {
  authTitle: string;
  authDescription: string;
  children: React.ReactNode;
  authFooter: React.ReactElement;
}

export const AuthCard = ({
  authDescription,
  authTitle,
  authFooter,
  children,
}: AuthCardProps) => {
  return (
    <Card className="bg-transparent border-0 p-4">
      <CardHeader className="flex flex-col gap-4 items-center">
        <CardTitle className="flex gap-4 flex-col items-center">
          <Image
            src={"/logo.svg"}
            alt="ZapLink logo"
            loading="lazy"
            width={45}
            height={45}
          />
          <span className="text-center text-xl">{authTitle}</span>
        </CardTitle>
        <CardDescription className="p-3 my-2">
          {authDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{authFooter}</CardFooter>
    </Card>
  );
};
