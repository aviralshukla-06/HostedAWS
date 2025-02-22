export const Input = ({
    onClick,
    type,
    placeholder
}) => {
    return <div className={`rounded-2xl text-2xl  text-white cursor-pointer bg-blue-300  w-80 h-auto text-center `}>
        <input type={type} placeholder={placeholder}></input>
    </div>
}