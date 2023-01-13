import LineGradient from "./LineGradient"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"

const MySkills = () => {

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")


  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex flex-col md:flex-row md:justify-between gap-16 md:mt-32">
        <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true , amount:0.5}}
        transition={{duration:0.5}}
        variants={{
          hidden:{opacity:0 , x:-50},
          visible:{ opacity:1 , x:0}
        }}
        >
          <p className="font-Playfair font-semibold text-4xl mb-5">
            MY <span className="text-red" >SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi recusandae quae, cum nesciunt culpa et magni dolor mollitia? Quidem, harum reprehenderit dolorum, distinctio recusandae, architecto eaque fuga
          </p>
        </motion.div>

        <div className="md:-mt-[50px] mt-10 ml-auto md:mr-10 relative">
          
            <div className="relative z-0 mx-auto before:absolute before:-top-1 before:-right-4 before:w-[20rem] before:h-[24rem] before:bg-pink-200 before:z-[-1] before:opacity-30 before:rounded-[30px] before:rotate-[6deg] before:hover:rotate-[0deg] before:md:hover:right-40 before:hover:bg-white/90 before:hover:opacity-100 group before:transition before:duration-300 before:ease-in-out w-[20rem]">
              <div className="hidden md:group-hover:block">
              <img src="/assets/redux.png" alt="" className=" absolute -left-24 top-10 h-20 w-20"/>
              <img src="/assets/tailwind.png" alt="" className=" absolute -left-24 top-36 h-10 w-16 "/>
              <img src="/assets/typescript.png" alt="" className="absolute -left-24 top-60 h-16 w-16"/>
            
              </div>
               <div className="w-[20rem] bg-white h-[24rem] rounded-[30px]">
                  <div className="grid grid-cols-2 mt-3 pt-6">
                    <div className="col-span-1 flex flex-col gap-6">
                    <img src="/assets/html-5.png" alt="" className="h-16 w-16 mx-auto"/>
                    <img src="/assets/css.png" alt="" className="h-16 w-16 mx-auto"/>
                    <img src="/assets/javascript.png" alt="" className="h-16 w-16 mx-auto"/>
                    <img src="/assets/react.png" alt="" className="h-16 w-16 mx-auto"/>
                    </div>
                    <div className="col-span-1 flex flex-col gap-7">
                    <img src="/assets/nextjs.png" alt="" className="h-16 w-16 mx-auto"/>
                    <img src="/assets/nodejs.png" alt="" className="h-12 w-20 mx-auto"/>
                    <img src="/assets/mongo.png" alt="" className="h-20 w-20 mx-auto"/>
                    <img src="/assets/sanity.png" alt="" className="h-6 w-24 mt-3 mx-auto"/>
                    </div>
                  </div>
              </div>
            </div>
         
        </div>
      </div>

          <div className="md:flex md:justify-between gap-32 mt-20 md:mt-10">
            <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true , amount:0.5 }}
            transition={{duration:0.5}}
            variants={{
              hidden:{opacity:0 , y:50},
              visible:{ opacity:1 , y:0}
            }}
            >
              <div className="relative h-32">
                <div className="z-10 pt-[18px]">
                    <p className="font-playfair font-semibold text-2xl md:text-5xl">01</p>
                    <p className="font-playfair font-semibold text-2xl md:text-3xl mmt-1 md:mt-3">Experience</p>
                </div>
                <div className={`w-3/4 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]`} />
              </div>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, totam ducimus provident est quisquam deserunt facere adipisci, omnis at consequatur, mollitia repellat dolore architecto obcaecati odio! Soluta quae sed odio voluptate unde!
              </p>
            </motion.div>

            <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true , amount:0.5 }}
            transition={{duration:0.5}}
            variants={{
              hidden:{opacity:0 , y:50},
              visible:{ opacity:1 , y:0}
            }}
            >
              <div className="relative h-32">
               
                
                <div className="z-10 pt-[18px] text-right md:text-left">
                    <p className="font-playfair font-semibold text-2xl md:text-5xl">02</p>
                    <p className="font-playfair font-semibold text-2xl md:text-3xl mmt-1 md:mt-3">Innovative</p>
                </div>
                <div className={`w-3/4 md:w-3/4 h-32 bg-blue absolute ${ isAboveMediumScreens ? 'right-0' : 'left-0'} top-0 z-[-1]`} />
              </div>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, totam ducimus provident est quisquam deserunt facere adipisci, omnis at consequatur, mollitia repellat dolore architecto obcaecati odio! Soluta quae sed odio voluptate unde!
              </p>
            </motion.div>

            <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true , amount:0.5 }}
            transition={{duration:0.5}}
            variants={{
              hidden:{opacity:0 , y:50},
              visible:{ opacity:1 , y:0}
            }}
            >
              <div className="relative h-32">
                <div className="z-10 pt-[18px]">
                    <p className="font-playfair font-semibold text-2xl md:text-5xl">01</p>
                    <p className="font-playfair font-semibold text-2xl md:text-3xl mmt-1 md:mt-3">Imaginative</p>
                </div>
                <div className="w-3/4 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
              </div>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, totam ducimus provident est quisquam deserunt facere adipisci, omnis at consequatur, mollitia repellat dolore architecto obcaecati odio! Soluta quae sed odio voluptate unde!
              </p>
            </motion.div>
          </div>

    </section>
  )
}

export default MySkills