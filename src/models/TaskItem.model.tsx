export type TaskItemProps = {
  task: string;
  index: number;
  onDelete: (index: number) => void;
};

export function TaskItem({ task, index, onDelete }: TaskItemProps) {
  return (
    <li key={index}>
      {task}
      <button onClick={() => onDelete(index)}>❌</button>
    </li>
  );
}
