import { DraggableNode } from "./draggableNode";
import { nodeRegistry } from "./nodes";

import styles from "./toolbar.module.css";

export const PipelineToolbar = () => {
  return (
    <div className={styles.toolbar}>
      {Object.entries(nodeRegistry).map(([type, config]) => (
        <DraggableNode key={type} type={type} label={config.label} />
      ))}
    </div>
  );
};
