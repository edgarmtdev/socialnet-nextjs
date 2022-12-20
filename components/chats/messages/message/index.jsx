import React from "react";

export default function Message({ data, idUser }) {
  return (
    <div
      className={`rounded-full py-[5px] px-4 gap-2 text-white text-sm w-max mb-2 ${
        data.sender == idUser ? "ml-auto bg-blue-500" : "bg-green-500"
      }`}
    >
      <p>{data.content}</p>
      {/* {data.date.split('T')[1].split('.')[0]} */}
    </div>
  );
}
