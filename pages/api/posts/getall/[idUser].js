import { PrismaClient } from '@prisma/client'
const client = new PrismaClient()

export default async function getAll(req, res) {
    const { idUser } = req.query // -> Las rutas de API admiten rutas dinámicas y siguen las mismas reglas de nomenclatura de archivos utilizadas para .pages
    const posts = await client.post.findMany({
        where: {
            author: {
                id: idUser
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