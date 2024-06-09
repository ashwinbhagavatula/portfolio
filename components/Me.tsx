'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import travel from '@/images/about-me/travel.png'
import meme from '@/images/about-me/meme.png'
import food from '@/images/about-me/food.png'
import cake from "@/images/about-me/cake.jpeg"
import mandi from "@/images/about-me/mandi.jpeg"
import travelbuilding from '@/images/about-me/charminar.jpg'
import singapore from '@/images/about-me/singapore.jpg'
import pondi from "@/images/about-me/pondi.jpg"
import photo from '@/images/about-me/photography.png'
import tree from "@/images/about-me/tree.jpg"
import horse from "@/images/about-me/horse.jpg"
import pulaoubin from "@/images/about-me/pulao.jpg"
import pizza from '@/images/about-me/pizza.jpeg'
import pasta from '@/images/about-me/pasta.jpeg'
import ramen from '@/images/about-me/ramen.jpeg'
import {motion} from 'framer-motion'
import { ReactSortable } from 'react-sortablejs'

interface ItemType {
    id: number;
    image: string;
    width: number;
    height:number;
    colspan:string;
    rowspan:string;
    type:string
}

function Me() {
    const [state, setState] = useState<ItemType[]>([
        {
            id: 1,
            image: pizza.src,
            width: 200,
            height:100,
            colspan:"col-span-1",
            rowspan:"row-span-2",
            type:"rv"
        },
        {
            id: 4,
            image: pasta.src,
            width: 270,
            height:100,
            colspan:"col-span-1",
            rowspan:"row-span-1",
            type:"rh"
        },
        {
            id: 2,
            image: ramen.src,
            width: 270,
            height: 100,
            colspan:"col-span-1",
            rowspan:"row-span-1",
            type:"rh"
        },
        {
            id: 3,
            image: cake.src,
            width: 200,
            height: 100,
            colspan:"col-span-1",
            rowspan:"row-span-1",
            type:"rh"
        },
        {
            id: 5,
            image: mandi.src,
            width: 200,
            height: 100,
            colspan:"col-span-1",
            rowspan:"row-span-1",
            type:"rh"
        },

    ])
    const [travelState, setTravelState] = useState<ItemType[]>([
        {
            id: 1,
            image: travelbuilding.src,
            width: 200,
            height:100,
            colspan:"col-span-1",
            rowspan:"row-span-2",
            type:"rv"
        },
        
        {
            id: 2,
            image: pulaoubin.src,
            width: 270,
            height:100,
            colspan:"col-span-1",
            rowspan:"row-span-1",
            type:"rh"
        },
        {
            id: 3,
            image: tree.src,
            width: 200,
            height: 100,
            colspan:"col-span-1",
            rowspan:"row-span-1",
            type:"rv"
        },
        {
            id: 4,
            image: singapore.src,
            width: 270,
            height: 100,
            colspan:"col-span-1",
            rowspan:"row-span-1",
            type:"rh"
        },
        
        
        // {
        //     id: 5,
        //     image: horse.src,
        //     width: 200,
        //     height: 100,
        //     colspan:"col-span-1",
        //     rowspan:"row-span-1",
        //     type:"rv"
        // },

    ])
    
  return (
    <div className='mt-16 px-4 md:px-20'>
        <div className='flex flex-col md:flex-row gap-12 justify-center items-center mx-auto'>
            <motion.div 
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:1, x:0}}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    
                }}
                viewport={{once:true}}
                className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                <Image 
                src={photo}
                width={30}
                height={30}
                alt="Icon"
                />
                <h2 className='font-serif font-bold text-lg md:text-2xl '>Travel Junkie & Photographer</h2>
                </div>
                <p className='text-lg md:text-2xl font-bellefair'>
                I&apos;ve travelled to more than 6 states in India and lived in Singapore for months. I like to think this makes me adapt to new environments with ease, and has taught me to be curious. 
                My favourite trip has to be Singapore where I fell in love with the culture the people and the landscape.
                </p>
            </motion.div>
            <motion.div 
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:1, x:0}}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    
                }}
                viewport={{once:true}}
                 className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                <Image 
                src={meme}
                width={30}
                height={30}
                alt="Icon"
                />
                <h2 className='font-serif font-bold text-lg md:text-2xl'>Pop Culture Lover</h2>
                </div>
                <p className='text-lg md:text-2xl font-bellefair'>
                I&apos;m that friend who casually plugs in meme references during conversations and slightly judges you if you don&apos;t recognize them 👀.  
                I spend a lot of my free time on Instagram, Twitter, YouTube, so you can trust me to give you the daily fix on what&apos;s going on with the Internet. 
                </p>
            </motion.div>
        </div>
        <br></br><br></br>
        <motion.div 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay:0.5
                }}
                viewport={{once:true}}
                className='flex flex-wrap gap-8 mx-auto justify-center items-center'>

                <ReactSortable 
                list={travelState} 
                setList={setTravelState} 
                animation={500}
                swap
                ghostClass="sortable-item-ghost"
                chosenClass="sortable-item-chosen"
                className="grid grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 gap-4 z-0"
                >
                    {travelState.map((item)=>(
                        <div 
                        key={item.id}
                        className={`${item.type === "rv" ? "w-44 h-64 md:w-96 md:h-[530px] row-span-2 col-span-1" : "w-44 h-44 md:w-96 md:h-64 row-span-1 col-span-1" } bg-primaryAccent rounded-xl md:rounded-3xl relative overflow-hidden`}>
                        <Image 
                            src={item.image}
                            fill
                            objectFit='cover'
                            objectPosition="center"
                            alt='Food image'
                            className='cursor-grab active:cursor-grabbing'
                        />
                        </div>
                    ))}

                </ReactSortable>
                
        </motion.div>
        <br></br><br></br>
        <hr className="h-1 mx-auto my-4 bg-secondaryBgLight dark:bg-secondaryBgDark border-0 rounded md:my-10 duration-150"/>
        <motion.div 
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:1, x:0}}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay:0.5
                }}
                viewport={{once:true}}
                className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                <Image 
                src={food}
                width={30}
                height={30}
                alt="Icon"
                />
                <h2 className='font-serif font-bold text-lg md:text-2xl '>Avid Foodie</h2>
                </div>
                <p className='text-lg md:text-2xl font-bellefair'>
                Do you ever travel more than 10 miles to eat a shawarma, because I do. I&apos;m not just your average foodie—I&apos;m a culinary adventurer on a quest for flavor, and my passport is stamped with delicious destinations. 
                Arab and Indian cuisines are my go-tos, but I&apos;m not afraid to sprinkle in some Italian or Chinese flair. From street eats to fine dining, I live for flavor-packed adventures that tantalize the taste buds.
                </p>

        </motion.div>
        <motion.div 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay:0.5
                }}
                viewport={{once:true}}
                className='flex flex-wrap gap-8 mx-auto justify-center items-center mt-16 mb-20'>
                
                <ReactSortable 
                list={state} 
                setList={setState} 
                animation={500}
                swap
                ghostClass="sortable-item-ghost"
                chosenClass="sortable-item-chosen"
                className="grid grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 gap-4 z-0 max-h-[530px]"
                >
                    {state.map((item)=>(
                        <div 
                        key={item.id}
                        className={`${item.type === "rv" ? "w-44 h-64 md:w-96 md:h-[530px] row-span-2 col-span-1" : "w-44 h-44 md:w-96 md:h-64 row-span-1 col-span-1" } bg-primaryAccent rounded-xl md:rounded-3xl relative overflow-hidden`}>
                        <Image 
                            src={item.image}
                            fill
                            objectFit='cover'
                            objectPosition="center"
                            alt='Food image'
                        />
                        </div>
                    ))}

                </ReactSortable>
                
        </motion.div>
    </div>
  )
}

export default Me