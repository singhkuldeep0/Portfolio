import LineGradient from "./LineGradient"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import { urlFor } from "../sanity.client"
import Link from 'next/link'


const textMotion = {
    rest: {
        x: "-460px",
        transition: {
            duration: 2,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        x: "0px",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
};




const Projects = () => {

    const projects = useSelector((state: any) => state.projects.projects)

    return (
        <div className="pt-10 pb-40">
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}>
                <div className="my-10">
                    <p className="font-Playfair font-semibold text-4xl">
                        MY <span className="text-red" >PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-3  items-center">
                        <LineGradient width="w-1/2" />
                    </div>
                </div>

            </motion.div>



            <div className="max-w-[1460px] flex flex-wrap justify-center items-center gap-10 mx-auto">
                {projects.slice(0,5).map((item, i) => (
                    <motion.div
                        key={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }}>


                        <motion.div
                            initial="rest" whileHover="hover" animate="rest"
                            className={`relative w-[330px] h-[200px]  md:w-[450px] md:h-[300px] rounded-xl overflow-hidden shadow-xl !bg-cover border-2 border-white`}
                            style={{ backgroundImage: `url(${urlFor(item.images[0]).url()})` }}>
                            <motion.div
                                variants={textMotion}
                                className="absolute top-0 z-50 w-[330px] h-[200px]  md:w-[450px] md:h-[300px] blue-gradient">
                                <div className="py-3 px-4 flex flex-col gap-3">
                                    <h2 className="text-center text-lg md:text-2xl">{item.projectName}</h2>
                                    <p className="text-sm font-workSans -mt-2 md:text-lg h-[80px] md:h-[160px] overflow-hidden md:mb-2">{item.description}</p>
                                    <div className="flex justify-evenly w-full">

                                       <Link href={item.weblink} target="_blank"><button className="relative inline-block px-4 py-2 font-medium group">
                                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-blue group-hover:border-white group-hover:bg-blue"></span>
                                            <span className="relative text-blue text-sm group-hover:text-white">View website</span>
                                        </button>
                                       </Link>


                                        <button className="relative inline-flex items-center justify-center p-3 px-3 py-2 overflow-hidden font-medium text-blue transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-blue duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease text-sm">View Project</span>
                                            <span className="relative invisible text-sm">View Project</span>
                                        </button>
                                    </div>
                                </div>

                            </motion.div>

                        </motion.div>
                    </motion.div>
                ))}
            </div>


        </div>
    )
}

export default Projects
