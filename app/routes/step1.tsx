import { Button } from "@/components/ui/button";
import { Link } from "@remix-run/react";

export default function Step1() {
    return (
        <main className="h-screen w-screen grid place-content-center">
            <div className="flex flex-col items-center max-w-[320px]">
                <img src="https://illustrations.popsy.co/pink/woman-holding-a-heart.svg" className="h-44 w-44 mb-5 animate-bounce duration-1000" alt="" />
                <h3 className="text-3xl font-semibold text-rose-500 mb-2 text-center">Every moment with you...</h3>
                <p className="font-medium text-lg text-rose-500 mb-5 text-center">From the first time we met, I knew there was something special about you. Your smile brightens up my darkest
                    days...</p>
                <Button className="w-full bg-white text-primary hover:bg-white/90 text-rose-500 font-medium mb-2" asChild>
                    <Link to="/step2">Next</Link>
                </Button>
                <Button className="w-full bg-white text-primary hover:bg-white/90 text-rose-500 font-medium" asChild>
                    <Link to="/">Previous</Link>
                </Button>
            </div>
        </main>
    )
}