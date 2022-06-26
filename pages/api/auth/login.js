import { prisma } from '../../../libs/db'
const client = prisma

export default async function login(req, res) {
    if (req.method === 'POST') {
        const user = await client.user.findFirst({
            where: {
                idProvider: req.body.idProvider,
                provider: req.body.provider
            }
        })

        if (user) return res.json(user)

        try {
            const newUser = await client.user.create({
                data: {
                    name: req.body.name,
                    idProvider: req.body.idProvider,
                    provider: req.body.provider,
                    profilePic: req.body.profilePic
                }
            })
            return res.json(newUser)
        } catch (error) {
            console.log(error);
        }
    }

    return res.json({
        success: false
    })
}