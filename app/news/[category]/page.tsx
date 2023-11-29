import { notFound } from "next/navigation";
import Article from "../../Article/page";
type pageprops = {
  params?: { category: string };
};
async function Search({ params }: pageprops) {
  const articles: Article[] = await getSearchedArticles(params?.category!);
  if (articles.length === 0)
    return (
      <div className="flex justify-center">
        <h1 className="font-serif">No Articles Found</h1>
      </div>
    );
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
      `${process.env.NEXT_PUBLIC_URL}/api/search?cat=${term}`,
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
