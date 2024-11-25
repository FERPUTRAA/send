"use client";
import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <main className="fixed left-0 right-0 top-0 z-50 w-full border-b-2 bg-white px-5 py-3">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex items-center justify-between">
            <a href="/" className="font-reenie text-4xl">
              sendthesong
            </a>

            <button onClick={() => setOpen(!open)} className="md:hidden">
              <Menu />
            </button>
            <div className="hidden items-center gap-12 md:flex">
              <Link href="/create" className="font-medium text-gray-700">
                Submit
              </Link>
              <Link href="/browse" className="font-medium text-gray-700">
                Search
              </Link>
            </div>
          </div>
        </div>
      </main>
      {open && (
        <div className="fixed right-0 top-16 h-full w-1/2 bg-white p-4">
          <div className="flex flex-col items-center gap-12">
            <Link href="/create" className="font-medium text-gray-700">
              Submit
            </Link>
            <Link href="/browse" className="font-medium text-gray-700">
              Search
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
