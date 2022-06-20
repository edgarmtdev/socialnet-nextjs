import { PrismaClient } from '@prisma/client';
const client = new PrismaClient()

export default async function getOne(req, res) {
    const { idUser } = req.query
    const user = await client.user.findUnique({
        where:{
            id: idUser
        },
        include: {
            friends: true,
            posts: {
                include: {
                    author: true,
                    comments: {
                        include: {
                            author: true
                        }
                    }
                }
            }
        }
    })

    return res.json(user)
}