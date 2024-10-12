/* eslint-disable react/prop-types */
import Tag from "../Tag/Tag";
import "./TaskCard.css";
import deleteIcon from "../../assets/delete.png";

export default function TaskCard({ title, tags, handleDelete, index }) {
  return (
    <article className="task-card">
      <p className="task-text">{title}</p>
      <div className="task-card-bottom">
        <div className="task-card-tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <div className="task-delete" onClick={() => handleDelete(index)}>
          <img className="delete-icon" src={deleteIcon} />
        </div>
      </div>
    </article>
  );
}
