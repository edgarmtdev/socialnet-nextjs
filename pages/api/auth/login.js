import { PrismaClient } from '@prisma/client';
const client = new PrismaClient()

export default async function login(req, res) {
    if (req.method === 'POST') {
        const user = await client.user.findFirst({ // -> crea o actualiza un elemento 
            where: {
                idProvider: req.body.idProvider,
                provider: req.body.provider
            }
        })

        if (user) {
            return res.json(user)
        }

        try {
            const newUser = await client.user.create({
                data: {
                    idProvider: req.body.idProvider,
                    provider: req.body.idProvider
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