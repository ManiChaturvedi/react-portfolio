import { RiReactjsLine } from "react-icons/ri";  
import { FaNodeJs, FaAws } from "react-icons/fa";       
import { SiTailwindcss, SiTypescript, SiPrisma, SiMysql, SiExpress, SiMongodb, SiPostgresql } from "react-icons/si"; 
import { motion } from 'framer-motion'

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }} 
        className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconvariants(2.5)}
          initial='initial'
          animate='animate'
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-4xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconvariants(3)}
          initial='initial'
          animate='animate' 
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-4xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconvariants(5)}
          initial='initial'
          animate='animate' 
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-4xl text-gray-500" />
        </motion.div>
        <motion.div
          variants={iconvariants(2)}
          initial='initial'
          animate='animate' 
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-4xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconvariants(6)}
          initial='initial'
          animate='animate'
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-4xl text-blue-500" />
        </motion.div>
        <motion.div 
          variants={iconvariants(4)}
          initial='initial'
          animate='animate'
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAws className="text-4xl text-black-500" />
        </motion.div>
        <motion.div 
          variants={iconvariants(3.5)}
          initial='initial'
          animate='animate'
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-4xl text-blue-500" />
        </motion.div>
        <motion.div 
          variants={iconvariants(2.8)}
          initial='initial'
          animate='animate'
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-4xl text-blue-500" />
        </motion.div>
        <motion.div 
          variants={iconvariants(5.2)}
          initial='initial'
          animate='animate'
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPrisma className="text-4xl text-black-500" />
        </motion.div>
        <motion.div 
          variants={iconvariants(2.2)}
          initial='initial'
          animate='animate'
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-4xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
