import { PrismaClient } from '@prisma/client';
const client = new PrismaClient()

export default async function like(req, res) {
    if (req.method === 'POST') {
        const { idUser, idPost } = req.body

        const post = await client.post.update({
            where: {
                id: idPost
            },
            data: {
                likesUserIDs: {
                    push: idUser
                }
            },
            include: {
                likes: true
            }
        })

        await client.user.update({
            where: {
                id: idUser
            },
            data:{
                likesPostsIDs: {
                    push: idPost
                }
            }
        })

        return res.json(post)

    }
}