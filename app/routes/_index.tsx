import { Button } from "@/components/ui/button";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Hey, Hunny!" },
    { name: "description", content: "You're the best thing that has happened to me!" },
  ];
};

export default function Index() {
  return (
    <main className="h-screen w-screen grid place-content-center">
      <div className="flex flex-col items-center max-w-[320px]">
        <img src="https://illustrations.popsy.co/pink/online-dating.svg" className="h-44 w-44 mb-5 animate-bounce duration-1000" alt="" />
        <h3 className="text-3xl font-semibold text-rose-500 mb-2 text-center">Hey, hunny! 💖</h3>
        <p className="font-medium text-lg text-rose-500 mb-5 text-center">I've got something to ask you</p>
        <Button className="w-full bg-white text-primary hover:bg-white/90 text-rose-500 font-medium" asChild>
          <Link to="step1">Next</Link>
        </Button>
      </div>
    </main>
  );
}
