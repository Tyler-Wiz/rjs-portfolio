import { useEffect, useState } from "react"

export const ToggleVisibility = () => {
   const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const Visibility = () => {
          if (window.pageYOffset > 700) setIsVisible(true);
        }
        window.addEventListener("scroll", Visibility);
        return() => setIsVisible(false)
      }, [])

    return [isVisible]
}



