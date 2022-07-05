import React from "react";

export default function ProfilePic({ size, src }) {

    if (size === "4xl") {
        return (
            <img
                src={src}
                className="w-36 h-36 rounded-full object-cover z-[1] border-[3px]"
            />
        );
    }

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
                className="w-8 h-8 rounded-full object-cover hover:opacity-50"
            />
        );
    }

    if (size === "sm") {
        return <img src={src} className="w-6 h-6 rounded-full object-cover" />;
    }
}
