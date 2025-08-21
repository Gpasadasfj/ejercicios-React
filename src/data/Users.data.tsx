import type UserCardProps from "../models/UserCard.model";

const users: UserCardProps[] = [
  {
    name: "Carlos",
    age: 30,
    isAdmin: true,
    avatarUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Javi",
    age: 26,
    isAdmin: false,
    avatarUrl: "https://i.pravatar.cc/150?img=2",
  },
];

export default users;
