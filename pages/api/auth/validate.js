import { prisma } from '../../../libs/db'
const client = prisma

export default function validate(req, res) {
    const user = await client.user.findFirst({
        where: {
            idProvider: req.body.idProvider,
            provider: req.body.provider
        }
    })

    if (user) return res.json(user)
}