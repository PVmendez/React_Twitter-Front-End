import styles from "./TrendsBlock.module.css";

function TrendsBlock(props) {
  return (
    <div className={`${styles.trendsforyoublock}`}>
      <div className={`${styles.trendsforyoumetainformation}`}>Trending in {props.country}</div>
      <div className={`${styles.trendsforyoutrendname}`}>{props.name}</div>
      {props.quantity && (
        <div className={`${styles.trendsforyoumetainformation}`}>{props.quantity} Tweets</div>
      )}
    </div>
  );
}

export default TrendsBlock;
