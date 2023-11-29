import Article from "./Article/page";

export default async function HomePage() {
  let articles: Article[] = (await NewsResponse()) || [];
  return (
    <div className="flex w-full p-4 md:p-0 flex-col md:flex-row flex-wrap md:justify-center items-center justify-evenly gap-10">
      {articles?.map((a) => (
        <Article article={a} key={a._id} />
      ))}
    </div>
  );
}

const NewsResponse = async () => {
  let res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/news`, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });
  const data: NewsResponse = await res.json();
  if (!data.status) return;
  return data.data.docs;
};
