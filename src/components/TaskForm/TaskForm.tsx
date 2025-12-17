import { useState } from "react";
import { TaskFormData, Task } from "../../types";
import { validateTask } from "../../utils/taskUtils.ts";
import { v4 as uuid } from "uuid";

const TaskForm = ({ setTasks }: { setTasks: Function }) => {
  const [form, setForm] = useState<TaskFormData>({
    title: "",
    description: "",
    priority: "drop-everything",
  });
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateTask(form.title);
    if (validation) return setError(validation);

    setTasks((prev: Task[]) => [
      ...prev,
      {
        id: uuid(),
        status: "to-do",
        createdAt: new Date().toISOString(),
        ...form,
      },
    ]);

    setForm({ title: "", description: "", priority: "drop-everything" });
    setError(null);
  };

  return (
    <form onSubmit={submit} className="mb-4">
      <input
        className="form-control mb-2"
        placeholder="Task title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      {error && <div className="text-danger">{error}</div>}
      <button className="btn btn-primary mt-2">Add Task</button>
    </form>
  );
};

export default TaskForm;
