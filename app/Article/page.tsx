"use client";
import React from "react";
import { useRouter } from "next/navigation";
type pageprops = {
  article: Article;
};
function Article({
  article: {
    author,
    category,
    description,
    image,
    url,
    title,
    published_at,
    _id,
  },
}: pageprops) {
  const router = useRouter();
  let qstring: string = "";
  const navigateToArticleDetails = (id: Article["_id"]) => {
    let entries = Object.entries({
      author,
      category,
      description,
      image,
      url,
      title,
      published_at,
      _id,
    });
    entries.forEach(([k, v]) => (qstring = qstring.concat(`${k}=${v}&`)));

    router.push(`/Article/${id}?${qstring}`);
  };
  return (
    <div
      className="p-1 md:w-1/3 hover:scale-105 hover:shadow-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-out rounded-lg overflow-hidden my-2"
      onClick={navigateToArticleDetails.bind(null, _id)}
    >
      <div className="w-full ">
        <img src={url} className="object-contain rounded-md" />
      </div>
      <div>
        <h3 className="text-2xl">{title}</h3>
        <p>
          {description} by <span className="text-orange-600">{author}</span>
        </p>
        <p className="text-yellow-600">{published_at}</p>
      </div>
    </div>
  );
}

export default Article;
