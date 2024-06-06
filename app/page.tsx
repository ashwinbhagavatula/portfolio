'use client'
import React, { useState } from "react";

import { ReactSortable } from "react-sortablejs";
import Card from "@/components/Card";
interface ItemType {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
  textColor: string;
  cardType: string;
  internal:string;
}

export default function Home() {
  const [state, setState] = useState<ItemType[]>([
    {
      id: 1,
      title: "",
      description: "",
      image: "/ashwin.png", // Replace with actual image path
      link: "https://x.com/ashbhagavatula2",
      color: "#D90429",
      textColor:"",
      cardType: "ME",
      internal:"yes",
    },
    {
      id: 2,
      title: "Tech Stack",
      description: "",
      image: "/techStack.png", // Replace with actual image path
      link: "/tech-stack",
      color: "#ffffff",
      textColor:"",
      cardType: "SQ",
      internal:"yes",
  
    },
    {
      id: 3,
      title: "HeyDJ",
      description: `Never feel disconnected from the crowd again. \n
      A platform to connect DJ's and the audience `,
      image: "/heydjlogo.svg", // Replace with actual image path
      link: "https://heydj-tau.vercel.app/",
      color: "#ffcfd2",
      textColor:"",
      cardType: "RV",
      internal:"no",
  
    },
    {
      id: 4,
      title: "Blog",
      description: "",
      image: "/TAP.png", // Replace with actual image path
      link: "https://theaverageprogrammer.hashnode.dev/?source=top_nav_blog_home",
      color: "#ffcfd2",
      textColor:"",
      cardType: "SQ",
      internal:"no",
  
    },
    {
      id: 5,
      title: "Sep'23 - Present",
      description: "Currently working as a Full Stack Developer @ Sustally Technologies. Worked with Node Js, Next, React, Typescript, AWS and Git to build scalable product features. ",
      image: "/sustally-typemark.svg", // Replace with actual image path
      link: "https://www.sustally.com",
      color: "#8e4dff",
      textColor:"",
      cardType: "RH",
      internal:"no",
    },
    {
      id: 6,
      title: "",
      description: "",
      image: "/twitter-x.svg", // Replace with actual image path
      link: "https://x.com/ashbhagavatula2",
      color: "#03A9F4",
      textColor:"",
      cardType: "SQ",
      internal:"no",
    },  
    {
      id: 7,
      title: "",
      description: "",
      image: "/github.svg", // Replace with actual image path
      link: "https://github.com/ashwinbhagavatula",
      color: "#D2DEFF",
      textColor:"",
      cardType: "SQ",
      internal:"no",
  
    },
    {
      id: 8,
      title: "May'23 - Aug'23",
      description: "Awarded the SIPGA (Singapore International Pregraduate Award) in 2023 and worked as a Research Intern from May'23 - Aug'23 on monocular and stereo depth estimation",
      image: "/astar.png", // Replace with actual image path
      link: "https://www.a-star.edu.sg/Scholarships/for-undergraduate-studies/singapore-international-pre-graduate-award-sipga",
      color: "#90e0ef",
      textColor:"dark",
      cardType: "RH",
      internal:"no",
  
    },
    {
      id: 9,
      title: "My Playlist",
      description: "",
      image: "/spotify.svg", // Replace with actual image path
      link: "https://open.spotify.com/playlist/63iMVdsUdXTYyrPV1OKX3P",
      color: "#D1FFD0",
      textColor:"dark",
      cardType: "SQ",
      internal:"no",
  
    },
    // Add more items as needed
  ]);


  return (
    <div className="mx-auto flex justify-center items-center mt-20 mb-32 ">
      <ReactSortable 
        list={state} 
        setList={setState} 
        animation={500}
        swap
        ghostClass="sortable-item-ghost"
        chosenClass="sortable-item-chosen"
        className="grid grid-cols-2 xl:grid-cols-4 gap-4 z-0"
      >
        {state.map((item) => (
          <>
          <Card 
          id= {item.id}
          title= {item.title}
          description= {item.description}
          image={item.image}
          link={item.link}
          color={item.color}
          cardType= {item.cardType}
          textColor ={item.textColor}
          internal = {item.internal}
          />
          
          </>
        ))}
      </ReactSortable>
    </div>
  );
}
