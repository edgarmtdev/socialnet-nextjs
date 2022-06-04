import { PrismaClient } from '@prisma/client';
const client = new PrismaClient()

export default async function login(req, res){
    if(req.method === 'POST') {
        const user = client.user.upsert({ // -> crea o actualiza un elemento 
            create: {
                idProvider: req.body.idProvider,
                provider: req.body.provider
            }, 
            update: {
                idProvider:req.body.idProvider,
                provider: req.body.provider
            }, 
            where: {
                idProvider:req.body.idProvider,
                provider: req.body.provider
            }
        })

        console.log(user);
        return res.json(user)
    }

    return res.json({
        success: false
    })
}