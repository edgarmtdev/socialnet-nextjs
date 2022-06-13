import { HeadComponent } from '../../components/utils/HeadComponent'
import MyProfile from '../../components/profile'

export default function Profile() {
    return (
        <>
            <HeadComponent title={'Profile'}/>
            <MyProfile/>
        </>
    )
}
