import React from 'react'
import Image from "next/image";
function Card(props:any) {
  return (
    <div
            key={props.id}
            className={`flex flex-col items-center p-4 mb-4 rounded-lg cursor-grab active:cursor-grabbing`}
            style={{ backgroundColor: props.color }}
          >
            <Image
              src={props.image}
              alt={props.title}
              width={100}
              height={100}
              className="rounded-full"
            />
            <h2 className="mt-2 text-lg font-bold">{props.title}</h2>
            <p className="mt-1 text-sm text-gray-700">{props.description}</p>
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-500 underline"
            >
              Learn more
            </a>
          </div>
  )
}

export default Card