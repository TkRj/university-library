import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "./BookCoverSvg";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "default" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  default: "book-cover_regular",
  wide: "book-cover_wide",
};

interface Props {
  variant?: BookCoverVariant;
  title: string;
  className?: string;
  coverColor: string;
  coverImage?: string;
}
const BookCover = ({
  variant = "default",
  title,
  className,
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className,
      )}
    >
      <BookCoverSvg coverColor={coverColor} />
      <div className="absolute z-10 left-[12%] w-[87.5%] h-[88%]">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="rounded-sm object-fill"
        />
      </div>
    </div>
  );
};

export default BookCover;
