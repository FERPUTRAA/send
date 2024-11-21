import SearchForm from "@/components/SearchForm";
import React from "react";

const BrowsePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-24">
      <div className="mx-auto mt-12 max-w-screen-2xl space-y-5">
        <h1 className="text-center font-reenie text-4xl">
          Search for a person.
        </h1>

        <SearchForm />
      </div>
    </main>
  );
};

export default BrowsePage;
