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
          className={`-z-50 w-[300px] h-[300px] relative flex flex-col p-4 cursor-grab active:cursor-grabbing rounded-3xl items-center justify-center mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.4)]`}
          style={{
            backgroundColor: `${props.color}99`, // Adding opacity to the color (50% opacity in hex)
            backdropFilter: 'blur(60px)', // Apply the blur effect
            WebkitBackdropFilter: 'blur(60px)', // For Safari support
          }}
        >
          <Image
            src={props.image}
            alt={props.title}
            width={120}
            height={120}
            className=""
          />
          <Link href={`${props.link}`} prefetch={true} target='_blank'>
          <div className='absolute left-4 bottom-4 bg-[#e1e4e6] hover:p-2 rounded-full hover:cursor-pointer hover:scale-115 duration-500'>
          <div className='bg-primaryLight p-3 rounded-full hover:cursor-pointer hover:scale-105 duration-500'>
            <GoArrowUpRight />
          </div>
          </div> 
          </Link>
          {props.title.length > 0 && (
            <div className='absolute left-50 bottom-5 bg-primaryLight px-3 py-1 rounded-full text-sm font-semibold'>
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
          className={`w-[615px] h-[300px] relative col-span-2 p-4 cursor-grab active:cursor-grabbing  rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.4)]`}
          style={{
            backgroundColor: `${props.color}99`, // Adding opacity to the color (50% opacity in hex)
            backdropFilter: 'blur(60px)', // Apply the blur effect
            WebkitBackdropFilter: 'blur(60px)', // For Safari support
          }}
        >
          <div className='flex flex-col items-start justify-start mx-auto gap-4'>
            <Image
              src={props.image}
              alt={props.title}
              width={120}
              height={120}
              className="rounded-full"
            />
            <p className='text-lg font-bellefair text-white'>I’m <span className='text-3xl font-bold'>Ashwin Bhagavatula</span>, a full stack developer from India. I’m interested in React, Next, Node, Typescript, Building products, Gaming and Music</p>
            <div className='absolute left-4 bottom-4 bg-primaryLight p-3 rounded-full hover:cursor-pointer hover:scale-110 duration-500'>
              <Link href="about-me" prefetch={true} className='flex gap-2 items-center justify-center'>
              <h3 className='text-sm'>Know More</h3>
              <GoArrowUpRight />
              </Link>
            </div>
          </div>
          
        </div>
      </>
    )}
    {props.cardType === "RH" && (
      <>
        <div
          key={props.id}
          className={`w-[615px] h-[300px] relative col-span-2 p-4 cursor-grab active:cursor-grabbing rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.4)]`}
          style={{
            backgroundColor: `${props.color}99`, // Adding opacity to the color (50% opacity in hex)
            backdropFilter: 'blur(60px)', // Apply the blur effect
            WebkitBackdropFilter: 'blur(60px)', // For Safari support
          }}
        >
          <div className='flex flex-col items-start justify-center mx-auto gap-4'>
            <Image
              src={props.image}
              alt={props.title}
              width={250}
              height={250}
              className="rounded-full"
            />
            <p className='text-xl font-bellefair text-white'>{props.description}</p>
            <Link href={`${props.link}`} prefetch={true} target='_blank'>
              <div className='absolute left-4 bottom-4 bg-[#e1e4e6] hover:p-2 rounded-full hover:cursor-pointer hover:scale-115 duration-500'>
                <div className='bg-primaryLight p-3 rounded-full hover:cursor-pointer hover:scale-105 duration-500'>
                  <GoArrowUpRight />
                </div>
              </div> 
            </Link>
          </div>
          
        </div>
      </>
    )}
    {props.cardType === "RV" && (
      <>
        <div
          key={props.id}
          className={` w-[300px] h-[615px] relative row-span-2 p-4 cursor-grab active:cursor-grabbing rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.4)]`}
          style={{
            backgroundColor: `${props.color}99`, // Adding opacity to the color (50% opacity in hex)
            backdropFilter: 'blur(60px)', // Apply the blur effect
            WebkitBackdropFilter: 'blur(60px)', // For Safari support
          }}
        >
          <div className='flex flex-col items-start justify-center mx-auto gap-4'>
            <Image
              src={props.image}
              alt={props.title}
              width={250}
              height={250}
              className="rounded-full"
            />
            <p className='text-xl font-bellefair text-white'>{props.description}</p>
            <Link href={`${props.link}`} prefetch={true} target='_blank'>
              <div className='absolute left-4 bottom-4 bg-[#e1e4e6] hover:p-2 rounded-full hover:cursor-pointer hover:scale-115 duration-500'>
                <div className='bg-primaryLight p-3 rounded-full hover:cursor-pointer hover:scale-105 duration-500'>
                  <GoArrowUpRight />
                </div>
              </div> 
            </Link>
          </div>
          
        </div>
      </>
    )}
    
    </>
  )
}

export default Card