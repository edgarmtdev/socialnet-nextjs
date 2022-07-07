import { prisma } from '../../../libs/db'
const client = prisma

export default async function signup(req, res) {
    if (req.method === 'POST') {

        let newUser
        if (!(req.body.idProvider && req.body.provider)) {
            newUser = await client.user.create({
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    profilePic: req.body.profilePic,
                    background: req.body.background,
                    posts: undefined,
                    comments: undefined,
                    likes: undefined,
                    likesPostsIDs: undefined,
                    friends: undefined,
                    friendsIDs: undefined,
                    friendOf: undefined,
                    friendOfIDs: undefined,
                    friendshipReqRec: undefined,
                    friendshipReqRecIDs: undefined,
                    friendshipReqSend: undefined,
                    friendshipReqSendIDs: undefined
                }
            })
        } else {
            newUser = await client.user.update({
                where: {
                    id: req.body.id
                },
                data: {
                    idProvider: req.body.idProvider,
                    provider: req.body.provider,
                }
            })
        }
        return res.json(newUser)
    }
}