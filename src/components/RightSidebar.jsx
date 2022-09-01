import styles from "./RightSidebar.module.css";
import SideBarSection from "./SideBarSection";
import TrendsBlock from "./TrendsBlock";
import WhoToFollowBlock from "./WhoToFollowBlock";

export const RightSidebar = () => {
  return (
    <div className={`${styles.rightSidebarContainer}`}>
      <div className={`${styles.rightSidebar}`}>
        <SideBarSection heading="Trends for you">
          <TrendsBlock country="Germany" name="#iPhone12" quantity="155k" />
          <TrendsBlock country="Germany" name="#AmazonPrimeDay" />
          <TrendsBlock country="Uruguay" name="#autos" quantity="2,800" />
        </SideBarSection>

        <SideBarSection heading="Who to follow">
          <WhoToFollowBlock name="Pablo Méndez" userName="pmendez" />
          <WhoToFollowBlock name="Manuel Perera" userName="mperera" />
          <WhoToFollowBlock name="Guillermo Galain" userName="ggalain" />
        </SideBarSection>
      </div>
    </div>
  );
};
