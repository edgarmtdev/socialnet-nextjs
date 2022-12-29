import React from "react";
import { HeadComponent } from "../../components/utils/HeadComponent";
import MyFeed from "../../components/home";

export default function Home() {
  return (
    <>
      <HeadComponent title={"Feed | SocialNet"} />
      <MyFeed />
    </>
  );
}
