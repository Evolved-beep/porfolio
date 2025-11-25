"use client"
import data from '@/db/data'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideBar = () => {
    const path = usePathname()
    return(
    <div className='min-w-10 md:flex md:flex-row'>
        <aside className="h-[calc(100vh-30px-25px)] w-full bg-[--sidebar-bg]">
                        {data.sidebar.map((el) => (
                            <Link href={el.url} key={el.name}>
                                <div className={clsx(
                                    "flex justify-center py-6 items-center cursor-pointer hover:bg-[#444444]",
                                    {
                                        "text-white border-l-2 border-l-[--active-border]": path === el.url,
                                    }
                                )}>
                                <el.icon height={20} width={20} className='text-[#6a737d]' />
                                </div>
                            </Link>
                        ))}
        </aside>
    </div>
      
    )

}

export default SideBar