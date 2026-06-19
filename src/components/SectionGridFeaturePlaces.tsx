import React, { FC, ReactNode } from "react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "./StayCard";
import StayCard2 from "./StayCard2";
import alemaesgenteboa from "@/images/guides/alemaesgenteboa.jpeg";
import alfama1 from "@/images/guides/alfama1.jpeg";
import alfamase from "@/images/guides/alfamase.jpeg";
import belem2 from "@/images/guides/belem2.jpeg";
import belem3 from "@/images/guides/belem3.jpeg";
import belemefullday from "@/images/guides/belemefullday.jpeg";
import belemtour from "@/images/guides/belemtour.jpeg";
import fotosnotuk from "@/images/guides/fotosnotuk.jpeg";
import gatasuk from "@/images/guides/gatasuk.jpeg";
import gracaalfama from "@/images/guides/graçaalfama.jpeg";
import igrejaalfama from "@/images/guides/igrejaalfama.jpeg";
import linda2 from "@/images/guides/linda2.jpeg";
import lindafoto from "@/images/guides/lindafoto.jpeg";
import lucasebrasileiros from "@/images/guides/lucasebrasileiros.jpeg";
import lucaseospessoalchiado from "@/images/guides/lucaseospessoalchiado.jpeg";
import lucaspanteaoalfama from "@/images/guides/lucaspanteaoalfama.jpeg";
import meninas from "@/images/guides/meninas.jpeg";
import miardouronosassenhoera from "@/images/guides/miardouronosassenhoera.jpeg";
import miradouro from "@/images/guides/miradouro.jpeg";
import miradouroalfama from "@/images/guides/miradouroalfama.jpeg";
import miradouronossasenhora from "@/images/guides/miradouronossasenhora.jpeg";
import miradouronossasenhotra from "@/images/guides/miradouronossasenhotra.jpeg";
import panteao_alfama from "@/images/guides/panteao alfama.jpeg";
import panteaonacional from "@/images/guides/panteaonacional.jpeg";
import pessoas_notuk from "@/images/guides/pessoas notuk.jpeg";
import pessoas from "@/images/guides/pessoas.jpeg";
import pracadocomercio from "@/images/guides/praçadocomercio.jpeg";
import torrebelem from "@/images/guides/torrebelem.jpeg";

const GUIDES_IMAGES = [
  alemaesgenteboa,
  alfama1,
  alfamase,
  belem2,
  belem3,
  belemefullday,
  belemtour,
  fotosnotuk,
  gatasuk,
  gracaalfama,
  igrejaalfama,
  linda2,
  lindafoto,
  lucasebrasileiros,
  lucaseospessoalchiado,
  lucaspanteaoalfama,
  meninas,
  miardouronosassenhoera,
  miradouro,
  miradouroalfama,
  miradouronossasenhora,
  miradouronossasenhotra,
  panteao_alfama,
  panteaonacional,
  pessoas_notuk,
  pessoas,
  pracadocomercio,
  torrebelem,
];

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

//
export interface SectionGridFeaturePlacesProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
  cardType?: "card1" | "card2";
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
  stayListings = DEMO_DATA,
  gridClass = "",
  heading = "Featured tours",
  subHeading,
  headingIsCenter,
  tabs = [],
  cardType = "card2",
}) => {
  const renderCard = (stay: StayDataType, idx: number) => {
    let CardName = StayCard;
    switch (cardType) {
      case "card1":
        CardName = StayCard;
        break;
      case "card2":
        CardName = StayCard2;
        break;

      default:
        CardName = StayCard;
    }

    const img = GUIDES_IMAGES[idx % GUIDES_IMAGES.length];
    const newData = { ...stay, galleryImgs: [img] } as StayDataType;
    return <CardName key={stay.id} data={newData} />;
  };

  return (
    <div className="nc-SectionGridFeaturePlaces relative">
      <HeaderFilter tabActive={"New York"} subHeading={subHeading} tabs={tabs} heading={heading} showViewAll={false} />
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {stayListings.map((stay, idx) => renderCard(stay, idx))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        {/* <ButtonPrimary loading>Show me more</ButtonPrimary> */}
      </div>
    </div>
  );
};

export default SectionGridFeaturePlaces;
