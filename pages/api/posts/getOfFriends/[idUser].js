import { PrismaClient } from '@prisma/client'
const client = new PrismaClient()

export default async function getOfFriends(req, res) {
    const { idUser } = req.query

    const user = await client.user.findUnique({
        where: {
            id: idUser
        }
    })

    const posts = await client.post.findMany({
        where: {
            authorId: {
                    in: user.friendsIDs 
            }
        },
        include: {
            author: true,
            comments: {
                include: {
                    author: {
                        select: {
                            name: true, 
                            profilePic: true
                        }
                    }
                }
            }
        }
    })

    return res.json(posts)
}