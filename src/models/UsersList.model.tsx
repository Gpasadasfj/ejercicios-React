import type { UserProps } from "./UserForm.model";

type UserListProps = {
  user: UserProps;
  index: number;
  deleteUser: (index: number) => void;
};

export function UserList({ user, index, deleteUser }: UserListProps) {
  return (
    <div
      key={index}
      style={{
        border: "1px solid black",
        borderRadius: "50px",
        minWidth: "200px",
        margin: "auto",
      }}
    >
      <p>Nombre: {user.name}</p>
      <p>Apellido: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => deleteUser(index)}>Eliminar usuario</button>
    </div>
  );
}
