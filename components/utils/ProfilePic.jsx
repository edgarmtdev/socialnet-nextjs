import React from "react";

export default function ProfilePic({ size, src }) {
    if (size === "xl") {
        return (
            <img
                src={src}
                className="w-24 h-24 rounded-full object-cover z-[1] border-[3px]"
            />
        );
    }

    if (size === "md") {
        return (
            <img
                src={src}
                className="w-10 h-10 rounded-full object-cover hover:opacity-50"
            />
        );
    }

    if (size === "sm") {
        return <img src={src} className="w-7 h-7 rounded-full object-cover" />;
    }
}
