import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.topbar}>
        <div className={styles.toolbarWrapper}>
          <PipelineToolbar />
        </div>

        <SubmitButton />
      </div>

      <div className={styles.canvas}>
        <PipelineUI />
      </div>
    </div>
  );
}

export default App;
