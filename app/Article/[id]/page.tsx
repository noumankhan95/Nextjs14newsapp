import { notFound, useSearchParams } from "next/navigation";
import React from "react";
type pageprops = {
  searchParams?: Article;
};
function ArticleId({ searchParams }: pageprops) {
  if (
    !searchParams ||
    (searchParams && Object.entries(searchParams).length === 0)
  )
    return notFound();
  const Article: Article = searchParams;
  return (
    <article className="p-4">
      <div className="m-auto w-56 md:w-80">
        <img src={`${Article.url}`} />
      </div>
      <h1 className="text-center my-5 font-serif text-4xl">{Article.title}</h1>
      <div className="my-5 w-full divide-x-2 flex space-x-5 mx-auto justify-center">
        <h2 className="font-bold pl-3">By {Article.author}</h2>
        <span className="font-bold pl-3">Source {Article.source}</span>
        <p className="font-bold pl-3">{Article.published_at}</p>
      </div>
      <p className="font-serif">
        {Article.description} Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Consectetur numquam commodi quo doloribus, ex veniam
        reprehenderit, soluta perferendis!
      </p>
    </article>
  );
}

export default ArticleId;
