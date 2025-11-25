import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string, 
    className?: string
}

const Button: React.FC<ButtonProps> = ({children, className, ...props}) => {
    return(
        <button 
            className={`py-2 px-4 cursor-pointer text-[#eeeeee] rounded-md ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
