import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

const Skills = ({ }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=" flex relative flex-col text-center md:text-left xl:flex-row max-w-[600px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center ">

            <h3 className="absolute top-24 uppercase tracking-[20px]  text-yellow-600 text-2xl">
                Skills
            </h3>
            <p className="absolute w-auto top-36 uppercase text-l tracking-[3px] text-gray-500 w-100 ">Hover over a SkilL for current Proficiency</p>

            <div className="grid grid-cols-3 gap-4 sm:grid sm:grid-cols-4 sm:gap-5">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />

            </div>



        </motion.div>
    );
}
export default Skills
