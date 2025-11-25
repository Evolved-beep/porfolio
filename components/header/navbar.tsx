import Image from "next/image"
import "../../app/globals.css";

const Navbar = () => {
    return(
        <header className="">
            <nav className="bg-[#1f2428] h-[30px] w-full flex items-center justify-between">
                <Image src={"/assets/images/vsc.png"} alt="VSC Logo" height={28} width={28} />
                <h1 className="text-[--text-color] text-sm">Maxime Magnier - Porfolio</h1>
                <div className="flex">
                    <div className="full_rounded_yellow"></div>
                    <div className="full_rounded_green"></div>
                    <div className="full_rounded_red"></div>
                </div>
            </nav>
        </header>
    )
    
}

export default Navbar