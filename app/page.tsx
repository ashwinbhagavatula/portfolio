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
      title: "Shrek",
      description: "A green ogre who loves peace and quiet.",
      image: "/ashwin.png", // Replace with actual image path
      link: "/ashwin.png",
      color: "#6b8e23",
      cardType: "SQ"
    },
    {
      id: 2,
      title: "Fiona",
      description: "A princess who transforms into an ogre at night.",
      image: "/ashwin.png", // Replace with actual image path
      link: "https://en.wikipedia.org/wiki/Princess_Fiona",
      color: "#ff69b4",
      cardType: "RH"
    },
    {
      id: 3,
      title: "Shrek",
      description: "A green ogre who loves peace and quiet.",
      image: "/ashwin.png", // Replace with actual image path
      link: "https://en.wikipedia.org/wiki/Shrek",
      color: "#6b8e23",
      cardType: "RV"
    },
    {
      id: 4,
      title: "Fiona",
      description: "A princess who transforms into an ogre at night.",
      image: "/ashwin.png", // Replace with actual image path
      link: "https://en.wikipedia.org/wiki/Princess_Fiona",
      color: "#ff69b4",
      cardType: "RV"
    },
    // Add more items as needed
  ]);

  return (
    <div className="max-w-5xl mx-auto flex justify-center items-center mt-20">
      <ReactSortable 
        list={state} 
        setList={setState} 
        animation={500}
        ghostClass="sortable-item-dragging"
        chosenClass="sortable-item-dragging"
        className="grid grid-cols-2 gap-4">
        {state.map((item) => (
          <>
          <Card 
          id= {item.id}
          title= {item.id}
          description= {item.id}
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
