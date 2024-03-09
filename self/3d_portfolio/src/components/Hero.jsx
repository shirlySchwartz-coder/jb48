import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
const Hero = () => {
  const heroTextLine1 = 'I develop user interfaces';
  const heroTextLine2 = ' and web applications';
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#F7D65A]' />
          <div className='w-1 sm:h-80 h-40 gold-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className='text-[#F7D65A]'>Shirly</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {heroTextLine1} <br className='sm:block hidden' />
            {heroTextLine2}
          </p>
        </div>

       
      </div>
      <ComputersCanvas/>

    </section>
  );
};

export default Hero;
