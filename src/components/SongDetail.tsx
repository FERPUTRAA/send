"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getSingleTrack } from "@/lib/getSingleTrack";

const SongDetail = ({ song_id }: { song_id: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["singleTrack", song_id],
    queryFn: async () => getSingleTrack(song_id),
    enabled: song_id !== "",
  });

  if (error) return <p className="text-red-500">{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p className="text-red-500">No data found.</p>;
  return (
    <div className="flex flex-col gap-1">
      <img
        src={data.album.images[0]?.url}
        alt={data.album.name}
        className="w-64 rounded-xl"
      />
      <h1 className="text-center text-sm font-bold">{data.name}</h1>
      <p className="text-center text-xs font-medium">{data.artists[0]?.name}</p>
    </div>
  );
};

export default SongDetail;
