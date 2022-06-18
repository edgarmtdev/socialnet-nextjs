import { PrismaClient } from '@prisma/client';
const client = new PrismaClient()

export default async function like(req, res) {
    if (req.method === 'POST') {
        const { idUser, idPost } = req.body

        console.log(idUser, idPost);

        const post = await client.post.findUnique({
            where: {
                id: idPost
            }
        })

        const user = await client.user.findUnique({
            where: {
                id: idUser
            }
        })

        const postUpdated = await client.post.update({
            where: {
                id: idPost
            },
            data: {
                likesUserIDs: post.likesUserIDs.filter(id => id != idUser)
            }
        })

        await client.user.update({
            where: {
                id: idUser
            },
            data: {
                likesPostsIDs: user.likesPostsIDs.filter(id => id != idPost)
            }
        })

        return res.json(postUpdated)

    }
}