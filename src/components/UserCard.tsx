// import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import type UserCardProps from "../models/UserCard.model";

export default function UserCard({
  name,
  age,
  isAdmin: initialIsAdmin,
  avatarUrl,
}: UserCardProps) {
  const [isAdmin, setIsAdmin] = useLocalStorage<boolean>(
    `user-${name}-role`,
    initialIsAdmin
  );

  const toggleRole = () => {
    setIsAdmin((prev) => !prev);
  };

  return (
      <div
        style={{
          marginTop: "50px",
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px",
          maxWidth: "250px",
          textAlign: "center",
        }}
      >
        <img
          src={avatarUrl}
          alt={`Avatar de ${name}`}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "0.5rem",
          }}
        />
        <h2>{name}</h2>
        <p>Edad: {age}</p>
        <p>{isAdmin ? "Administrador" : "Usuario normal"}</p>
        <button
          onClick={toggleRole}
          style={{
            backgroundColor: isAdmin ? "#ff4d4d" : "#4caf50",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Cambiar Rol
        </button>
      </div>
  );
}
