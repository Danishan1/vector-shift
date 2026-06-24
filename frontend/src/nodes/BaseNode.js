import { Handle, Position } from "reactflow";
import styles from "./BaseNode.module.css";

export const BaseNode = ({ label, inputs = [], outputs = [], fields = [] }) => {
  return (
    <div className={styles.node}>
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

      {fields.map((field) => (
        <div className={styles.field} key={field.name}>
          <label>{field.label}</label>

          <input className={styles.input} defaultValue={field.defaultValue} />
        </div>
      ))}

      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
          }}
        />
      ))}
    </div>
  );
};
