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
    <Card className="bg-transparent border-0 p-4 w-[400px]">
      <CardHeader className="flex flex-col gap-y-1.5 justify-center items-center">
        <CardTitle className="flex gap-y-4 flex-col justify-center items-center">
          <Image
            src={"/logo.svg"}
            alt="ZapLink logo"
            loading="lazy"
            width={45}
            height={45}
          />
          <span className="text-xl">{authTitle}</span>
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {authDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{authFooter}</CardFooter>
    </Card>
  );
};
