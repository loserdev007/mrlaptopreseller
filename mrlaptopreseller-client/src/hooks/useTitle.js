import { useEffect } from "react"

const useTitle = title => {
   useEffect(()=>{
      document.title = `${title} - GigaWatt`;
   }, [title])
}

export default useTitle;