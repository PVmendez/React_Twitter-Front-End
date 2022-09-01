import styles from "./css/WhoToFollowBlock.module.css";
import UserInfo from "./UserInfo";
function WhoToFollowBlock(props) {
  return (
    <>
      <div className={`${styles.whotofollowblock}`}>
        <div className={`${styles.whotofollowcontent}`}>
          <UserInfo />
          <div className={`${styles.whotofollowbutton}`}>Follow</div>
        </div>
      </div>
    </>
  );
}

export default WhoToFollowBlock;
