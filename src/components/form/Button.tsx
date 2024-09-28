type ButtonAction = {
    onClick?: () => void
    disabled?: boolean
    color: string
    title: string
    width: "sm" | 'full' | undefined
    type?: "submit" | "reset" | "button" | undefined
    style?: "border" | "background"
}

export default function Button(action: ButtonAction) {
    const { onClick, disabled, color, title, type, width, style = "background" } = action;
    switch (style) {
        case "border":
            return (
                <button
                    type={type}
                    className={`" border transition-all duration-200
                    ${color == "green" ? "border-[#6DB162] text-[#6DB162] hover:bg-[#6DB162] hover:text-white" :
                            color == "black" ? "border-[#2B1E50] text-[#2B1E50] hover:bg-[#2B1E50] hover:text-white" : null} 
                    ${width == "full" ? "w-full" : null} 
                    px-10 py-4 text-xs font-bold rounded-full disabled:bg-[#2B1E50]
                    "`}

                    onClick={onClick}
                    disabled={disabled}
                >
                    {title}
                </button>
            )
        case "background":
            return (
                <button
                    type={type}
                    className={`"
                    ${color == "green" ? "bg-[#6DB162]" :
                            color == "black" ? "bg-[#2B1E50]" : null} 
                    ${width == "full" ? "w-full" : null} 
                    px-10 py-4 text-xs text-white font-bold rounded-full disabled:bg-[#2B1E50]
                    "`}

                    onClick={onClick}
                    disabled={disabled}
                >
                    {title}
                </button>
            )
        default:
            break;
    }

}