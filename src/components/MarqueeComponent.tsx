"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllMessage } from "@/lib/getAllMessage";
import Marquee from "./ui/marquee";
import CardSong from "./CardSong";

const MarqueeComponent = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["allPost"],
    queryFn: async () => await getAllMessage(),
  });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data found</p>;
  const res = data.data;
  return (
    <>
      <Marquee pauseOnHover className="[--duration:50s]">
        {res.map((item, i) => (
          <CardSong
            key={i}
            date={item.createdAt}
            message={item.message}
            recipient={item.recipient}
            song_id={item.song_id}
          />
        ))}
      </Marquee>
    </>
  );
};

export default MarqueeComponent;
