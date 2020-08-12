import React from "react";
import PropTypes from "prop-types";
import styles from "./Rating.module.scss";

const ratings = ["😢", "😞", "😐", "🙂", "😊"];

export default function Rating({ value, onChange }) {
  return (
    <div className={styles.rating}>
      <h2 className={styles.heading}> Rate your experience!</h2>
      {ratings.map((rating, i) => (
        <button
          key={rating}
          type="button"
          className={`${styles.button} ${
            i + 1 === value ? styles.chosen : null
          }`}
          onClick={() => onChange(i + 1)}
        >
          <div className={styles.emoji}>{rating}</div>
          <div className={styles["rating-text"]}>
            {i === 0 ? "Poor" : null}
            {i === ratings.length - 1 ? "Excellent" : null}
          </div>
        </button>
      ))}
    </div>
  );
}

Rating.defaultProps = {
  onChange: () => {},
  value: null,
};

Rating.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
};
