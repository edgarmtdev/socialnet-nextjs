import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

export const useAuthState = (path) => {
    const { logged } = useSelector(state => state.auth)
    const router = useRouter()
    useEffect(() => {
        if (logged) {
            router.replace(path)
        }
    }, [logged === true])
    return
}