"use client";
import { useState } from "react";

const BuySellCard:  React.FC<{}> = () => {
  const items:Object[] = [{
    id:1,
    name: 'Acheter'
  },{
    id:2,
    name:'Vendre'
  }]

  const [selected, setSelected] = useState<number>(1);

  return (
    <div className='flex flex-col m-6'>
      <div className='h-10 bg-gray-100 rounded-md flex flex-row'>
        {
          items.map((item)=>{
            let style:string
            style = selected==item.id?"m-1 flex-1 rounded-lg text-center content-center text-rose-500 bg-white":"m-1 flex-1 rounded-lg text-center content-center"
            return(
            <div 
            key={item.id}
            onClick={() => setSelected(item.id)}
            className={style}>
              {item.name}
            </div>
          )
          })
        }
      </div>
      <div>
        type vehicule
      </div>
      <div className='flex flex-row'>
        <div>marque</div>
        <div>modele</div>
      </div>
      <div className='flex flex-row'>
        <div>prix</div>
        <div>energie</div>
      </div>
      <div>
        localisation
      </div>
    </div>
  )
}

export default BuySellCard