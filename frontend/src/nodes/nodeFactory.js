import { BaseNode } from "./BaseNode";
import { nodeRegistry } from "./nodeRegistry";

export const createNodeTypes = () => {
  return Object.fromEntries(
    Object.entries(nodeRegistry).map(([nodeType, config]) => [
      nodeType,

      ({ id }) => (
        <BaseNode
          label={config.label}
          inputs={config.inputs?.map((input) => `${id}-${input}`)}
          outputs={config.outputs?.map((output) => `${id}-${output}`)}
          fields={config.fields || []}
        />
      ),
    ]),
  );
};
