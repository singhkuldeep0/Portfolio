import LineGradient from "./LineGradient"
import { motion } from "framer-motion"



const container = {
    hidden:{},
    visible:{
        transition:{
            staggerChildren:0.2
        }
    }
} 

const productVarient = {
    hidden:{opacity:0 , scale:0.8},
    visible:{opacity:1, scale:1}
}

const Project = ({title})=>{
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
    const projectTitle = title.split(" ").join("-").toLowerCase()
    return (
        <motion.div variants={productVarient} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-Playfair">{title}</p>
                <p className="mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquid maxime minus incidunt distinctio nam nesciunt officia porro similique magnam.
                </p>
            </div>
            <img src='https://images.unsplash.com/photo-1672181256696-43f7c75ea4a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt={projectTitle} />
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="pt-10 pb-40">
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div>
                    <p className="font-Playfair font-semibold text-4xl">
                        MY <span className="text-red" >PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-4  items-center">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
                <p className="mt-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi recusandae quae, cum nesciunt culpa et magni dolor mollitia? Quidem, harum reprehenderit dolorum, distinctio recusandae, architecto eaque fuga
                </p>
            </motion.div>

            <div className="flex justify-center">
            <motion.div
                className="sm:grid grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                 variants={container}
            >
                <div className="flex justif-center items-center text-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl Font-Playfair font-semibold">
                BEAUTIFUL USER INTERFACES
                </div>
                <Project title="project 1"/>
                <Project title="project 2"/>
                
                <Project title="project 3"/>
                <Project title="project 4"/>
                <Project title="project 5"/>
                
                <Project title="project 6"/>
                <Project title="project 7"/>


                <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-Playfair font-semibold">
                    SMOOTH USER EXPERIENCE
                </div>
            </motion.div>
            </div>
        </section>
    )
}

export default Projects
