import { Button } from "@/components/ui/button";
import { Link } from "@remix-run/react";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function Step3() {
    const [answered, setAnswered] = useState(false);

    const handleYes = () => {
        setAnswered(true);
        confetti({
            particleCount: 300,
            spread: 100,
            origin: { y: 0.6 },
        });
    }

    return (
        <main className="h-screen w-screen grid place-content-center">
            {!answered ? (<div className="flex flex-col items-center max-w-[320px]">
                <img src="https://illustrations.popsy.co/pink/couple-hugging.svg" className="h-44 w-44 mb-5 duration-1000" alt="" />
                <h3 className="text-3xl font-semibold text-rose-500 mb-2 text-center">Will you be my valentine? 💝</h3>
                <Button onClick={handleYes} className="w-full bg-white text-primary hover:bg-white/90 text-rose-500 font-medium mb-2">
                    Yes! 💖
                </Button>
                <Button onClick={handleYes} className="w-full bg-white text-primary hover:bg-white/90 text-rose-500 font-medium">
                    Of course! 💝
                </Button>
            </div>) :
                (
                    <div className="flex flex-col items-center max-w-[320px]">
                        <img src="https://illustrations.popsy.co/pink/woman-hugging-earth.svg" className="h-44 w-44 mb-5 animate-bounce duration-1000" alt="" />
                        <h3 className="text-3xl font-semibold text-rose-500 mb-2 text-center">Yay! You've made my world! 💖</h3>
                        <p className="font-medium text-lg text-rose-500 mb-5 text-center">I promise to make this Valentine's Day special for you!</p>
                        <Button className="w-full bg-white text-primary hover:bg-white/90 text-rose-500 font-medium mb-2" asChild>
                            <Link to="/">Start over</Link>
                        </Button>
                    </div>
                )}

        </main>
    )
}