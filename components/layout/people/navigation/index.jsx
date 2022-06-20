import React from 'react'
import Link from 'next/link'
import { ContainerNav, ListItem, NavAside } from './styles'

export default function Navigation() {
    return (
        <NavAside>
            <ContainerNav>
                <Link href={'/people/allusers'}>
                    <ListItem>All</ListItem>
                </Link>
                <Link href={'/people/friendship-request'}>
                    <ListItem>Friendship Request</ListItem>
                </Link>
                <Link href={'/people/request-sent'}>
                    <ListItem>Requests Send</ListItem>
                </Link>
            </ContainerNav>
        </NavAside>
    )
}
