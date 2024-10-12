/* eslint-disable react/prop-types */
import TaskCard from "../TaskCard/TaskCard";
import "./TaskColumn.css";

export default function TaskColumn({
  title,
  icon,
  tasks,
  status,
  handleDelete,
}) {
  return (
    <section className="task-column">
      <h2 className="task-column-heading">
        <img className="task-column-icon" src={icon} />
        {title}
      </h2>

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
}
