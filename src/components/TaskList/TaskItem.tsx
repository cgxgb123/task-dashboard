const TaskItem = ({ task, onDelete, onStatusChange }: any) => (
  <div className="card mb-2">
    <div className="card-body d-flex justify-content-between">
      <div>
        <h5>{task.title}</h5>
        <span className="badge bg-secondary">{task.status}</span>
      </div>
      <div>
        <button
          className="btn btn-sm btn-success me-2"
          onClick={() => onStatusChange(task.id, "completed")}
        >
          Success
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(task.id)}
        >
          &#10006;
        </button>
      </div>
    </div>
  </div>
);
export default TaskItem;
