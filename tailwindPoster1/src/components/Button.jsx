export const Button = ({
    disabled,
    children,
    onClick
}) => {
    return <span className={`rounded-2xl text-4xl px-32 py-3  text-white cursor-pointer ${disabled ? "bg-blue-300" : "bg-green-600"} w-80 h-auto text-center `}>
        {children}
    </span>
}