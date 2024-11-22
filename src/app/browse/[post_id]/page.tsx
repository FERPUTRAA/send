import CardDetail from "@/components/CardDetail";
import React from "react";

const DetailPage = async ({
  params,
}: {
  params: Promise<{ post_id: string }>;
}) => {
  const postId = (await params).post_id;
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-24">
      <div className="mx-auto mt-12 max-w-screen-2xl space-y-5">
        <CardDetail post_id={postId} />
      </div>
    </main>
  );
};

export default DetailPage;
