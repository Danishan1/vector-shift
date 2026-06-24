import styles from "./draggableNode.module.css";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({
        nodeType: type,
      }),
    );

    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className={styles.node} draggable onDragStart={onDragStart}>
      {label}
    </div>
  );
};
