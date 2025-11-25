import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string, 
    className?: string
}

const Button: React.FC<ButtonProps> = ({text, className, ...props}) => {
    return(
        <button 
            className={`py-2 px-4 cursor-pointer text-[#eeeeee] rounded-md transition-all duration-300 hover:shadow-lg active:scale-95 ${className}`}
            {...props}
        >
            {text}
        </button>
    )
}

export default Button
