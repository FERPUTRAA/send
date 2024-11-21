import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "./ui/card";
import SongDetail from "./SongDetail";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const CardSong = ({
  recipient,
  message,
  song_id,
  date,
}: {
  recipient: string;
  message: string;
  song_id: string;
  date: Date;
}) => {
  return (
    <>
      <Card className="flex h-full items-start gap-5 overflow-hidden p-4">
        <SongDetail song_id={song_id} />
        <div className="w-full">
          <CardHeader className="p-0">
            <CardTitle className="text-base font-light">
              To:{" "}
              <span className="font-reenie text-2xl tracking-wider">
                {recipient.toLowerCase()}
              </span>
            </CardTitle>
            <CardDescription className="p-0 font-normal">
              Halo buat kamu yg ada disana, ada pesan dari seseorang nih!
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-2 p-0">
            <p className="font-reenie text-3xl font-medium text-gray-700">
              {message.length > 50 ? `${message.slice(0, 50)}...` : message}
            </p>
          </CardContent>
          <CardFooter className="mt-3 p-0 text-sm font-normal text-gray-300">
            {format(date, "PPPP", { locale: id })}
          </CardFooter>
        </div>
      </Card>
    </>
  );
};

export default CardSong;
