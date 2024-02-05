import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
<<<<<<< HEAD
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
=======
import { Card, CardContent }  from "@/app/_components/ui/card"
import { Barbershop } from "@prisma/client"
>>>>>>> d354d8fe9e091d7ef400b4ce549d50d050623c4d
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopItemProps {
<<<<<<< HEAD
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-1 py-1">
        <div className="relative h-[159px] w-full">
          <div className="absolute top-2 left-2 z-20">
            <Badge
              variant="secondary"
              className="opacity-85 flex gap-1 items-center"
            >
              <StarIcon size={12} className="fill-primary text-primary" />
              <span className="text-xs">5,0</span>
            </Badge>
          </div>
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            style={{
              objectFit: "cover",
            }}
            fill
            className="rounded-2xl"
          />
        </div>

        <div className="px-1 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button className="w-full mt-3" variant="secondary">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
=======
    barbershop: Barbershop;
}

const BarbershopItem = ({barbershop}: BarbershopItemProps) => {    
    return ( 
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="p-1 py-0">
                <div className="relative h-[159px] w-full">
                <div className="absolute top-2 left-2 z-20">
                    <Badge variant="secondary" className="opacity-85 flex gap-1 items-center">
                    <StarIcon size={12} className="fill-primary text-primary"/>
                    <span className="text-xs">5,0</span>
                </Badge>
                </div>
                <Image 
                    src={barbershop.imageUrl}
                    alt={barbershop.name}
                    style={{
                        objectFit: "cover"
                    }}
                    fill
                    className=" rounded-2xl"
                />
                </div>

                <div className="px-1 pb-3">
                <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                <Button className="w-full mt-3" variant="secondary">Reservar</Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default BarbershopItem;
>>>>>>> d354d8fe9e091d7ef400b4ce549d50d050623c4d
