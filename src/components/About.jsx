import { motion } from 'framer-motion'
import React from 'react'
import aboutMe from '../assets/about_me.png'
import { ABOUT_TEXT } from '../constants/index.jsx'

export const animationParams = (initialX, duration) => {
    return {
        whileInView: { opacity: 1, x: 0 },
        initial: { opacity: 0, x: initialX },
        transition: { duration: duration }
    }
}

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>
                Sobre
                <span className="text-neutral-500"> mim</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div
                    {...animationParams(-100, 0.8)}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" width={550} height={550} src={aboutMe} alt="About me image" />
                    </div>
                </motion.div>
                <motion.div
                    {...animationParams(100, 0.8)}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT()}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
