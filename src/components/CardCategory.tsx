import { SousCategorie } from "@/types/header";
import { Card, CardContent } from "@mui/material";

const CardCategory: React.FC<{sousCategorie:SousCategorie[]}> = ({sousCategorie}) => {
  return (
    <Card sx={{minWidth: 275}} className="absolute top-16">
      <CardContent>
        <div>
          {/* partie gauche 1/3+- avec la liste des sous cat */}
          {sousCategorie.map((elem) => (
          <p key={elem.id} className="text-black font-medium">
            {/* <a href={elem.link} className="hover:underline"> */}
              {elem.name}
            {/* </a> */}
          </p>
        ))}
        </div>
      
      </CardContent>
    </Card>
  )
}

export default CardCategory