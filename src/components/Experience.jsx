import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'
import { animationParams } from './About'

const Experience = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className="my-20 text-center text-4xl">
                Experiência
            </h2>
            <div>
                {EXPERIENCES.map((value, index) => (
                    <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
                        <motion.div
                            {...animationParams(-100, 1)}
                            className='w-full lg:w-1/4'
                        >
                            <p className="text-sm mb-2 text-neutral-400">{value.year}</p>
                        </motion.div>
                        <motion.div
                            {...animationParams(100, 1)}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold">
                                {value.role} - {" "} <span className='text-sm text-purple-100'>{value.company}</span>
                            </h6>
                            <p className='mb-4 text-neutral-400'>{value.description}</p>
                            {value.technologies ? (
                                value.technologies.map((tech, index) => (
                                    tech ? (
                                        <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                                            {tech}
                                        </span>
                                    ) : (
                                        <></>
                                    )
                                ))
                            ) : (
                                <></>
                            )}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
