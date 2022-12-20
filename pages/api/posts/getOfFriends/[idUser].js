import { prisma } from "../../../../libs/db";
const client = prisma;

export default async function getOfFriends(req, res) {
  const { idUser } = req.query;

  try {
    const user = await client.user.findUnique({
      where: {
        id: idUser,
      },
    });

    const posts = await client.post.findMany({
      where: {
        authorId: {
          in: user.friendsIDs,
        },
      },
      include: {
        author: true,
        comments: {
          include: {
            author: {
              select: {
                name: true,
                profilePic: true,
              },
            },
          },
        },
      },
    });

    console.log("posts", posts);

    return res.json(posts);
  } catch (error) {
    console.log(error);
  }
}
