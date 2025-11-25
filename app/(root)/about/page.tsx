import data from "@/db/data"

const About = () => {
    return(
        <section className="min-h-[calc(100vh-30px-36px)] py-12 px-6">
            <div className="relative border-l-[2px] border-[#ffffff33] animate-fade-in">
                {data.about.map((el, index) => (
                <div key={index} className="mb-10 relative">
                    <div className="absolute -left-1.5 top-6 h-3 w-3 rounded-full bg-white border-2 border-gray-400 focus:outline-none focus:border-gray-600 focus:ring-2 focus:ring-gray-300" />
                    <div className="flex flex-col md:items-start ml-4 gap-4 ">
                    <div className="pr-4">
                        <p className="font-semibold">{el.year}</p>
                        <p className="text-sm text-gray-400">{el.location}</p>
                    </div>
                    <div className="md:w-2/3 bg-[#282c34cc] backdrop-blur-md rounded-md p-4 shadow-inner">
                        <p>{el.description}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
</section>

    )
}

export default About