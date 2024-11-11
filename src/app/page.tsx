import CustomCard from "@/components/CustomCard";
import { Button } from "@/components/ui/button";

const cardData = [
  {
    title: "Share Your Message",
    content: "Choose a song and write a heartfelt message to someone special.",
    enableBtn: true,
    action: "Create Message",
    btnVariant: "default",
  },
  {
    title: "Browse Messages",
    content:
      "Find messages that were written for you. Search by your name to discover heartfelt dedications.",
    enableBtn: true,
    action: "Browse Messages",
    btnVariant: "outline",
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
      <div className="mx-auto mt-12 max-w-screen-2xl">
        <h1 className="mx-auto max-w-lg text-center font-reenie text-4xl">
          "a bunch of the untold words, sent through the song"
        </h1>
        <p className="mt-5 text-center font-light text-gray-500">
          Express your untold message through the song.
        </p>

        <div className="mt-7 flex items-center justify-center gap-7">
          <Button variant={"default"}>Tell Your Story</Button>
          <Button variant={"outline"}>Support the Developer</Button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-5">
          {cardData.map((card, i) => (
            <CustomCard
              key={i}
              title={card.title}
              content={card.content}
              enableBtn={card.enableBtn}
              action={card.action}
              btnVariant={card.btnVariant}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
