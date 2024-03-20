import { useEffect, useState } from "react"

function useLocalStorage<T>( key : string, initialVal : T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        const jsonVal = localStorage.getItem(key)
        if(jsonVal != null) return JSON.parse(jsonVal)
        
        if(typeof initialVal === 'function'){
            return (initialVal as () => T)()
        }else{
            return initialVal
        }
    })

    useEffect(() => {
        return localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue] as [typeof value, typeof setValue]
}

export default useLocalStorage