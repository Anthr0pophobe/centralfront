"use client";
import { useState } from "react";
import Selector from "./Selector";

const BuySellCard:  React.FC<{}> = () => {
  const items:Object[] = [{
    id:1,
    name: 'Acheter'
  },{
    id:2,
    name:'Vendre'
  }];

  const vehiculeType:Object[] = [{
    id:1,
    name:"voiture"
  },
  {
    id:2,
    name:"Utilitaire"
  },
  {
    id:3,
    name:"Moto"
  }];

  const [selected, setSelected] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<number>(1);

  return (
    <div className='flex flex-col m-6 space-y-4'>
      <div className='h-10 bg-gray-100 rounded-md flex flex-row py-4'>
            {items.map((item) => (
                <Selector
                    key={item.id}
                    item={item}
                    selected={selected}
                    onSelect={setSelected}
                />
            ))}
        </div>
      <div className='h-10 bg-gray-100 rounded-md flex flex-row'>
      {
          vehiculeType.map((item)=>(
            <Selector
                    key={item.id}
                    item={item}
                    selected={selectedType}
                    onSelect={setSelectedType}
                />
          )
        )}
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