export const Button = ({
    disabled,
    children,
    onClick
}) => {
    return <div className={`rounded-2xl text-2xl px-6 py-3 text-white cursor-pointer ${disabled ? "bg-blue-300" : "bg-green-600"} w-80 h-auto text-center `}>
        {children}
    </div>
}