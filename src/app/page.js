import Image from "next/image";
import { Button } from "@/component/button";

export default async function Home() {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await result.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span> Ciao da Giuppi!</span>
      {JSON.stringify(data)}
      <Button />
    </div>
  );
}
