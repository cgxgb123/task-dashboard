import { useState, useEffect } from "react";
import { Task, TaskFilterOptions } from "../../types";
import { filterTasks } from "../../utils/taskUtils.ts";
import TaskForm from "../TaskForm/TaskForm";
import TaskFilter from "../TaskFilter/TaskFilter.tsx";
import TaskList from "../TaskList/TaskList.tsx";
import ThemeToggle from "../ThemeToggle/ThemeToggle.tsx";

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<TaskFilterOptions>({});
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // load tasks from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // save tasks to localStorage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // load theme (dark/light mode) from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const visibleTasks = filterTasks(tasks, filters);

  return (
    <div
      className={`container py-4 ${
        theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-4">Task Dashboard</h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      <TaskForm setTasks={setTasks} />

      <TaskFilter
        onChange={(newFilters) =>
          setFilters((prev) => ({ ...prev, ...newFilters }))
        }
      />

      <TaskList
        tasks={visibleTasks}
        onDelete={(id) => setTasks((prev) => prev.filter((t) => t.id !== id))}
        onStatusChange={(id, status) =>
          setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, status } : t))
          )
        }
      />
    </div>
  );
};

export default Dashboard;
