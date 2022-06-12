import { PrismaClient } from '@prisma/client';
const client = new PrismaClient()

export default async function getAll(req, res) {
    const { idUser } = req.query
    const user = await client.user.findUnique({
        where: {
            id: idUser
        },
        include: {
            friendshipReqSend: true,
            friendshipReqRec: true, 
            friends: true 
        }
    })
    const users = await client.user.findMany({
        where: {
            id:{
                notIn: [idUser, ...user.friendsIDs, ...user.friendshipReqRecIDs, ...user.friendshipReqSendIDs ]
            }
        }, 
    })
    return res.json({
        people: users ,
        receivedReq: user.friendshipReqRec,
        sendedReq: user.friendshipReqSend,
        friends: user.friends
    })
}