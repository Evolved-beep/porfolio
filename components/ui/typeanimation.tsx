"use client"
import { TypeAnimation } from "react-type-animation";

const TypeWritter = () => {
    return(
        <TypeAnimation 
            sequence={[
                "Front-end Developer",
                1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text_letter"
        />
    )
}

export default TypeWritter