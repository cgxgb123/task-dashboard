import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onStatusChange }: any) => {
  if (!tasks || tasks.length === 0) {
    return <p className="text-muted">No tasks found.</p>;
  }

  return (
    <>
      {tasks.map((task: any) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </>
  );
};

export default TaskList;
