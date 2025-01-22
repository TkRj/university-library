import React from "react";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { SelectUser, users } from "@/database/schema";
import { eq } from "drizzle-orm";

const Home = async () => {
  const User = await db
    .select()
    .from(users)
    // .where(eq(users.fullName, "Tekraj Gurung"));
  console.log("user: ", User);
  return (
    <div className="flex flex-col">
      <BookOverview {...sampleBooks[0]} />
      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </div>
  );
};

export default Home;
