import Link from 'next/link'
import { RouteAuth } from './styles'

export default function Button({ route, title, isLogin}) {
    return (
        <Link href={route}>
            <RouteAuth login={isLogin}>{title}</RouteAuth>
        </Link>
    )
}
