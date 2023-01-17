import LineGradient from "./LineGradient";
import { motion } from "framer-motion";

const Testimonials = ()=>{
    const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`

    return (
        <section id="testimonials" className="pt-20 pb-28 flex items-center flex-col justify-center">
        <motion.div
            className="md:w-1/3 text-center md:text-left mb-14 flex justify-center items-center flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true , amount:0.5}}
            transition={{duration:0.5}}
            variants={{
            hidden:{opacity:0 , scale:0.8},
            visible:{ opacity:1 , scale:1}
            }}
        >
          <p className="font-Playfair font-semibold text-4xl mb-3 text-red text-center">
             TESTIMONIALS
          </p>
          <LineGradient width="w-[80%]" />
         
        </motion.div>

        <div className="flex md:justify-center flex-col md:flex-row  gap-8">
        <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once:true , amount:0.5}}
      transition={{duration:0.5}}
      variants={{
      hidden:{opacity:0 , scale:0.8},
      visible:{ opacity:1 , scale:1}
      }}
    className="block rounded-lg shadow-lg bg-white w-[320px] mx-auto">
        <div className="overflow-hidden rounded-t-lg h-28" style={{backgroundColor:'#9d789b'}}></div>
        <div className="w-28 -mt-16 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
        </div>
        <div className="p-6">
          <h4 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Maria Smantha</h4>
          <hr />
          <p className="mt-4 text-gray-900 text-center">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
            </svg>
            Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.
          </p>
        </div>
      </motion.div>

      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once:true , amount:0.5}}
      transition={{duration:0.5}}
      variants={{
      hidden:{opacity:0 , scale:0.8},
      visible:{ opacity:1 , scale:1}
      }}
    className="block rounded-lg shadow-lg bg-white w-[320px] mx-auto">
        <div className="overflow-hidden rounded-t-lg h-28" style={{backgroundColor:'#9d789b'}}></div>
        <div className="w-28 -mt-16 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
        </div>
        <div className="p-6">
          <h4 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Maria Smantha</h4>
          <hr />
          <p className="mt-4 text-gray-700 text-center">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
            </svg>
            Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, quibusdam explicabo. 
          </p>
        </div>
      </motion.div>

      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once:true , amount:0.5}}
      transition={{duration:0.5}}
      variants={{
      hidden:{opacity:0 , scale:0.8},
      visible:{ opacity:1 , scale:1}
      }}
    className="block rounded-lg shadow-lg bg-white w-[320px] mx-auto">
        <div className="overflow-hidden rounded-t-lg h-28" style={{backgroundColor:'#9d789b'}}></div>
        <div className="w-28 -mt-16 overflow-hidden border-2 border-white rounded-full mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
        </div>
        <div className="p-6">
          <h4 className="text-2xl font-semibold mb-4 text-gray-800">Maria Smantha</h4>
          <hr />
          <p className="mt-4 text-gray-700">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
            </svg>
            Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.
          </p>
        </div>
      </motion.div>
        </div>

        </section>
    )
}

export default Testimonials