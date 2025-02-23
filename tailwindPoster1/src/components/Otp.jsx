import { useRef } from "react"

export function Otp() {
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const ref6 = useRef()
    return <div className="flex justify-center ">
        <SubOtpBox referance={ref1} onDone={() => {
            ref2.current?.focus();
        }} />
        <SubOtpBox referance={ref2} onDone={() => {
            ref3.current?.focus();
        }} />
        <SubOtpBox referance={ref3} onDone={() => {
            ref4.current?.focus();
        }} />
        <SubOtpBox referance={ref4} onDone={() => {
            ref5.current?.focus();
        }} />
        <SubOtpBox referance={ref5} onDone={() => {
            ref6.current?.focus();
        }} />
        <SubOtpBox referance={ref6} />
    </div>
}

function SubOtpBox({
    referance, onDone
}) {
    return <div >
        <input
            ref={referance}
            type="text"
            maxLength={1}
            onChange={() => onDone && onDone()}
            className="w-[44px] h-[50px] bg-blue-500 m-2 px-4 outline-none text-white rounded-2xl"></input>
    </div>
}