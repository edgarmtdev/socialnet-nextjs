import { prisma } from "../../../../libs/db";
const client = prisma;

// import { PrismaClient } from '@prisma/client'
// const client = new PrismaClient()

export default async function create(req, res) {
  if (req.method === "POST") {
    const { idUser, idPost, body } = req.body;

    const comment = await client.comment.create({
      data: {
        body: body,
        authorId: idUser,
        postId: idPost,
      },
      include: {
        author: true,
      },
    });

    return res.json(comment);
  }

  return res.json({
    success: false,
  });
}
