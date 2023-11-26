import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Students!</b> Discover past interview experiences and tips directly from your seniors.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/logo.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Unlock Your Potential,<br/> One Interview at a Time!</h1>
          <p className={styles.postDesc}>
            Empower your career with InterviewPrep, where success begins with each interview. 
            Dive into a community-driven platform offering 
            company specific interview experience and valuable feedback.<br/>
            Master the Art of Interviewing, Propel Your Career Forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
