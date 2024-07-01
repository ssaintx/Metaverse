'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

import styles from '../styles';

const World = () => (
  <section className={`${styles.paddings} relative z-10`} id="world">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-[16%] right-[8%] w-[40px] md:w-[50px] lg:w-[70px] h-[40px] md:h-[50px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-1">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-[10%] left-[10%] w-[40px] md:w-[50px] lg:w-[70px] h-[40px] md:h-[50px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-2">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-[45%] left-[42%] w-[40px] md:w-[50px] lg:w-[70px] h-[40px] md:h-[50px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-3">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
