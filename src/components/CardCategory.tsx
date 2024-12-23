import { SousCategorie } from "@/types/header";
import { Card, CardContent } from "@mui/material";
import Image from 'next/image'

const CardCategory: React.FC<{sousCategorie:SousCategorie[]}> = ({sousCategorie}) => {
  return (
    <Card sx={{ minWidth: 275 }} className="absolute top-16">
    <CardContent>
      <div className="flex-1 grid grid-cols-3 gap-4 divide-x">
        {/* Partie gauche (1/3) */}
        <div className="flex space-y-4 flex-col">
          {sousCategorie.map((elem) => (
            <div key={elem.id} className="hover:bg-slate-100 p-1">
              <p className="text-black font-semibold">{elem.name}</p>
            </div>
          ))}
        </div>

        {/* Partie droite (2/3) */}
        <div className="col-span-2 flex flex-col space-y-4">
          {sousCategorie.map((elem) =>
            Array.isArray(elem.container) ? (
              elem.container.map((sub) => (
                <div key={sub.id} className="mb-4">
                  <h3 className="text-gray-700 font-semibold">{sub.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {sub.names.map((name, idx) => (
                      <p key={idx} className="text-gray-500">
                        {name}
                      </p>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p key={elem.id} className="text-gray-500">
                {/* Affiche un message ou une image si le container est une chaîne */}
                Aucun contenu disponible
              </p>
            )
          )}
        </div>
      </div>
    </CardContent>
  </Card>
  )
}

export default CardCategory