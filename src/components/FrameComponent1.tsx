import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.ownerGroupFrames}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.ownerParent}>
          <div className={styles.owner}>Owner</div>
          <div className={styles.robertBoschGmbh}>Robert Bosch GmbH</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.image21Parent}>
            <img
              className={styles.image21Icon}
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
            <div className={styles.frameItem} />
          </div>
          <div className={styles.chainsParent}>
            <div className={styles.chains}>Chains</div>
            <div className={styles.div}>5</div>
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.garagesParent}>
            <div className={styles.garages}>Garages</div>
            <div className={styles.wrapper}>
              <div className={styles.div1}>20</div>
            </div>
          </div>
          <div className={styles.lineContainer}>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.locationParent}>
            <div className={styles.location}>Location</div>
            <div className={styles.germanyWrapper}>
              <div className={styles.germany}>Germany</div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.ownerGroupVectorWrapper}>
            <div className={styles.ownerGroupVector} />
          </div>
          <img className={styles.searchVectorIcon} alt="" src="/vector-5.svg" />
          <div className={styles.groupWrapper}>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
