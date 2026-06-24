import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

import styles from "./App.module.css";
import { useRef } from "react";

function App() {
  const toolbarRef = useRef(null);

  const handleWheel = (event) => {
    if (toolbarRef.current) {
      event.preventDefault();
      toolbarRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.topbar}>
        <div
          className={styles.toolbarWrapper}
          ref={toolbarRef}
          onWheel={handleWheel}
        >
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
