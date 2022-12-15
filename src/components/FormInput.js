import React from 'react'
import "../styles/FormInput.css"

export default function FormInput(props) {
  return (
    <>
    {/* <label for={props.name}>
      {props.displayName}
    </label> */}
    <input name={props.name} type={props.inputType} placeholder={props.placeholder} autocomplete="off" aria-required/>
    </>
  )
}