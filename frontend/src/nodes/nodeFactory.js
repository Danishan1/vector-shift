import { BaseNode } from "./BaseNode";
import { nodeRegistry } from "./nodeRegistry";

export const createNodeTypes = () => {
  return Object.fromEntries(
    Object.entries(nodeRegistry).map(([nodeType, config]) => [
      nodeType,

      ({ id }) => (
        <BaseNode
          id={id}
          label={config.label}
          inputs={config.inputs?.map((input) => `${id}-${input}`)}
          outputs={config.outputs || []}
          fields={config.fields || []}
          dynamicText={config.dynamicText}
        />
      ),
    ]),
  );
};
