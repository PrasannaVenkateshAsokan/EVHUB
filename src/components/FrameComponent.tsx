import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.ownerGroupFrames}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.ownerParent}>
          <div className={styles.owner}>Owner</div>
          <div className={styles.stellerAutomotive}>Steller Automotive</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.lineWrapper}>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.chainsParent}>
            <div className={styles.chains}>Chains</div>
            <div className={styles.garagesFramesWrapper}>
              <div className={styles.garagesFrames}>12</div>
            </div>
          </div>
          <div className={styles.lineContainer}>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.garagesParent}>
            <div className={styles.garages}>Garages</div>
            <div className={styles.wrapper}>
              <div className={styles.div}>28</div>
            </div>
          </div>
          <div className={styles.lineFrame}>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.locationParent}>
            <div className={styles.location}>Location</div>
            <div className={styles.italyWrapper}>
              <div className={styles.italy}>Italy</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameChild1} />
          </div>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector-5.svg" />
          </div>
          <div className={styles.groupWrapper}>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
