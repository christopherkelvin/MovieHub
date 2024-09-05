import {  LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Hero from "~/components/hero";
import Main from "~/components/main";
// import { movieData } from "~/api/data";
import { getMovie } from "~/utils/getMovies";
export const meta: MetaFunction = () => {
  return [
    { title: "Live Score App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader = async ({request}:LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  const filter: string = search.get('Search') || "";
  return getMovie(filter);
}
export default function Index() {
  const data = useLoaderData<typeof loader>()
  
  return (
    <>  
      <Hero />
      <Main movies={data} />
    </>
  );
}
