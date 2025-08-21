import type { UserProps } from "./UserForm.model";

type FormInputProps = {
  newUser: UserProps;
  setNewUser: (newUser: UserProps) => void;
  setUser: (newUser: UserProps) => void;
};

export function FormInput({ newUser, setNewUser, setUser }: FormInputProps) {
  return (
    <div>
      <h1>Registro de Usuarios</h1>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <p>Nombre</p>
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />

        <p>Apellido</p>
        <input
          type="text"
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />

        <p>Email</p>
        <input
          type="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
      </form>
      <button onClick={() => setUser(newUser)}>Añadir usuario</button>
    </div>
  );
}
