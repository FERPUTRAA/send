"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getSingleMessage } from "@/lib/getSingleMessage";
import { format } from "date-fns";
import { getSingleTrack } from "@/lib/getSingleTrack";
import Loading from "@/app/loading";

const CardDetail = ({ post_id }: { post_id: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["postDetail"],
    queryFn: async () => await getSingleMessage(post_id),
  });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <Loading />;
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

      <SongDetailCard song_id={res.song_id} />

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

const SongDetailCard = ({ song_id }: { song_id: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["singleTrack", song_id],
    queryFn: async () => getSingleTrack(song_id),
    enabled: song_id !== "",
  });

  if (error) return <p className="text-red-500">{error.message}</p>;
  if (isLoading) return <Loading />;
  if (!data) return <p className="text-red-500">No data found.</p>;
  return (
    <div className="mx-auto max-w-sm rounded-xl border-2 border-gray-300 p-5">
      <div className="flex items-start gap-3">
        <img
          src={data.album.images[0]?.url}
          alt={data.album.name}
          className="w-28 rounded-xl"
        />
        <div className="">
          <p className="text-sm font-normal">{data.artists[0]?.name}</p>
          <a
            href={data.external_urls.spotify}
            target="_blank"
            className="text-lg font-bold hover:underline"
          >
            {data.name}
          </a>
          <p className="text-sm font-light">
            Album: <span className="font-semibold">{data.album.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
