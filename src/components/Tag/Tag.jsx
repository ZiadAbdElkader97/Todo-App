/* eslint-disable react/prop-types */
import "./Tag.css";

export default function Tag({ tagName, selectTag, selected }) {
  const tagStyle = {
    HTML: { backgroundColor: "#e34f26" },
    CSS: { backgroundColor: "#264de4" },
    JavaScript: { backgroundColor: "#f0db4f" },
    React: { backgroundColor: "#61DBFB" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
}
