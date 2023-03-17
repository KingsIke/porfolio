// import { Experience } from '../typings'
import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {
    // experiences: Experience[]
}

const WorkExperience = (
    // { experiences }: Props
) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
        >

            <h3 className='absolute top-20 text-1xl sm:top-4 uppercase tracking-[10px] text-yellow-500 sm:text-2xl mb-10'>
                Experience
            </h3>

            {/* <div className='w-full pt-2 space-x-1 flex sm:space-x-5 overflow-x-scroll sm:p-5 snap-mandatory snap-x '>
                {experiences.map((experience) => (
                    <ExperienceCard key={experience._id} experience={experience} />
                ))}

            </div> */}

        </motion.div>
    )
}

export default WorkExperience
// className='h-screen block sm:flex relative sm:overflow-hidden sm:flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>


// 'absolute top-24 text-1xl sm:top-4 uppercase tracking-[10px] text-yellow-500 sm:text-2xl mb-10'