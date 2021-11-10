import {useState} from "react"

export const Toggle = () => {
   const [open, setOpen] = useState(false)
   const openElement = () => {
       setOpen(!open)
   }

    return [open, openElement]
}
