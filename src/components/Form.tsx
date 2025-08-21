import { useState } from "react";
import type { UserProps } from "../models/UserForm.model";
import { FormInput } from "../models/FormInput.model";
import { UserList } from "../models/UsersList.model";

export function FormList() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [newUser, setNewUser] = useState<UserProps>({
    name: "",
    lastName: "",
    email: "",
  });

  const setUser = (user: UserProps) => {
    if (user.name === "" || user.lastName === "" || user.email === "") {
      return;
    }
    setUsers([...users, user]);
    setNewUser({ name: "", lastName: "", email: "" });
  };

  const deleteUser = (index: number) => {
    setUsers(users.filter((_, i) => i != index));
  };

  return (
    <>
      <FormInput newUser={newUser} setNewUser={setNewUser} setUser={setUser} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {users.map((user, index) => (
          <UserList user={user} index={index} deleteUser={deleteUser} />
        ))}
      </div>
    </>
  );
}
