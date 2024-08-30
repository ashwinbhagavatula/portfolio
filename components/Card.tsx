import React from 'react'
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';
function Card(props:any) {
  // Function to convert hex color to rgba with the given opacity
  const hexToRgba = (hex:any, opacity:any) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  return (
    <>
    {props.cardType === "SQ" && (
      <>
        <div
          key={props.id}
          className={` w-[180px] h-[180px] md:w-[300px] md:h-[300px] relative flex flex-col p-2 md:p-4 cursor-grab active:cursor-grabbing rounded-xl md:rounded-3xl items-center justify-center mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.4)]`}
          style={{
            backgroundColor: `${props.color}99`, // Adding opacity to the color (50% opacity in hex)
            backdropFilter: 'blur(70px)', // Apply the blur effect
            WebkitBackdropFilter: 'blur(70px)', // For Safari support
          }}
        >
          <Image
            src={props.image}
            alt={props.title}
            width={120}
            height={120}
            className="w-16 h-16 md:w-[120px] md:h-[120px]"
          />
          <Link href={`${props.link}`} prefetch={true} target={`${props.internal === "no" ? '_blank' : ""}`} >
          <div className='absolute left-2 bottom-2 md:left-4 md:bottom-4 bg-[#e1e4e6] md:hover:p-2 rounded-full hover:cursor-pointer hover:scale-115 duration-500'>
          <div className='bg-primaryLight p-3 rounded-full hover:cursor-pointer hover:scale-105 duration-500'>
            <GoArrowUpRight />
          </div>
          </div> 
          </Link>
          {props.title.length > 0 && (
            <div className='absolute left-14 md:left-20 md:bottom-5 bottom-2 bg-primaryLight px-3 py-1 rounded-full text-xs md:text-sm font-semibold'>
            {props.title}
          </div>
          )}
          
        </div>
      </>
    )}
    {props.cardType === "ME" && (
      <>
        <div
          key={props.id}
          className={`w-[370px] h-[180px] md:w-[615px] md:h-[300px] relative col-span-2 p-4 cursor-grab active:cursor-grabbing  rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.4)]`}
          style={{
            backgroundColor: `${props.color}99`, // Adding opacity to the color (50% opacity in hex)
            backdropFilter: 'blur(70px)', // Apply the blur effect
            WebkitBackdropFilter: 'blur(70px)', // For Safari support
          }}
        >
          <div className='flex flex-row md:flex-col items-start justify-start mx-auto gap-4'>
            <Image
              src={props.image}
              alt={props.title}
              width={120}
              height={120}
              className="rounded-full w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
            />
            <p className='text-sm md:text-lg font-bellefair text-white'>I’m <span className='text-lg md:text-3xl font-bold'>Ashwin Bhagavatula</span>, a full stack developer from India. I’m interested in React, Next, Node, Typescript, Building products, Gaming and Music</p>
            <Link href="about-me" prefetch={true} className='flex gap-2 items-center justify-center ' >
            <div className='absolute left-4 bottom-4 bg-primaryLight p-3 rounded-full hover:cursor-pointer hover:scale-110 duration-500 flex gap-2 items-center'>
              <h3 className='hidden md:block text-sm'>Know More</h3>
              <GoArrowUpRight />
            </div>
            </Link>
          </div>
          
        </div>
      </>
    )}
    {props.cardType === "RH" && (
      <>
        <div
          key={props.id}
          className={`w-[370px] h-[180px] md:w-[615px] md:h-[300px] relative col-span-2 p-2 md:p-4 cursor-grab active:cursor-grabbing rounded-xl md:rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.4)]`}
          style={{
            backgroundColor: `${props.color}99`, // Adding opacity to the color (50% opacity in hex)
            backdropFilter: 'blur(70px)', // Apply the blur effect
            WebkitBackdropFilter: 'blur(70px)', // For Safari support
          }}
        >
          <div className='flex flex-col items-start justify-center mx-auto gap-2 md:gap-4'>
            <Image
              src={props.image}
              alt={props.title}
              width={250}
              height={250}
              className="w-[100px] h-[50px] md:w-[250px] md:h-[100px]"
            />
            <p className={`text-xs md:text-2xl font-bellefair ${props.textColor === "dark" ? "text-black" : "text-white "} md:px-4`} >{props.description}</p>
            <Link href={`${props.link}`} prefetch={true} target='_blank' >
              <div className='absolute left-2 bottom-2 md:left-4 md:bottom-4 bg-[#e1e4e6] md:hover:p-2 rounded-full hover:cursor-pointer hover:scale-115 duration-500'>
                <div className='bg-primaryLight p-3 rounded-full hover:cursor-pointer hover:scale-105 duration-500'>
                  <GoArrowUpRight />
                </div>
              </div> 
            </Link>
            {props.title.length > 0 && (
              <div className='absolute left-20 md:bottom-5  bottom-2 bg-primaryLight px-3 py-1 rounded-full text-xs md:text-sm font-semibold'>
              {props.title}
              </div>
            )}
          </div>
          
        </div>
      </>
    )}
    {props.cardType === "RV" && (
      <>
        <div
          key={props.id}
          className={`w-[180px] h-[370px] md:w-[300px] md:h-[615px] relative row-span-2 p-2 md:p-4 cursor-grab active:cursor-grabbing rounded-xl md:rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.4)]`}
          style={{
            backgroundColor: `${props.color}99`, // Adding opacity to the color (50% opacity in hex)
            backdropFilter: 'blur(70px)', // Apply the blur effect
            WebkitBackdropFilter: 'blur(70px)', // For Safari support
          }}
        >
          <div className='flex flex-col items-start justify-center mx-auto gap-4'>
            <Image
              src={props.image}
              alt={props.title}
              width={250}
              height={250}
              className="rounded-full w-[160px] h-[100px] md:w-[250px] md:h-[250px]"
            />
            <p className='text-sm md:text-2xl text-black font-bellefair md:px-4'>{props.description}</p>
            <Link href={`${props.link}`} prefetch={true} target='_blank' className='p-2'>
              <div className='absolute left-2 bottom-2 md:left-4 md:bottom-4 bg-[#e1e4e6] md:hover:p-2 rounded-full hover:cursor-pointer hover:scale-115 duration-500'>
                <div className='bg-primaryLight p-3 rounded-full hover:cursor-pointer hover:scale-105 duration-500'>
                  <GoArrowUpRight />
                </div>
              </div> 
            </Link>
            {props.title.length > 0 && (
            <div className='absolute md:left-52 md:bottom-5 bottom-2 left-16 bg-primaryLight px-3 py-1 rounded-full text-xs md:text-sm font-semibold'>
            {props.title}
            </div>
            )}
          </div>
          
        </div>
      </>
    )}
    
    </>
  )
}

export default Card