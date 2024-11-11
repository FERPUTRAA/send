import SubmitForm from "@/components/SubmitForm";
import React from "react";

export default function CreatePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-24">
      <div className="mx-auto mt-12 max-w-screen-2xl">
        <h1 className="text-center font-reenie text-4xl">
          Tell the World Your Story
        </h1>

        <SubmitForm />
      </div>
    </main>
  );
}
