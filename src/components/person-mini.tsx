import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

type PersonMiniProps = {
  picture?: string;
  name?: string;
  pronouns?: string;
  role?: string;
  className?: string;
};

const PersonMiniCard: React.FC<PersonMiniProps> = ({
  picture,
  name,
  pronouns,
  role,
  className,
}) => {
  // process name to extract initials
  // nullcheck name
  const checkedName = name ?? "Person Name";
  const splitName = checkedName.split(" ");
  const initials = `${splitName[0].charAt(0)}${splitName[1]?.charAt(0)}`;

  return (
    <Card className={"h-[11rem] flex grow border border-gray-200 dark:border-gray-800 transition-all hover:scale-105" + className}>
        <Avatar className="rounded aspect-square h-full w-auto overflow-hidden">
          <AvatarImage alt={name} src={picture ?? "/images/placeholder.png"} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1 h-full text-left align-middle grow">
          <CardHeader className="flex flex-1">
            <CardTitle className="">
              {checkedName}
            </CardTitle>
            <CardDescription>({pronouns})</CardDescription>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-gray-500 dark:text-gray-400">
              {role}
            </CardTitle>
          </CardContent>
        </div>
    </Card>
  );
};

export default PersonMiniCard;
