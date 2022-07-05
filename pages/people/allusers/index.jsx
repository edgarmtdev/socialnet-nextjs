import React from 'react'
import { useSelector } from 'react-redux';
import { HeadComponent } from '../../../components/utils/HeadComponent'
import ProfileLayout from '../../../components/layout/people'
import ContainerPeople from '../../../components/people';
import Spinner from '../../../components/utils/Spinner';
import NotData from '../../../components/utils/NotData';

export default function AllUsers() {
    const { people, loading } = useSelector(state => state.users)

    if (loading) return (<Spinner />)

    return (
        <>
            <HeadComponent title={'All people'}/>
            <div className='ml-[22%] p-10'>
            {people.length > 0 ?
                    <ContainerPeople title={'All people'} data={people} /> :
                    <NotData message={'No more people for show you'}/>
                }
            </div>
        </>
    )
}

AllUsers.Layout = ProfileLayout
