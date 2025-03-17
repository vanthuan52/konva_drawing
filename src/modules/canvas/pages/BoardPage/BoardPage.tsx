import { CanvasLayoutProvider } from "@/modules/canvas/contexts/CanvasLayoutContext";
import KonvaBoard from "@/modules/canvas/components/KonvaBoard/KonvaBoard";
import styles from "./BoardPage.module.scss";
import Header from "@/modules/canvas/components/Header/Header";
import Sidebar from "@/modules/canvas/components/Sidebar/Sidebar";

const BoardPage = () => {
  return (
    <CanvasLayoutProvider>
      <div className={styles["board"]}>
        <Header />
        <div className={styles["board-content"]}>
          <Sidebar />
          <div className={styles["board-container"]}>
            <KonvaBoard />
          </div>
        </div>
      </div>
    </CanvasLayoutProvider>
  );
};

export default BoardPage;
