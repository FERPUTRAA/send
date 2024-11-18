import React from "react";

const Navbar = () => {
  return (
    <>
      <main className="fixed left-0 right-0 top-0 z-50 w-full border-b-2 bg-white py-3">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex items-center justify-between">
            <a href="/" className="font-reenie text-4xl">
              sendthesong
            </a>
            <div className="flex items-center gap-12">
              <a href="/create" className="font-medium text-gray-700">
                Submit
              </a>
              <a href="/browse" className="font-medium text-gray-700">
                Search
              </a>
              <a href="/support" className="font-medium text-gray-700">
                Support
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
