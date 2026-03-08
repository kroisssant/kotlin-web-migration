import type { Route } from "./+types/home";
import { OverviewPage } from "../page/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kotlin Programming Language" },
    { name: "description", content: "Kotlin is a modern but already mature programming language designed to make developers happier. It's concise, safe, interoperable with Java and other languages, and provides many ways to reuse code between multiple platforms for productive programming." },
    { property: "og:title", content: "Kotlin Programming Language" },
    { property: "og:description", content: "Kotlin is a modern but already mature programming language designed to make developers happier." },
    { name: "twitter:title", content: "Kotlin Programming Language" },
    { name: "twitter:description", content: "Kotlin is a modern but already mature programming language designed to make developers happier." },
  ];
}

export default function Home() {
  return <OverviewPage />;
}
