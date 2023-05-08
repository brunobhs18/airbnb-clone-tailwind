'use client';

import Container from "../Container";

import { IoDiamond } from "react-icons/io5";
import { BsSnow } from "react-icons/bs";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiWindmill, GiIsland, GiBoatFishing, GiCastle, GiForestCamp, GiCaveEntrance, GiCactus, GiBarn } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: 'Praia',
        icon: TbBeach,
        description: 'Esta propriedade fica próxima da praia!'
    },
    {
        label: 'Moinho de Vento',
        icon: GiWindmill,
        description: 'Esta propriedade fica próxima de moinhos de vento!'
    },
    {
        label: 'Moderna',
        icon: MdOutlineVilla,
        description: 'Esta propriedade é moderna!'
    },
    {
        label: 'Campo',
        icon: TbMountain,
        description: 'Esta propriedade é no campo!'
    },
    {
        label: 'Piscinas',
        icon: TbPool,
        description: 'Esta propriedade tem piscina!'
    },
    {
        label: 'Ilhas',
        icon: GiIsland,
        description: 'Esta propriedade é em uma ilha!'
    },
    {
        label: 'Lagos',
        icon: GiBoatFishing,
        description: 'Esta propriedade é próxima de um lago!'
    },
    {
        label: 'Esquiando',
        icon: FaSkiing,
        description: 'Esta propriedade tem atividades de ski!'
    },
    {
        label: 'Castelos',
        icon: GiCastle,
        description: 'Esta propriedade é em um castelo!'
    },
    {
        label: 'Acampamento',
        icon: GiForestCamp,
        description: 'Esta propriedade é para atividades de acampamento!'
    },
    {
        label: 'Artico',
        icon: BsSnow,
        description: 'Esta propriedade é proxima de geleiras!'
    },
    {
        label: 'Cavernas',
        icon: GiCaveEntrance,
        description: 'Esta propriedade é proxima de cavernas!'
    },
    {
        label: 'Deserto',
        icon: GiCactus,
        description: 'Esta propriedade é no deserto!'
    },
    {
        label: 'Celeiro',
        icon: GiBarn,
        description: 'Esta propriedade tem celeiros!'
    },
    {
        label: 'Luxo',
        icon: IoDiamond,
        description: 'Esta propriedade é luxuosa!'
    },
]


const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname == '/';

    if(!isMainPage) {
        return null;
    }

    return(
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) => 
                    <CategoryBox 
                        key={item.label}
                        label={item.label}
                        selected={category == item.label}
                        icon={item.icon}
                    />)}
            </div>
        </Container>
    )
}

export default Categories;