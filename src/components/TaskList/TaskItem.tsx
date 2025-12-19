const TaskItem = ({ task, onDelete, onStatusChange }: any) => (
  <div className="card mb-2">
    <div className="card-body d-flex justify-content-between">
      <div>
        <h5>{task.title}</h5>

        <button
          type="button"
          className="badge bg-secondary border-0"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (task.status === "to-do") {
              onStatusChange(task.id, "in-progress");
            } else if (task.status === "in-progress") {
              onStatusChange(task.id, "done");
            }
          }}
          title="Click to advance status"
        >
          {task.status}
        </button>
      </div>

      <div>
        <button
          className="btn btn-sm btn-success me-2"
          onClick={() => onStatusChange(task.id, "done")}
        >
          ✓
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(task.id)}
        >
          ✖
        </button>
      </div>
    </div>
  </div>
);

export default TaskItem;
