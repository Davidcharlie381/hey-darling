import { Button } from "@/components/ui/button";
import { Link } from "@remix-run/react";

export default function Step2() {
    return (
        <main className="h-screen w-screen grid place-content-center">
            <div className="flex flex-col items-center max-w-[320px]">
                <img src="https://illustrations.popsy.co/pink/man-holding-a-heart.svg" className="h-44 w-44 mb-5 animate-bounce duration-1000" alt="" />
                <h3 className="text-3xl font-semibold text-rose-500 mb-2 text-center">You mean the world to me...</h3>
                <p className="font-medium text-lg text-rose-500 mb-5 text-center">Your love, your care, your understanding... Everything about you makes my heart skip a beat.</p>
                <Button className="w-full bg-white text-primary hover:bg-white/90 text-rose-500 font-medium mb-2" asChild>
                    <Link to="/final">Next</Link>
                </Button>
                <Button className="w-full bg-white text-primary hover:bg-white/90 text-rose-500 font-medium" asChild>
                    <Link to="/step1">Previous</Link>
                </Button>
            </div>
        </main>
    )
}