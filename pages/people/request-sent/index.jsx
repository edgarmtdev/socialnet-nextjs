import React from "react";
import { useSelector } from "react-redux";
import { HeadComponent } from "../../../components/utils/HeadComponent";
import ProfileLayout from "../../../components/layout/people";
import ContainerPeople from "../../../components/people";
import Spinner from "../../../components/utils/Spinner";
import NotData from "../../../components/utils/NotData";

export default function RequestSent() {
  const { sendedReq, loading } = useSelector((state) => state.users);

  if (loading) return <Spinner />;

  return (
    <>
      <HeadComponent title={"Requests Sent"} />
      <div className="md:ml-[20%] p-10">
        {sendedReq.length > 0 ? (
          <ContainerPeople title={"Requests Sent"} data={sendedReq} />
        ) : (
          <NotData message={"No request"} />
        )}
      </div>
    </>
  );
}

RequestSent.Layout = ProfileLayout;
