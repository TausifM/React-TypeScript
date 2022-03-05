import React from "react"

type InputProps={
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event)
    // } Another way to call this handle change defined in InputProps or Function
    return (
        <input type="text" placeholder="something" value={props.value} onChange={props.handleChange}/>
    )
}