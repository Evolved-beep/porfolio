"use client"

import data from "@/db/data"

const Contact = () => {
    return(
        <section className="py-8 px-4 max-w-5xl mx-auto">
            <h3 className="mb-6 font-bold text-2xl">Find me via socials.</h3>
            <div className="flex flex-col items-center">
                <div className="bg-[#282c34] rounded-md p-5 font-mono text-base leading-relaxed w-full overflow-x-auto">
                    <div className="flex mb-1 text-sm">
                        <span className="text-[#636d83] w-5 text-right mr-3 select-none">1</span>
                        <span className="text-[#ff79c6]">.socials</span>
                        <span className="text-white"> {` { `}</span>
                    </div>
                    {data.socials.map((el,index) => (
                        <div key={index} className="flex mb-1 text-sm">
                            <span className="text-[#636d83] w-5 text-right mr-3 select-none">{index + 2}</span>
                            <span className="text-white ml-4">{el.social}:
                                <a 
                                    href={el.link} 
                                    target={el.social === "Mail" ? undefined : "_blank"}
                                    rel={el.social === "Mail" ? undefined : "noopener noreferrer"}
                                    className="text-[#e06c75] hover:text-[#ff5733] hover:underline ml-2 cursor-pointer transition-colors"
                                >
                                    {el.name}
                                </a>
                            </span>
                        </div>
                    ))}
                    <div className="flex text-sm">
                        <span className="text-[#636d83] w-5 text-right mr-3 select-none">{data.socials.length + 2}</span>
                        <span className="text-white">{`}`}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
