import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Hero from "~/components/hero";
import Main from "~/components/main";
import { movieData } from "~/api/data";
export const meta: MetaFunction = () => {
  return [
    { title: "Live Score App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader = async () => {
  return json(movieData);
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
