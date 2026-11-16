import { hello } from "@hsr/core";

export default function Home() {
  return <main className="p-8 text-2xl">{hello()}</main>;
}