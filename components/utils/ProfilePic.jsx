import React from "react";

const ProfilePic = ({ size, src }) => {
  if (size === "4xl") {
    return (
      <img
        alt="profile-pic"
        src={src}
        className="w-36 h-36 rounded-full object-cover z-[1] border-[3px]"
      />
    );
  }

  if (size === "xl") {
    return (
      <img
        alt="profile-pic"
        src={src}
        className="w-24 h-24 rounded-[50%] object-cover z-[1] border-[3px]"
      />
    );
  }

  if (size === "md") {
    return (
      <img
        alt="profile-pic"
        src={src}
        className="w-8 h-8 rounded-full object-cover hover:opacity-50"
      />
    );
  }

  if (size === "sm") {
    return (
      <img
        alt="profile-pic"
        src={src}
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }
};

export default ProfilePic;
