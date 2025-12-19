export type taskStatus = "to-do" | "in-progress" | "done";
export type taskPriority = "meh" | "drop-everything" | "everything-is-on-fire";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: taskStatus;
  priority?: taskPriority;
  createdAt: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  priority: taskPriority;
}

export interface TaskFilterOptions {
  status?: taskStatus;
  priority?: taskPriority;
  search?: string;
}

export interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: taskStatus) => void;
}

export interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
