import CustomCard from "@/components/CustomCard";
import MarqueeComponent from "@/components/MarqueeComponent";
import { Button } from "@/components/ui/button";
import { Github, Instagram } from "lucide-react";
import Link from "next/link";

const cardData = [
  {
    title: "Share Your Message",
    content: "Choose a song and write a heartfelt message to someone special.",
    enableBtn: true,
    action: "Create Message",
    btnVariant: "default",
    href: "/create",
  },
  {
    title: "Browse Messages",
    content:
      "Find messages that were written for you. Search by your name to discover heartfelt dedications.",
    enableBtn: true,
    action: "Browse Messages",
    btnVariant: "outline",
    href: "/browse",
  },
  {
    title: "Detail Messages",
    content:
      "You can click on any message card to read the full story and listen to the chosen song!",
    enableBtn: false,
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-24">
      <div className="mx-auto mt-12 max-w-screen-2xl px-5">
        <h1 className="mx-auto max-w-lg text-center font-reenie text-4xl">
          "a bunch of the untold words, sent through the song"
        </h1>
        <p className="mt-5 text-center font-light text-gray-500">
          Express your untold message through the song.
        </p>

        <div className="mt-7 flex items-center justify-center gap-7">
          <Link href={"/create"}>
            <Button variant={"default"}>Tell Your Story</Button>
          </Link>
          <Link href={"https://saweria.co/sendthesong"} target="_blank">
            <Button variant={"outline"}>Support the Original Idea</Button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
          {cardData.map((card, i) => (
            <CustomCard
              key={i}
              title={card.title}
              content={card.content}
              enableBtn={card.enableBtn}
              action={card.action}
              btnVariant={
                card.btnVariant as
                  | "default"
                  | "outline"
                  | "link"
                  | "destructive"
                  | "secondary"
                  | "ghost"
                  | null
                  | undefined
              }
              href={card.href}
            />
          ))}
        </div>
      </div>
      <div className="mt-5 w-full overflow-hidden">
        <MarqueeComponent />
      </div>

      <footer className="bottom-0 mt-5 w-full">
        <div className="mx-auto flex max-w-md flex-col gap-3 text-center">
          <h2 className="text-base font-normal text-gray-500">
            Created by{" "}
            <span className="ml-1 font-reenie text-2xl font-bold">
              Airlangga Pradana
            </span>
          </h2>
          <p className="text-sm font-medium text-gray-400">© 2024</p>
          <div className="flex items-center justify-center gap-3">
            <Link href={"https://github.com/airlanggapradana"} target="_blank">
              <Github opacity={0.5} />
            </Link>
            <Link
              href={"https://www.instagram.com/iamrangga._"}
              target="_blank"
            >
              <Instagram opacity={0.5} />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
