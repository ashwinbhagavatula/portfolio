'use client';
import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion"
import react  from "@/images/react.png"
import java from "@/images/java.png"
import seo from "@/images/seo.png"
import aws from "@/images/cloud-computing.png"
import node from "@/images/node-js.png"
import echarts from "@/images/pie-chart.png"
import typescript from "@/images/typescript.png"
import postgres from "@/images/postgres.png"
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import Image from 'next/image';
function page() {
  return (
    <div className='mt-20 px-4 md:px-32 '>
      <motion.div 
      initial={{opacity:0, x:-50}}
      whileInView={{opacity:1, x:0}}
      transition={{
          ease: "easeOut",
          duration: 0.5,
      }}
      viewport={{once:true}}
      className='flex gap-6 items-center md:text-6xl text-3xl font-bold font-bellefair'>
      <h2>I&apos;m good at</h2>
      <GoArrowRight color='#D90429'/>
      </motion.div>

      <motion.div 
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{
          ease: "easeOut",
          duration: 0.5,
      }}
      viewport={{once:true}}
      className='flex flex-wrap gap-12 mt-16'>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <Image src={node} alt='Node' className='w-28 h-28' />
            <p className='text-xl font-semibold text-textSecondary'>NodeJs</p>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <Image src={typescript} alt='typescript' className='w-28 h-28' />
            <p className='text-xl font-semibold text-textSecondary'>Typescript</p>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <SiMongodb className='w-28 h-28 '/>
            <p className='text-xl font-semibold text-textSecondary'>MongoDB</p>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <Image src={react} alt='react' className='w-28 h-28' />
            <p className='text-xl font-semibold text-textSecondary'>React</p>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <RiNextjsFill className='w-28 h-28 '/>
            <p className='text-xl font-semibold text-textSecondary'>NextJs</p>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <Image src={echarts} alt='echarts' className='w-28 h-28' />
            <p className='text-xl font-semibold text-textSecondary'>Echarts</p>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <Image src={aws} alt='aws' className='w-28 h-28' />
            <p className='text-xl font-semibold text-textSecondary'>AWS</p>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <Image src={java} alt='java' className='w-28 h-28' />
            <p className='text-xl font-semibold text-textSecondary'>Java</p>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <Image src={seo} alt='seo' className='w-28 h-28' />
            <p className='text-xl font-semibold text-textSecondary'>SEO</p>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <Image src={postgres} alt='react' className='w-28 h-28' />
            <p className='text-xl font-semibold text-textSecondary'>Postgres</p>
          </div>
      </motion.div>
    </div>
  )
}

export default page