import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const CustomCard = ({
  title,
  content,
  enableBtn,
  action,
  btnVariant,
}: {
  title?: string;
  content?: string;
  enableBtn?: boolean;
  action?: string | null;
  btnVariant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}) => {
  return (
    <Card className="w-[27rem]">
      <CardHeader>
        <CardTitle className="font-reenie text-3xl font-normal">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-light leading-relaxed text-gray-600">{content}</p>
      </CardContent>
      {enableBtn ? (
        <CardFooter>
          <Button variant={btnVariant}>{action}</Button>
        </CardFooter>
      ) : null}
    </Card>
  );
};

export default CustomCard;
