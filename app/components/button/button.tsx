import { ComponentProps } from "react"

export interface ButtonProps extends ComponentProps<'button'> {}

export default function Button(props: ButtonProps) {
  return(
    <button className="bg-primaryColor hover:opacity-85 transition w-60 rounded p-2 text-darkColor">
      {props.children}
    </button>
  )
}