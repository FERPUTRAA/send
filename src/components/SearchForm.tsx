"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { getAllMessage } from "@/lib/getAllMessage";
import { useDebounce } from "use-debounce";
import CardSong from "./CardSong";
import Link from "next/link";
import Loading from "@/app/loading";

const SearchForm = () => {
  const [search, setSearch] = React.useState<string>("");
  const [debouncedSearch] = useDebounce(search, 2000);
  const { data, error, isLoading } = useQuery({
    queryKey: ["searchPost"],
    queryFn: async () => getAllMessage(),
  });

  if (error) return <p className="text-red-500">{error.message}</p>;
  if (isLoading) return <Loading />;
  if (!data) return <p className="text-red-500">No data found.</p>;
  const res = data.data;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full items-center gap-5">
        <Input
          type="text"
          placeholder="Search for a person"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
        <Button>Search</Button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {res
          .filter((post) =>
            post.recipient.toLowerCase().includes(debouncedSearch),
          )
          .map((item, i) => (
            <Link key={i} href={`/browse/${item.post_id}`}>
              <CardSong
                key={i}
                recipient={item.recipient}
                message={item.message}
                song_id={item.song_id}
                date={item.createdAt}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SearchForm;
