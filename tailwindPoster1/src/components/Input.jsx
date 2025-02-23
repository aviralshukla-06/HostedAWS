export const Input = ({
    onClick,
    type,
    placeholder
}) => {
    return <span onClick={onClick} className={`rounded-2xl p-8  px-2 py-2 text-4xl text-white cursor-pointer bg-blue-200`}>
        <input type={type} placeholder={placeholder} className="bg-blue-200 outline-none"></input>
    </span>
}