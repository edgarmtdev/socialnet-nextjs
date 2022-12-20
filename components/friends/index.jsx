import React from "react";
import Friend from "./card";
import { Container, Friends, Title } from "./styles";

export default function MyFriends({ friends }) {
  return (
    <Container>
      <Title>Friends</Title>
      <Friends className=" grid grid-cols-2 gap-3">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </Friends>
    </Container>
  );
}
