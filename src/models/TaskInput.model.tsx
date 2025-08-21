export type TaskInputProps = {
  newTask: string;
  setNewTask: (task: string) => void;
  onAdd: () => void;
};

export function TaskInput({ newTask, setNewTask, onAdd }: TaskInputProps) {
  return (
    <div>
      <input
        type="text"
        value={newTask}
        placeholder="Escriba la tarea que desea añadir"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={onAdd}>Añadir tarea</button>
    </div>
  );
}
