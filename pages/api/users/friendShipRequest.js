import { prisma } from "../../../libs/db";
const client = prisma;

export default async function friendshipRequest(req, res) {
  if (req.method === "POST") {
    const { idUser, idFriend } = req.body;

    const friend = await client.user.update({
      where: {
        id: idFriend,
      },
      data: {
        friendshipReqRecIDs: {
          push: idUser,
        },
      },
    });

    const user = await client.user.update({
      where: {
        id: idUser,
      },
      data: {
        friendshipReqSendIDs: {
          push: idFriend,
        },
      },
      include: {
        friendshipReqRec: true,
        friendshipReqSend: true,
      },
    });
    const users = await client.user.findMany({
      where: {
        id: {
          notIn: [
            idUser,
            ...user.friendsIDs,
            ...user.friendshipReqRecIDs,
            ...user.friendshipReqSendIDs,
          ],
        },
      },
    });

    return res.json({
      people: users,
      receivedRequests: user.friendshipReqRec,
      sendedRequests: user.friendshipReqSend,
    });
  }
}
