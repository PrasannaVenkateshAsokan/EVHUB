import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  propPadding,
}) => {
  const ownerGroupFramesStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <section className={styles.ownerGroupFrames} style={ownerGroupFramesStyle}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.ownerParent}>
          <div className={styles.owner}>Owner</div>
          <div className={styles.aagGpc}>AAG GPC</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.image23Parent}>
            <img
              className={styles.image23Icon}
              loading="lazy"
              alt=""
              src="/image-23@2x.png"
            />
            <div className={styles.chainFrames} />
          </div>
          <div className={styles.chainsParent}>
            <div className={styles.chains}>Chains</div>
            <div className={styles.norwayFrame}>20</div>
          </div>
          <div className={styles.garagesLocationFramesWrapper}>
            <div className={styles.garagesLocationFrames} />
          </div>
          <div className={styles.garagesParent}>
            <div className={styles.garages}>Garages</div>
            <div className={styles.wrapper}>
              <div className={styles.div}>59</div>
            </div>
          </div>
          <div className={styles.lineLocationFramesWrapper}>
            <div className={styles.lineLocationFrames} />
          </div>
          <div className={styles.locationParent}>
            <div className={styles.location}>Location</div>
            <div className={styles.norway}>Norway</div>
          </div>
          <div className={styles.garagesFrameWrapper}>
            <div className={styles.garagesFrame} />
          </div>
          <div className={styles.groupVectorWrapper}>
            <img
              className={styles.groupVectorIcon}
              alt=""
              src="/vector-5.svg"
            />
          </div>
          <div className={styles.groupWrapper}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
