import Button from "@/components/ui/button"
import TypeWritter from "@/components/ui/typeanimation"
import Link from "next/link"


export default function Home() {
    return(
        <section className="h-[calc(100vh-30px-36px)] lg:w-full flex flex-col justify-center items-center">
            <h1 className="title">Maxime Magnier</h1>
            <TypeWritter />
            <div className="flex justify-center items-center">
                <Link href="/project">
                    <Button text={"View my project"} className=" bg-[#ff5733] hover:bg-[#e5533d] transition-colors border-none mr-2"/>
                </Link>
                <Link href="/contact">
                    <Button text={"Contact me"} className="bg-transparent border-[1px] border-[#ff5733] hover:shadow-[0_0_15px_rgba(255,87,51,0.5)] hover:border-[#ff6b4a] "/>
                </Link>
            </div>
        </section>
    )
}
