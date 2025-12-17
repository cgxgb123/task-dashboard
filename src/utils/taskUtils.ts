import { Task, TaskFilterOptions } from "../types/index.ts";

export const filterTasks = (
  tasks: Task[],
  filters: TaskFilterOptions
): Task[] => {
  return tasks.filter((task) => {
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    if (
      filters.search &&
      !task.title.toLowerCase().includes(filters.search.toLowerCase())
    )
      return false;
    return true;
  });
};

export const sortTasks = (tasks: Task[], key: keyof Task) => {
  return [...tasks].sort((a, b) => (a[key] > b[key] ? 1 : -1));
};

export const validateTask = (title: string): string | null => {
  if (!title.trim()) return "Title is required";
  if (title.length < 3) return "Title must be at least 3 characters";
  return null;
};
