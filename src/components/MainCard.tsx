import { Card } from "@mui/material"
import Image from "next/image"
import BuySellCard from "./BuySellCard"

const MainCard: React.FC<{}> = () => {
  return (
    <div className='mx-16 p-8 flex flex-row bg-gray-100'>
      <div className="flex-{2} flex flex-col bg-red-500">
        <Card className="w-96">
          <BuySellCard/>
        </Card>
      </div>
      <div className="flex-{2} flex flex-col mx-16 font-semibold text-3xl justify-center">
        <h1 className="text-center">
        Nous sélectionnons les meilleures voitures d'occasion pour vous.
        </h1>
        <div className="flex-1 flex justify-center">
          <Image
          src="https://www.lacentrale.fr/fragments/recherche-fragment-front/media/claims_landing_search_desktop.f6de0204.png"
          alt='mainImage'
          width={696}
          height={265}
          />
        </div>
      </div>
    </div>
  )
}

export default MainCard