"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBox() {
  const [input, setinput] = useState("");
  const router = useRouter();
  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?terms=${input}`);
  };
  return (
    <form
      className="shadow-md md:w-2/5 flex flex-row justify-between my-3 border-2 border-slate-100/10"
      onSubmit={formSubmit}
    >
      <input
        type="text"
        className="outline-none p-2 w-full"
        placeholder="Type Keywords"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button type="submit" className="ml-1 p-3 text-center" disabled={!input}>
        Search
      </button>
    </form>
  );
}
