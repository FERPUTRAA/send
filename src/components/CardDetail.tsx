"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getSingleMessage } from "@/lib/getSingleMessage";
import { format } from "date-fns";
import SongDetail from "./SongDetail";

const CardDetail = ({ post_id }: { post_id?: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["postDetail"],
    queryFn: async () => await getSingleMessage(post_id as string),
  });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data Found...</p>;
  const res = data.data;
  return (
    <>
      <div className="space-y-3">
        <h1 className="text-center text-2xl font-medium">
          Halo! <span className="font-reenie text-4xl">{res.recipient}</span>
        </h1>
        <p className="mx-auto max-w-md text-center">
          There's someone sending you a song, they want you to hear this song
          that maybe you'll like :)
        </p>
      </div>

      <SongDetail song_id={res.song_id} />

      <div className="space-y-3">
        <h1 className="text-center text-base font-medium tracking-wide text-gray-400">
          Also, here's a message for you
        </h1>
        <p className="mx-auto max-w-4xl text-center font-reenie text-4xl leading-relaxed">
          {res.message}
        </p>
        <p className="text-center text-sm font-light tracking-wide text-gray-400">
          Sent on {format(res.createdAt, "PPPP")}
        </p>
      </div>
    </>
  );
};

export default CardDetail;
