// the card component for each opportunity

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Link2Icon } from "@radix-ui/react-icons";

type OpportunityProps = {
  title?: string;
  provider?: string;
  image?: string;
  description?: string;
  link?: string;
  className?: string;
};

const OpportunityCard: React.FC<OpportunityProps> = ({
  title,
  provider,
  image,
  description,
  link,
  className,
}) => {
  const checkedName = provider ?? "Provider Name";
  const splitName = checkedName.split(" ");
  const initials = `${splitName[0].charAt(0)}`;
  const checkedLink = link ?? "#";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage
              alt={provider}
              src={image ?? "/images/placeholder.png"}
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="gap-2">
            <p className="font-medium">{provider}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Oct 8, 2023
            </p>
          </div>
        </div>
        <div className="prose prose-sm dark:prose-invert">{description}</div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href={checkedLink}
        >
          <Link2Icon className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default OpportunityCard;
