import React from 'react';
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import {styles} from '../style';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    >
      I'm a skilled software developer with experience in JavaScript and Java, and also proficient in frameworks like React, Node.js and Express.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring ideas to life! 

    </motion.p>
    </>
  )
}

export default About