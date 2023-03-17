import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const Projects = ({ }: Props) => {
    const projects = [1, 2, 3, 4, 5]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 space-y-30' >

            <h3 className='absolute top-24 uppercase tracking-[20px]  text-yellow-600 text-2xl '>
                Projects </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  min-w-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin ">
                {/* {projects.map((project, i) => {
                    return (

                        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen md:flex-shrink-0    " >

                            <motion.img
                                initial={{ y: -300, opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src="https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=webp&w=1824" className="h-2/6 w-1/6 sm:h-2/6 sm:w-2/6  md:h-48 md:w-48  pt-12" alt="" />

                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>

                                <h4 className='text-4xl font-semibold text-center' key={i}>
                                    <span className="underline decoration-[#F7AB0A]/50"> Case Study {i + 1} of {projects.length}:
                                    </span>  UPS clone</h4>

                                <p className='text-lg text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis explicabo molestias placeat assumenda minus pariatur. Eligendi vero aspernatur eum!</p>
                            </div>
                        </div>
                    )
                })} */}
                {/* <project /> */}
                {/* <project /> */}
                {/* <project /> */}
            </div>

            <div className="w-full absolute top-[60] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12  "></div>
        </motion.div >
    )
}
export default Projects

// w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen md:flex-shrink-0 

// h-2/6 w-1/6 sm:h-2/6 sm:w-2/6  md:h-48 md:w-48

// lg:w-1/4