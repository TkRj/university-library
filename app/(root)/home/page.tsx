import React from "react";
import Link from "next/link";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";

const LibraryPage = () => {
  return (
    <div className="flex flex-col">
      <BookOverview/>
      <BookList/>
    </div>
  );
};

export default LibraryPage;
