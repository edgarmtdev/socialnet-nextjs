import LoginModule from '../../components/auth/login'
import { HeadComponent } from '../../components/utils/HeadComponent'
import { useAuthState } from '../../hooks/useAuthState'

export default function Login() {
    useAuthState('/home')
    return (
        <>
            <HeadComponent title = {'Login'}/>
            <LoginModule />
        </>
    )
}