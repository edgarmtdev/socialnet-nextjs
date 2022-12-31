import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import {
  acceptFriendshipRequest,
  sendFriendshipRequest,
} from "../../../features/users";
import { Button, Card } from "./styles";

export default function CardUser({ user, idPeople }) {
  const dispatch = useDispatch();

  const sendFriendReq = (idUser) => {
    dispatch(
      sendFriendshipRequest({
        idFriend: idUser,
      })
    );
  };

  const acceptFriend = (idUser) => {
    dispatch(
      acceptFriendshipRequest({
        idFriend: idUser,
        accepted: true,
      })
    );
  };

  const deleteRequest = (idUser) => {
    dispatch(
      acceptFriendshipRequest({
        idFriend: idUser,
        accepted: false,
      })
    );
  };

  return (
    <Card>
      <img src={user.profilePic} alt={user.name} />
      <Link href={`/profile/${user.id}`}>
        <p>{user.name}</p>
      </Link>
      {idPeople === 1 && (
        <Button onClick={() => deleteRequest(user.id)} color={"red"}>
          Delete
        </Button>
      )}
      {idPeople === 2 && (
        <>
          <Button onClick={() => acceptFriend(user.id)} color={"blue"}>
            Accept
          </Button>
          <Button onClick={() => deleteRequest(user.id)}>Delete</Button>
        </>
      )}
      {idPeople === 3 && (
        <Button onClick={() => sendFriendReq(user.id)} color={"blue"}>
          Add Friend
        </Button>
      )}
    </Card>
  );
}
