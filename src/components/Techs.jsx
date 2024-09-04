import React from 'react'
import { iconsList } from '../constants'
import { motion } from 'framer-motion'
import { animationParams } from './About'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Techs = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className="my-20 text-center text-4xl">
                Tecnologias
            </h2>
            <motion.div
                {...animationParams(-100, 1.5)}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {iconsList.map((value, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(index % 2 == 0 ? 2 : 4)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        {value.icon}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Techs
