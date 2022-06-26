import { prisma } from '../../../../libs/db'
const client = prisma

export default async function create(req, res) {
    if (req.method === 'POST') {

        const { idUser, idPost, body } = req.body

        const comment = await client.comment.create({
            data: {
                body: body,
                authorId: idUser,
                postId: idPost
            }
        })

        return res.json(comment)
    }

    return res.json({
        success: false
    })
}