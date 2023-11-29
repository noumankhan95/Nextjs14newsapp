"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function SingleNavlink({ category }: { category: Category }) {
  const path = usePathname();
  let isActive = path.includes(category);
  return (
    <Link
      href={`/news/${category}`}
      className={`mx-4 transition-transform font-normal pointer-cursor hover:scale-105 hover:text-orange-800 hover:underline ${
        isActive
          ? "underline underline-offset-4  duration-300 text-orange-400 md:text-3xl"
          : ""
      }`}
    >
      {category.toUpperCase()}
    </Link>
  );
}
