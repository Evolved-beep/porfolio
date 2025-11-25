"use client"
import data from "@/db/data"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

const BarTabs = () => {
    const path = usePathname()
    return(
        <div className="w-[89vw] h-[36px] bg-[#333333] overflow-x-auto overflow-y-hidden flex items-center md:w-full ">
            {data.bartabs.map((el) => (
                <Link href={el.url} key={el.slug}>
                    <div className={clsx(
                        "flex justify-center py-2 px-5 border-[1px] border-[--main-bg]",
                        {
                            'bg-[#444444] text-[--tabs-active-text] border-t-2 border-t-[--active-border]': path === el.url,
                            'text-white': path !== el.url,
                        }
                    )}>
                        <Image src={el.image} height={20} width={20} alt={`${el.slug} logo`}/>
                        <p className="text-sm ml-2 pointer ">{el.name}</p>
                    </div>
                </Link>
            ))}
        </div>
    )

}

export default BarTabs