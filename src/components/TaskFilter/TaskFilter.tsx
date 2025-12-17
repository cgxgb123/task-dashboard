import { TaskFilterOptions } from "../../types";

interface TaskFilterProps {
  onChange: (filters: TaskFilterOptions) => void;
}

const TaskFilter = ({ onChange }: TaskFilterProps) => {
  return (
    <div className="row mb-4">
      <div className="col">
        <select
          className="form-select"
          onChange={(e) =>
            onChange({ status: e.target.value as TaskFilterOptions["status"] })
          }
        >
          <option value="">All Statuses</option>
          <option value="to-do">To-do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="col">
        <select
          className="form-select"
          onChange={(e) =>
            onChange({
              priority: e.target.value as TaskFilterOptions["priority"],
            })
          }
        >
          <option value="">All Priorities</option>
          <option value="meh">meh</option>
          <option value="drop-everything">Drop Everything!</option>
          <option value="everything-is-on-fire">Everything is On Fire!</option>
        </select>
      </div>

      <div className="col">
        <input
          className="form-control"
          placeholder="Search tasks..."
          onChange={(e) => onChange({ search: e.target.value })}
        />
      </div>
    </div>
  );
};

export default TaskFilter;
