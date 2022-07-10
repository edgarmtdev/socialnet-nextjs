// import { prisma } from '../../../libs/db'
// const client = prisma

import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()

export default async function signup(req, res) {
    if (req.method === 'POST') {
        let user
        console.log(req.body)
        if (!req.body.update) {
            console.log('Step1');

            user = await client.user.create({
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    profilePic: req.body.profilePic,
                    background: req.body.background,
                    idProvider: '',
                    provider: '',
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
            console.log(user)
            return res.json(user)
        } else {
            console.log('Step2')
            user = await client.user.update({
                where: {
                    id: req.body.id,
                    email: req.body.email
                },
                data: {
                    idProvider: req.body.idProvider,
                    provider: req.body.provider,
                }
            })
            console.log(user);
            return res.json(user)
        }
    }
}