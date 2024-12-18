"use client";
import { useState } from "react";
import CardCategory from "./CardCategory";
import { Categorie } from "@/types/header";

const Header: React.FC<{}> = () => {
  const menu:Categorie[] = [
    {
      id: 1,
      name: 'Acheter',
      link: '/acheter',
      sousCategorie:[
        {
          id: 1,
          name: 'Voitures Occasion',
          link: '/occasionsvoitures',
          array: undefined
        },
        {
          id: 2,
          name: 'Motos Occasion',
          link: '/occasionsmoto',
          array: undefined
        },

      ]
    },
    {
      id: 2,
      name: 'Vendre',
      link: '/vendre',
      sousCategorie:[]
    },
  ];

  const [hidden, setHidden] = useState<number | null>(null);

  return (
    <div className='bg-slate-100 shadow-md h-16 flex'>
      <div className='flex-1 flex mx-32 '>
        <div className='flex items-center'>
          <h1 className='text-rose-500 font-bold text-3xl'>
            la centrale
          </h1>
          <div className='flex ml-4 space-x-4'>
            {
              menu.map((categorie)=>{
                return(
                  <>
                  <div
                  className="py-6"
                  key={categorie.id}
                  onMouseEnter={() => setHidden(categorie.id)}
                  onMouseLeave={() => setHidden(null)}
                >
                  <h1 key={categorie.id} 
                  className={
                    categorie.id==1?
                    'text-rose-500 font-bold text-l':
                    'text-black font-bold text-l'
                  }>
                    {categorie.name}
                  </h1>
                  {hidden=== categorie.id && <CardCategory sousCategorie={categorie.sousCategorie}/>}
                </div>
                </>
                )
              })
            }
          </div>
        </div>
    {/* 4 boutes qui contiens des sous menus */}
      </div>
    </div>
  )
}

export default Header

