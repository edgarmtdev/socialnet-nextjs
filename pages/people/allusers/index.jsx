import React from 'react'
import { useSelector } from 'react-redux';
import { HeadComponent } from '../../../components/utils/HeadComponent'
import ProfileLayout from '../../../components/layout/people'
import ContainerPeople from '../../../components/people';
import Spinner from '../../../components/utils/Spinner';

export default function AllUsers() {
    const { people, loading } = useSelector(state => state.users)

    if (loading) return (<Spinner />)

    return (
        <>
            <HeadComponent title={'All people'}/>
            <div className='ml-[22%] p-10'>
                <ContainerPeople data={people} title={'All people'} />
            </div>
        </>
    )
}

AllUsers.Layout = ProfileLayout
