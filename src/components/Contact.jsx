import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import { animationParams } from './About'

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl"
            >
                Entre em contato
            </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p {...animationParams(-100, 0.8)} className="my-4">
                    {CONTACT.address}
                </motion.p>
                <motion.p {...animationParams(100, 0.8)} className="my-4">
                    {CONTACT.phoneNo}
                </motion.p>
                <a href='#' className="border-b">
                    {CONTACT.email}
                </a>
            </div>
        </div>
    )
}

export default Contact
