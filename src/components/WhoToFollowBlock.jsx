import styles from "./WhoToFollowBlock.module.css";

function WhoToFollowBlock(props) {
  return (
    <>
      <div className={`${styles.whotofollowblock}`}>
        <img className={`${styles.whotofollowlogo}`} src="" alt="" />
        <div className={`${styles.whotofollowcontent}`}>
          <div>
            <div className={`${styles.whotofollowname}`}>{props.name}</div>
            <div className={`${styles.whotofollowauthorslug}`}>@{props.userName}</div>
          </div>
          <div className={`${styles.whotofollowbutton}`}>Follow</div>
        </div>
      </div>
    </>
  );
}

export default WhoToFollowBlock;
