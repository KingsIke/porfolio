import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?: boolean
}

const Skill = ({ directionLeft }: Props) => {
    return (
        <div className=' group relative flex cursor-pointer top-14'>

            <motion.img
                initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src="https://icon-library.com/images/css-icon/css-icon-12.jpg"
                className='rounded-full border border-gray-500 object-cover w-20 h-20  sm:w-24 sm:h-24 md:h-28 md:w-28 xl:w-30 xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out' />
            {/* "https://icon-library.com/images/html5-icon-png/html5-icon-png-8.jpg"  other pix for */}

            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 xl:w-30 xl:h-30 rounded-full z-0'>
                <div className='flex item-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100 pt-10'>100%</p>
                </div>
            </div>
        </div>
    )
}
export default Skill