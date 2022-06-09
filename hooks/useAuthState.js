import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

export const useAuthState = () => {
    const router = useRouter()
    const { logged } = useSelector(state => state.auth)
    useEffect(() => {
        if (!logged) {
            router.replace('/')
        }
    }, [])
    return
}