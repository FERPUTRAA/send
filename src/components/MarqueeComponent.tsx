"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllMessage } from "@/lib/getAllMessage";
import Marquee from "./ui/marquee";
import CardSong from "./CardSong";
import Loading from "@/app/loading";

const MarqueeComponent = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["allPost"],
    queryFn: async () => await getAllMessage(),
  });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <Loading />;
  if (!data) return <p>No data found</p>;
  const res = data.data.slice(0, data.data.length / 2);
  const res_2 = data.data.slice(res.length, data.data.length);
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
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {res_2.map((item, i) => (
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
