import type { MetaFunction } from "@remix-run/node";
import Hero from "~/Components/Hero";
export const meta: MetaFunction = () => {
  return [
    { title: "Live Score App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>  
    <Hero/>
    </>
  );
}
