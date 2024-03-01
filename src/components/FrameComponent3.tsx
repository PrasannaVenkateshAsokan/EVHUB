import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className={styles.ownerManagementInner}>
      <header className={styles.frameParent}>
        <div className={styles.image1Wrapper}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.vehiclesParent}>
            <div className={styles.vehicles}>Vehicles</div>
            <div className={styles.jobCards}>Job Cards</div>
            <div className={styles.frameGroup}>
              <div className={styles.managementParent}>
                <div className={styles.management}>Management</div>
                <img className={styles.frameChild} alt="" src="/line-1.svg" />
              </div>
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.chainsFramesParent}>
            <img
              className={styles.chainsFramesIcon}
              alt=""
              src="/vector-1.svg"
            />
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon1} alt="" src="/vector-2.svg" />
              <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent3;
