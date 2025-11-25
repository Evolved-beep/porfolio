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
                    <Button children={"View my project"} className=" bg-[#ff5733] border-none mr-2"/>
                </Link>
                <Link href="/contact">
                    <Button children={"Contact me"} className="bg-transparant border-[1px] border-[#ff5733] "/>
                </Link>
            </div>
        </section>
    )
}
