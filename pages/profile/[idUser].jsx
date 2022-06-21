import { useEffect, useState } from 'react';
import { HeadComponent } from '../../components/utils/HeadComponent'
import MyProfile from '../../components/profile'
import { useRouter } from 'next/router';
import axios from 'axios';
import Spinner from '../../components/utils/Spinner';
import { useSelector } from 'react-redux';

export default function Profile() {
    const [user, setUser] = useState([])
    const router = useRouter()
    const { idUser } = router.query
    const posts = useSelector(state => state.post)

    useEffect(() => {
        if (idUser) {
            axios.get(`/api/users/getOne/${idUser}`).then((res) => setUser(res.data))
        }
    }, [idUser, posts])

    if (user.length === 0) {
        return <Spinner />
    }

    return (
        <>
            <HeadComponent title={user.name} />
            <MyProfile user={user} />
        </>
    )
}
