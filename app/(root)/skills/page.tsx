import Image from "next/image"
import data from "@/db/data"

const Skills = () => {
    return(
        <section className="py-8 px-4 flex justify-center">
            <div className="grid grid-cols-1 place-content-center w-full max-w-5xl">
                {data.skills.map((el) => (
                    <div key={el.name} className="p-6 mb-6 bg-[--tabs-bg] rounded-lg border-[1px] border-[--skills-border]">
                        <h2 className="text-xl font-semibold text-[--skills-color] mb-4">{el.name}</h2>
                        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                            {el.stack?.map((img, index) => (
                                <div 
                                    key={index}
                                    className="aspect-square p-3 border-[1px] border-[--skills-border] rounded-lg flex items-center justify-center bg-[--main-bg] hover:scale-105 hover:border-[--tabs-active-text] transition-all cursor-pointer"
                                >
                                    <Image 
                                        src={img} 
                                        height={32} 
                                        width={32} 
                                        alt="logo name" 
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}

export default Skills