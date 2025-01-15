import React from "react";
import Link from "next/link";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";

const LibraryPage = () => {
  return (
    <div className="flex flex-col">
      <BookOverview {...sampleBooks[0]}/>
      <BookList
      title="Latest Books"
      books={sampleBooks}
      containerClassName="mt-28"
      />
    </div>
  );
};

export default LibraryPage;
