import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./OwnerManagement.module.css";

const OwnerManagement: FunctionComponent = () => {
  return (
    <div className={styles.ownerManagement}>
      <FrameComponent3 />
      <main className={styles.lineFrames}>
        <div className={styles.lineFramesInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.ownersWrapper}>
                <h3 className={styles.owners}>Owner(s)</h3>
              </div>
              <div className={styles.ownerList}>
                <div className={styles.ownerListChild} />
                <input
                  className={styles.searchByOwner}
                  placeholder="Search by Owner"
                  type="text"
                />
                <img
                  className={styles.ownerVectorIcon}
                  alt=""
                  src="/vector-4.svg"
                />
              </div>
            </div>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group.svg"
            />
          </div>
        </div>
        <div className={styles.lineConnection} />
        <FrameComponent2 />
        <FrameComponent1 />
        <FrameComponent />
        <FrameComponent2 propPadding="0px var(--padding-xl) var(--padding-7xs)" />
        <FrameComponent1 />
        <FrameComponent />
        <FrameComponent2 propPadding="0px var(--padding-xl) var(--padding-10xs)" />
        <div className={styles.garageRow}>
          <div className={styles.pageIndicator} />
        </div>
        <footer className={styles.navigationFrame}>
          <div className={styles.frameContainer}>
            <div className={styles.ownerGroup}>
              <img
                className={styles.ownerGroupChild}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
            <div className={styles.ownerGroup1}>
              <img className={styles.vectorIcon} alt="" src="/vector-12.svg" />
            </div>
            <div className={styles.ownerGroup2}>
              <img className={styles.vectorIcon1} alt="" src="/vector-13.svg" />
            </div>
            <div className={styles.ownerGroup3}>
              <img
                className={styles.ownerGroupItem}
                loading="lazy"
                alt=""
                src="/group-2@2x.png"
              />
            </div>
            <div className={styles.goToPageButton}>
              <div className={styles.page}>{`Page `}</div>
              <div className={styles.of1}>1 of 1</div>
            </div>
            <div className={styles.frameAction}>
              <div className={styles.goToPage}>{`Go to Page: `}</div>
              <div className={styles.callToAction}>
                <div className={styles.callToActionChild} />
                <div className={styles.div}>1</div>
              </div>
            </div>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.go}>Go!</div>
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default OwnerManagement;
