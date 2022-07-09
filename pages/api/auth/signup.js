// import { prisma } from '../../../libs/db'
// const client = prisma

import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()

export default async function signup(req, res) {
    if (req.method === 'POST') {
        let newUser
        if (!(req.body.idProvider && req.body.provider)) {
            // console.log('Step1');
            // console.log(req.body);

            newUser = await client.user.create({
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    profilePic: req.body.profilePic,
                    background: req.body.background,
                    idProvider: undefined,
                    provider: undefined,
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
            console.log(newUser);

            return res.json(newUser)
        } else {
            // console.log('Step2');
            // console.log(req.body);
            newUser = await client.user.update({
                where: {
                    id: req.body.id
                },
                data: {
                    idProvider: req.body.idProvider,
                    provider: req.body.provider,
                }
            })
            // console.log(newUser);
            return res.json(newUser)
        }
    }
}