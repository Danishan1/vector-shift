import { Handle, Position } from "reactflow";
import { useState } from "react";
import styles from "./BaseNode.module.css";

export const TextNode = ({ id }) => {
  const [text, setText] = useState("{{input}}");

  const variables = [
    ...new Set(
      [...text.matchAll(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g)].map(
        (match) => match[1],
      ),
    ),
  ];

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div
      className={styles.node}
      style={{
        minHeight: 100,
      }}
    >
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: `${((index + 1) * 100) / (variables.length + 1)}%`,
          }}
        />
      ))}

      <div className={styles.header}>Text</div>

      <textarea
        className={styles.input}
        value={text}
        onChange={handleChange}
        style={{
          resize: "none",
          width: "100%",
          minHeight: 60,
        }}
      />

      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </div>
  );
};
