import LineGradient from "./LineGradient"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import { urlFor } from "../sanity.client"


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
        x: "-10px",
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
        <div id="projects" className="pt-10 pb-40">
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
                {projects.map((item, i) => (
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
                            className={`relative  w-[450px] h-[230px] rounded-xl overflow-hidden shadow-xl !bg-contain`}
                            style={{ backgroundImage: `url(${urlFor(item.images[0]).url()})` }}>
                            <motion.div
                                variants={textMotion}
                                className="absolute top-0 z-50 w-[450px] h-[230px] blue-gradient">
                            </motion.div>

                        </motion.div>
                    </motion.div>
                ))}
            </div>


        </div>
    )
}

export default Projects
