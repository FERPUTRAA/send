"use client";
import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import { getSeveralTracks } from "../lib/getSeveralTracks";
import { useQuery } from "@tanstack/react-query";
import { Main } from "@/types/apiResponse";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormControl, FormItem, FormMessage } from "./ui/form";
import { Button } from "./ui/button";

const SearchBar = ({
  token,
  form,
  field,
}: {
  token: string;
  form: UseFormReturn<
    {
      message: string;
      recipient: string;
      song_id: string;
    },
    any,
    undefined
  >;
  field?: ControllerRenderProps<
    {
      message: string;
      recipient: string;
      song_id: string;
    },
    "song_id"
  >;
}) => {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch] = useDebounce(search, 2000);
  const [open, setOpen] = useState(false);

  const { data, isLoading, error } = useQuery<Main>({
    queryKey: ["search", debouncedSearch],
    queryFn: async () => {
      const result = await getSeveralTracks(token, debouncedSearch);
      return result;
    },
    enabled: debouncedSearch.length > 0,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  const tracks = data?.tracks.items || [];
  return (
    <FormItem className="flex flex-col">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <FormControl>
            <Button variant={"outline"} role="combobox" aria-expanded={open}>
              {field?.value
                ? tracks.find((track) => track.id === field.value)?.name
                : "Select a song"}
            </Button>
          </FormControl>
        </PopoverTrigger>

        <PopoverContent className="w-[35rem] p-0">
          <Command>
            <CommandInput
              placeholder="Search for a song"
              onValueChange={(value) => setSearch(value)}
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {tracks.map((track) => (
                <CommandItem
                  key={track.id}
                  value={track.id}
                  onSelect={() => {
                    form.setValue("song_id", track.id);
                    setOpen(false);
                  }}
                  className="flex items-center gap-3"
                >
                  <img
                    src={track.album.images[0]?.url}
                    alt={track.name}
                    className="w-16"
                  />
                  {track.name}
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
};

export default SearchBar;
