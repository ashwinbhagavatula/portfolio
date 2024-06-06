"use client"
import React ,{useState} from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import me from "@/images/about-me/me.jpg"
import veltech from "@/images/about-me/veltech.png"
import { GoArrowRight } from 'react-icons/go';
function page() {
  const [isHovered, setIsHovered] = useState(false);
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

  return (

    <div className='mt-16 px-4 md:px-10 xl:px-20'>
        
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.8}}
        className='flex mx-auto justify-center items-center'>
                <h1 className='font-dancingScript text-3xl md:text-7xl font-bold text-primaryTextLight dark:text-primaryTextDark'>Hello! I'm <span className='text-primaryAccent'>Venkata Sai Ashwin</span></h1>
        </motion.div>
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{
            ease: "easeOut",
            duration: 0.5,
            
        }}
        viewport={{once:true}}
        className='flex flex-col md:flex-row justify-center items-center  md:text-start  mx-auto mt-8 gap-12'>
            <motion.div
                className='w-fit relative '
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                    <motion.div
                        variants={imageVariants}
                        initial="visible"
                        animate={isHovered ? "hidden" : "visible"}
                        transition={{ duration: 0.3 }}
                        className='absolute '
                    >
                        <Image
                            src={me}
                            alt="Normal Image"
                            width={255}
                            height={100}
                            className='rounded-2xl '
                        />
                    </motion.div>
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate={isHovered ? "visible" : "hidden"}
                        transition={{ duration: 0.3 }}
                        className=''
                    >
                        <Image
                            src={me}
                            alt="Hovered Image"
                            width={255}
                            height={100}
                            className='rounded-2xl '
                        />
                    </motion.div>
            </motion.div>
            <div className='max-w-4xl text-xl md:text-2xl font-bellefair text-secondaryTextLight dark:text-secondaryTextDark px-4'>
                <p>
                I am a passionate computer science graduate currently working as a full stack developer at Sustally. My journey in the tech world is driven by a deep enthusiasm for building innovative products and software solutions. The solid foundational knowledge I gained during my college years, combined with the hands-on development skills I've acquired through my professional experience, has shaped me into a versatile and adept developer. I possess an insatiable curiosity and an ever-learning attitude, always eager to explore new technologies that can enhance the efficiency and quality of my work. This continuous learning ethos ensures that I stay at the forefront of the rapidly evolving tech landscape.

                When I am not immersed in coding and development, you can find me on the basketball court, where I enjoy the thrill and camaraderie of the game. Alternatively, I might be indulging in my love for anime, binging on my favorite series. These activities provide me with a perfect balance, fueling my creativity and energy both in and out of the office.
                </p>
            </div>
        </motion.div>
        <div className='flex flex-col items-start mx-auto mt-52 px-4'>
            <motion.div 
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            transition={{
                ease: "easeOut",
                duration: 0.7,
                
            }}
            viewport={{once:true}}
            className='flex gap-4 md:gap-10 px-4 lg:px-20 text-3xl md:text-6xl items-center' >
                <h1 className='text-primaryTextLight dark:text-primaryTextDark font-serif font-semibold'>My Journey</h1>
                <GoArrowRight color='#D90429'/>
            </motion.div>
            {/* Education 1 */}
            <motion.div 
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{
                ease: "easeOut",
                duration: 0.5,
                delay:0.8
                
            }}
            viewport={{once:true}}
            className='flex flex-col md:flex-row mt-16 mx-auto justify-center items-center gap-12 bg-primaryAccent/60 px-10 py-10 rounded-2xl'>
                <>
                    <Image
                        src={veltech}
                        alt="Hovered Image"
                        width={400}
                        height={100}
                    />
                </>
                <div className='flex flex-col mx-auto justify-center items-center max-w-lg gap-3'>
                    <h2 className='font-semibold text-lg md:text-2xl font-serif text-textSecondary'>Bachelors In Technology in Computer Science and Engineering, Distinction-Graduated</h2>
                    
                    <ul className="text-white text-lg md:text-2xl list-disc font-bellefair">
                        <li>Embarked on an exhilarating journey at UOH, Hatfield, UK, where I immersed myself in the transformative realm of business analytics and consultancy.</li>
                        <li className="mt-2">Graduated with distinction, earning my Master of Science degree in Business Analytics and Consultancy, showcasing my dedication to academic excellence and mastery of the subject matter.</li>
                    </ul>

                    
                </div>
            </motion.div>
        </div>
        <div className='flex flex-col items-start mx-auto mt-52 gap-8'>
            <motion.div 
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            transition={{
                ease: "easeOut",
                duration: 0.5,
                
            }}
            viewport={{once:true}}
            className='flex gap-4 md:gap-10 px-4 lg:px-20 text-3xl md:text-6xl items-center'>
                <h1 className=' text-primaryTextLight dark:text-primaryTextDark font-serif font-semibold max-w-2xl'>Since you've scrolled all the way down</h1>
                <GoArrowRight color='#D90429'/>
            </motion.div>
            <motion.h2 
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            transition={{
                ease: "easeOut",
                duration: 0.5,
                delay:0.2
            }}
            viewport={{once:true}}
            className='text-xl md:text-3xl text-textSecondary font-serif font-semibold max-w-5xl px-4 lg:px-20'>This is what you'll see me doing when I'm off work</motion.h2>
        </div>
    </div>
  )
}

export default page