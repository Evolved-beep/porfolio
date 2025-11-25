'use client'
import Image from "next/image"
import { useState } from "react"
import data from "@/db/data"

const Skills = () => {
    const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
    return(
        <section className="py-8 px-4 flex justify-center">
            <div className="grid grid-cols-1 place-content-center w-full max-w-5xl">
                {data.skills.map((el) => (
                    <div key={el.name} className="p-6 mb-6 bg-[--tabs-bg] rounded-lg border-[1px] border-[--skills-border]">
                        <h2 className="text-xl font-semibold text-[--skills-color] mb-4">{el.name}</h2>
                        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                            {el.stack?.map((img, index) => {
                                const techName = img.split('/').pop()?.split('.')[0] || '';
                                const displayName = techName.charAt(0).toUpperCase() + techName.slice(1);
                                const uniqueKey = `${el.name}-${index}`;
                                return (
                                    <div 
                                        key={index}
                                        className="relative aspect-square p-3 border-[1px] border-[--skills-border] rounded-lg flex items-center justify-center bg-[--main-bg] hover:scale-105 hover:border-[--tabs-active-text] transition-all cursor-pointer"
                                        onMouseEnter={() => setHoveredIndex(uniqueKey)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        onClick={() => setHoveredIndex(hoveredIndex === uniqueKey ? null : uniqueKey)}
                                    >
                                        <Image 
                                            src={img} 
                                            height={32} 
                                            width={32} 
                                            alt={displayName} 
                                            className="object-contain"
                                        />
                                        {hoveredIndex === uniqueKey && (
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 
                                                          px-3 py-1.5 bg-[#2a2a2a] text-[#eeeeee] 
                                                          rounded text-xs font-medium whitespace-nowrap z-50
                                                          shadow-lg border border-[#444] pointer-events-none">
                                                {displayName}
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 
                                                              border-4 border-transparent border-t-[#2a2a2a]" />
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
