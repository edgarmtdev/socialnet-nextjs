import { useEffect, useState } from 'react';
import { HeadComponent } from '../../components/utils/HeadComponent'
import MyProfile from '../../components/profile'
import { useRouter } from 'next/router';
import axios from 'axios';
import Spinner from '../../components/utils/Spinner';

export default function Profile() {
    const [user, setUser] = useState([])
    const router = useRouter()
    const { idUser } = router.query

    useEffect(() => {
        if (idUser) {
            axios.get(`/api/users/getOne/${idUser}`).then((res) => setUser(res.data))
        }
    }, [idUser])

    if (user.length === 0) {
        return <Spinner />
    }

    return (
        <>
            <HeadComponent title={'Profile'} />
            <MyProfile user={user} />
        </>
    )
}
