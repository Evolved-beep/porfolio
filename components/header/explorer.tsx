"use client"
import data from "@/db/data"
import clsx from "clsx"
import { ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"


const Explorer = () => {
    const [open,setOpen] = useState(false)
    const path = usePathname()
    return(
    <div className="hidden md:block w-[120px] lg:w-[300px] bg-[--tabs-bg] min-h-[calc(100vh-30px-25px)]">
        <h1 className="py-2 px-3 text-[11px] font-semibold tracking-wider uppercase text-gray-400">Explorer</h1>
        <div className="flex flex-col px-1">
            {!open ? (
                <>
                    <div className="flex flex-row items-center cursor-pointer hover:bg-[#2a2d2e] py-1 px-2">
                        <ChevronRight size={16} onClick={() => setOpen(true)} />
                        <span className="uppercase tracking-wider text-[11px] ml-1 font-semibold">Portfolio</span>
                    </div>
                </>
            ):(
                <>
                    <div className="flex flex-row items-center cursor-pointer hover:bg-[#2a2d2e] py-1 px-2">
                        <ChevronDown size={16} onClick={() => setOpen(false)} />
                        <span className="uppercase tracking-wider text-[11px] ml-1 font-semibold">Portfolio</span>
                    </div>
                    <div className="flex flex-col mt-1">
                        {data.bartabs.map((el) => (
                            <Link href={el.url} key={el.slug}>
                                <div className={clsx(
                                    "flex items-center px-2 lg:px-6 py-1 hover:bg-[#2a2d2e] cursor-pointer",
                                    {
                                        'bg-[#37373d] text-[--tabs-active-text]': path === el.url,
                                        'text-gray-300': path !== el.url,
                                    }
                                )}>
                                    <Image src={el.image} height={16} width={16} alt={`${el.slug} logo`}/>
                                    <p className="text-[13px] ml-2">{el.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>
    </div>
)
}
export default Explorer
