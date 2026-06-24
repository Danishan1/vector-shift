import { Handle, Position } from "reactflow";
import { useState } from "react";
import styles from "./BaseNode.module.css";

export const BaseNode = ({
  id,
  label,
  inputs = [],
  outputs = [],
  fields = [],
  dynamicText = false,
}) => {
  const defaultValue = dynamicText ? fields[0].defaultValue : "";
  const [text, setText] = useState(defaultValue);

  const variables = dynamicText
    ? [
        ...new Set(
          [...text.matchAll(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g)].map(
            (match) => match[1],
          ),
        ),
      ]
    : [];

  return (
    <div
      className={styles.node}
      style={{
        minHeight: dynamicText ? 100 : undefined,
      }}
    >
      {/* Dynamic Text Handles */}
      {dynamicText &&
        variables.map((variable, index) => (
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

      {/* Normal Inputs */}
      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}

      <div className={styles.header}>{label}</div>

      {/* Dynamic textarea */}
      {dynamicText && (
        <textarea
          className={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            resize: "none",
            minHeight: 60,
          }}
        />
      )}

      {/* Normal fields */}
      {!dynamicText &&
        fields.map((field) => (
          <div className={styles.field} key={field.name}>
            <label>{field.label}</label>

            <input className={styles.input} defaultValue={field.defaultValue} />
          </div>
        ))}

      {/* Outputs */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={`${id}-${output}`}
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
          }}
        />
      ))}
    </div>
  );
};
