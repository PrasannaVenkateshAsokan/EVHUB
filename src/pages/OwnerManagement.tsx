import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styles from "./OwnerManagement.module.css";

const OwnerManagement: FunctionComponent = () => {
  return (
    <div className={styles.ownerManagement}>
      <div className={styles.owners}>Owner(s)</div>
      <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector-2.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
      <Form.Group className={styles.wrapper}>
        <Form.Control as="textarea" defaultValue="" />
      </Form.Group>
      <img className={styles.vectorIcon3} alt="" src="/vector-4.svg" />
      <div className={styles.searchByOwner}>Search by Owner</div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.pageParent}>
        <div className={styles.page}>{`Page `}</div>
        <div className={styles.goToPage}>{`Go to Page: `}</div>
        <div className={styles.of1}>1 of 1</div>
        <img className={styles.groupChild} alt="" src="/group-1.svg" />
        <img className={styles.vectorIcon4} alt="" src="/vector-12.svg" />
        <img className={styles.groupItem} alt="" src="/group-2@2x.png" />
        <img className={styles.vectorIcon5} alt="" src="/vector-13.svg" />
        <Form className={styles.container}>
          <Form.Control type="text" />
        </Form>
        <Button className={styles.groupInner} />
        <div className={styles.div}>1</div>
        <div className={styles.go}>Go!</div>
      </div>
      <div className={styles.ownerManagementChild} />
      <div className={styles.ownerManagementItem} />
      <div className={styles.groupParent}>
        <div className={styles.vehiclesParent}>
          <div className={styles.vehicles}>Vehicles</div>
          <div className={styles.jobCards}>Job Cards</div>
          <div className={styles.management}>Management</div>
        </div>
        <img className={styles.vectorIcon6} alt="" src="/vector.svg" />
        <img className={styles.lineIcon} alt="" src="/line-1.svg" />
      </div>
      <Button className={styles.maskGroup} variant="primary" />
      <div className={styles.groupContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.aagGpc}>AAG GPC</div>
          <div className={styles.chains}>Chains</div>
          <div className={styles.garages}>Garages</div>
          <div className={styles.location}>Location</div>
          <div className={styles.div1}>20</div>
          <div className={styles.div2}>59</div>
          <div className={styles.norway}>Norway</div>
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.owner}>Owner</div>
          <Button className={styles.group} variant="primary" />
          <img className={styles.vectorIcon7} alt="" src="/vector@2x.png" />
          <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.robertBoschGmbh}>Robert Bosch GmbH</div>
          <div className={styles.chains}>Chains</div>
          <div className={styles.garages}>Garages</div>
          <div className={styles.location}>Location</div>
          <div className={styles.div3}>5</div>
          <div className={styles.div4}>20</div>
          <div className={styles.germany}>Germany</div>
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.owner}>Owner</div>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.vectorIcon8} alt="" src="/vector-5.svg" />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.robertBoschGmbh}>Steller Automotive</div>
          <div className={styles.chains}>Chains</div>
          <div className={styles.garages}>Garages</div>
          <div className={styles.location}>Location</div>
          <div className={styles.div1}>12</div>
          <div className={styles.div4}>28</div>
          <div className={styles.germany}>Italy</div>
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.owner}>Owner</div>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.vectorIcon8} alt="" src="/vector-5.svg" />
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.aagGpc}>AAG GPC</div>
          <div className={styles.chains}>Chains</div>
          <div className={styles.garages}>Garages</div>
          <div className={styles.location}>Location</div>
          <div className={styles.div1}>20</div>
          <div className={styles.div2}>59</div>
          <div className={styles.norway}>Norway</div>
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.owner}>Owner</div>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.vectorIcon8} alt="" src="/vector-5.svg" />
          <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.robertBoschGmbh}>Robert Bosch GmbH</div>
          <div className={styles.chains}>Chains</div>
          <div className={styles.garages}>Garages</div>
          <div className={styles.location}>Location</div>
          <div className={styles.div9}>5</div>
          <div className={styles.div4}>20</div>
          <div className={styles.germany}>Germany</div>
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.owner}>Owner</div>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.vectorIcon8} alt="" src="/vector-5.svg" />
          <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.rectangleDiv} />
          <div className={styles.robertBoschGmbh}>Steller Automotive</div>
          <div className={styles.chains}>Chains</div>
          <div className={styles.garages}>Garages</div>
          <div className={styles.location}>Location</div>
          <div className={styles.div1}>12</div>
          <div className={styles.div4}>28</div>
          <div className={styles.germany}>Italy</div>
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.owner}>Owner</div>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.vectorIcon8} alt="" src="/vector-5.svg" />
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.rectangleDiv} />
          <div className={styles.aagGpc}>AAG GPC</div>
          <div className={styles.chains}>Chains</div>
          <div className={styles.garages}>Garages</div>
          <div className={styles.location}>Location</div>
          <div className={styles.div1}>20</div>
          <div className={styles.div2}>59</div>
          <div className={styles.norway}>Norway</div>
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.owner}>Owner</div>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.vectorIcon8} alt="" src="/vector-5.svg" />
          <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
        </div>
        <img className={styles.image21Icon1} alt="" src="/image-21@2x.png" />
      </div>
    </div>
  );
};

export default OwnerManagement;
