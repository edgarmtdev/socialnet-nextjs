import { prisma } from '../../../libs/db'
const client = prisma

export default async function friendShipResponse(req, res) {
    if (req.method === 'POST') {
        const { idUser, idFriend, accepted } = req.body

        const friend = await client.user.findUnique({
            where: {
                id: idFriend
            }
        })

        const user = await client.user.findUnique({
            where: {
                id: idUser
            }
        })

        let newUser

        if (accepted) {
            await client.user.update({
                where: {
                    id: idFriend
                },
                data: {
                    friendOfIDs: {
                        push: idUser
                    },
                    friendsIDs: {
                        push: idUser
                    },
                    friendshipReqSendIDs: friend.friendshipReqSendIDs.filter(id => id != idUser)
                }
            })

            newUser = await client.user.update({
                where: {
                    id: idUser
                },
                data: {
                    friendOfIDs: {
                        push: idFriend
                    },
                    friendsIDs: {
                        push: idFriend
                    },
                    friendshipReqRecIDs: user.friendshipReqRecIDs.filter(id => id != idFriend)

                },
                include: {
                    friendshipReqRec: true,
                    friendshipReqSend: true,
                    friends: true
                }
            })
        } else {
            await client.user.update({
                where: {
                    id: idFriend
                },
                data: {
                    friendshipReqSendIDs: friend.friendshipReqSendIDs.filter(id => id != idUser)
                },
            })

            newUser = await client.user.update({
                where: {
                    id: idUser
                },
                data: {
                    friendshipReqRecIDs: user.friendshipReqRecIDs.filter(id => id != idFriend)
                },
                include: {
                    friendshipReqSend: true,
                    friendshipReqRec: true,
                    friends: true
                }
            })
        }

        const users = await client.user.findMany({
            where: {
                id: {
                    notIn: [idUser, ...newUser.friendsIDs, ...newUser.friendshipReqRecIDs, ...newUser.friendshipReqSendIDs]
                }
            }
        })

        return res.json({
            people: users,
            receivedReq: newUser.friendshipReqRec,
            sendedReq: newUser.friendshipReqSend,
            friends: newUser.friends
        })
    }
}