import { notFound } from "next/navigation";
import Article from "../Article/page";
type pageprops = {
  searchParams?: Seachbox;
};
async function Search({ searchParams }: pageprops) {
  const articles: Article[] = await getSearchedArticles(searchParams?.terms!);

  return (
    <div className="flex w-full p-4 md:p-0 flex-col md:flex-row flex-wrap md:justify-center items-center justify-evenly gap-10">
      {articles?.map((a) => (
        <Article article={a} key={a._id} />
      ))}
    </div>
  );
}

export default Search;

async function getSearchedArticles(term: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/search?term=${term}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const data: NewsResponse = await res.json();
    if (!data.status) throw "Error";
    return data.data.docs || [];
  } catch (e) {
    return [];
  }
}
