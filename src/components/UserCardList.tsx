import users from "../data/Users.data";
import UserCard from "./UserCard";

export default function UserCardList() {
  return (
    <div style={{ display: "flex", justifyContent:"center", gap: "1rem" }}>
      {users.map((user) => (
        <UserCard key={user.name} {...user} />
      ))}
    </div>
  );
}