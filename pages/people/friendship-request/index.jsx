import { useSelector } from 'react-redux'
import { HeadComponent } from '../../../components/utils/HeadComponent'
import ProfileLayout from '../../../components/layout/people'
import ContainerPeople from '../../../components/people'
import Spinner from '../../../components/utils/Spinner'
import NotData from '../../../components/utils/NotData'

export default function FriendShipRequest() {
    const { receivedReq, loading } = useSelector(state => state.users)

    if (loading) return (<Spinner />)

    return (
        <>
            <HeadComponent title={'Friendship request'} />
            <div className='ml-[20%] p-10'>
                {receivedReq.length > 0 ?
                    <ContainerPeople title={'Friendship request'} data={receivedReq} /> :
                    <NotData message={'No request'}/>
                }
            </div>
        </>
    )
}

FriendShipRequest.Layout = ProfileLayout