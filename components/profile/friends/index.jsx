import Friend from "./friend";

const Friends = ({ friends }) => (
  <>
    <h3 className=" text-white text-lg mb-5">Friends</h3>
    <ol className=" grid grid-cols-4 gap-2">
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ol>
  </>
);

export default Friends;
