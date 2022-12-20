import { prisma } from "../../../libs/db";
const client = prisma;

export default async function create(req, res) {
  if (req.method === "POST") {
    try {
      const post = await client.post.create({
        data: {
          content: req.body.content,
          image: req.body.image,
          author: { connect: { id: req.body.author } },
        },
      });

      return res.json(post);
    } catch (error) {
      console.log(error);
    }
  }
  return res.json({
    success: false,
  });
}
