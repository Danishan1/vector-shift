import { Handle, Position } from "reactflow";

export const BaseNode = ({ label, inputs = [], outputs = [], fields = [] }) => {
  return (
    <div
      style={{
        width: 220,
        minHeight: 100,
        border: "1px solid black",
        borderRadius: 8,
        padding: 10,
        background: "white",
      }}
    >
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

      <strong>{label}</strong>

      <div>
        {fields.map((field) => (
          <div key={field.name}>
            <label>{field.label}</label>

            <input defaultValue={field.defaultValue} />
          </div>
        ))}
      </div>

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
