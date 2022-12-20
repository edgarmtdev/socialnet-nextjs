// import { prisma } from '../../../libs/db'
// const client = prisma

import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export default async function signup(req, res) {
  if (req.method === "POST") {
    let user;
    if (!req.body.update) {
      user = await client.user.create({
        data: {
          name: req.body.name,
          email: req.body.email,
          profilePic: req.body.profilePic,
          background: req.body.background,
          idProvider: "",
          provider: "",
          posts: undefined,
          comments: undefined,
          likes: undefined,
          likesPostsIDs: undefined,
          friends: undefined,
          friendsIDs: undefined,
          friendOf: undefined,
          friendOfIDs: undefined,
          friendshipReqRec: undefined,
          friendshipReqRecIDs: undefined,
          friendshipReqSend: undefined,
          friendshipReqSendIDs: undefined,
        },
      });
      return res.json(user);
    } else {
      console.log("Step2");
      user = await client.user.update({
        where: {
          email: req.body.email,
        },
        data: {
          idProvider: req.body.idProvider,
          provider: req.body.provider,
        },
      });
      return res.json(user);
    }
  }
}
