import React from 'react'

const InputText = ({label,placeholder,type,className,value,setValue}) => {
    return (
        <>
            <div className={`flex py-4 flex-col space-y-2 w-full ${className}`}>
                <label htmlFor={label} className="font-bold">{label}</label>
                <input
                    type={type}
                    className="p-2 bg-gray-950 border border-gray-400 border-solid rounded placeholder-gray"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e)=>{
                        setValue(e.target.value)
                    }}
                />
            </div>
        </>
    )
}

export default InputText
