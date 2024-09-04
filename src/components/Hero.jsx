import React from 'react'
import { HERO_CONTENT } from '../constants/index.jsx'
import profilePic from '../assets/lucaSteyer.png'
import { motion } from 'framer-motion'

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const animationParams = (delay) => {
    return {
        variants: container(delay),
        initial: 'hidden',
        animate: 'visible'
    }
}

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            {...animationParams(0)}
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
                        >
                            Luca Steyer
                        </motion.h1>
                        <motion.span
                            {...animationParams(0.3)}
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                        >
                            Full Stack developer
                        </motion.span>
                        <motion.p
                            {...animationParams(0.6)}
                            className='my-2 max-w-xl py-6 font-light tracking-tight'
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt="Profile image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
