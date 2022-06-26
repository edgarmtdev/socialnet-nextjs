import { prisma } from '../../../libs/db'
const client = prisma

export default async function signup(req, res) {
    if (req.method === 'POST') {
        console.log(req.body);
        const newUser = await client.user.create({
            data: {
                name: req.body.name,
                idProvider: req.body.idProvider,
                provider: req.body.provider,
                profilePic: req.body.profilePic,
                background: req.body.background
            }
        })
        return res.json(newUser)
    }
}