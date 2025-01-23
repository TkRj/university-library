import React from "react";

const Page = () => {
  return (
    <main className="root-container flex min-h-screen flex-col justify-center items-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100">
        Slow down! you're going too fast!
      </h1>
      <p className="mt-3 max-w-xl text-light-400">
        Looks like you&apos;ve been a little too eager.
        <p className="mt-2">We&apos;ve put a temporary pause on your excitement.</p>
        <p className="mt-2">Chill for a bit, and try again shortly.</p>
      </p>
    </main>
  );
};

export default Page;
