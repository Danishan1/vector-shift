import styles from "./submit.module.css";
import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const pipeline = {
        nodes,
        edges,
      };

      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pipeline: JSON.stringify(pipeline),
        }),
      });

      const data = await response.json();

      alert(
        `Pipeline Analysis\n\n` +
          `Nodes: ${data.num_nodes}\n` +
          `Edges: ${data.num_edges}\n` +
          `Is DAG: ${data.is_dag ? "Yes" : "No"}`,
      );
    } catch (error) {
      console.error(error);
      alert("Failed to analyze pipeline");
    }
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
