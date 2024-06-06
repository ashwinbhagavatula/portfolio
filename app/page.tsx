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
  cardType: string;
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
      cardType: "ME",
    },
    {
      id: 2,
      title: "Tech Stack",
      description: "",
      image: "/techStack.png", // Replace with actual image path
      link: "/tech-stack",
      color: "#ffffff",
      cardType: "SQ",
  
    },
    {
      id: 3,
      title: "HeyDJ",
      description: `Never feel disconnected from the crowd again. \n
      A platform to connect DJ's and the audience `,
      image: "/heydjlogo.svg", // Replace with actual image path
      link: "https://heydj-tau.vercel.app/",
      color: "#ffcfd2",
      cardType: "RV",
  
    },
    {
      id: 4,
      title: "Blog",
      description: "",
      image: "/TAP.png", // Replace with actual image path
      link: "https://theaverageprogrammer.hashnode.dev/?source=top_nav_blog_home",
      color: "#ffcfd2",
      cardType: "SQ",
  
    },
    {
      id: 5,
      title: "",
      description: "Currently working as a Full Stack Developer @ Sustally Technologies. Worked with Node Js, Next, React, Typescript, AWS and Git to build scalable product features. ",
      image: "/sustally-typemark.svg", // Replace with actual image path
      link: "https://www.sustally.com",
      color: "#8e4dff",
      cardType: "RH",
    },
    {
      id: 6,
      title: "",
      description: "",
      image: "/twitter-x.svg", // Replace with actual image path
      link: "https://x.com/ashbhagavatula2",
      color: "#03A9F4",
      cardType: "SQ",
    },  
    {
      id: 7,
      title: "",
      description: "",
      image: "/github.svg", // Replace with actual image path
      link: "https://github.com/ashwinbhagavatula",
      color: "#D2DEFF",
      cardType: "SQ",
  
    },
    // Add more items as needed
  ]);


  return (
    <div className="mx-auto flex justify-center items-center mt-20 mb-10 ">
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
          />
          
          </>
        ))}
      </ReactSortable>
    </div>
  );
}
