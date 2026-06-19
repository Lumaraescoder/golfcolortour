import __stayListing from "./jsons/__stayListing.json";
import __carsListing from "./jsons/__carsListing.json";
import __experiencesListing from "./jsons/__experiencesListing.json";
import {
  DEMO_STAY_CATEGORIES,
  DEMO_EXPERIENCES_CATEGORIES,
} from "./taxonomies";
import { CarDataType, ExperiencesDataType, StayDataType } from "./types";
import { DEMO_AUTHORS } from "./authors";
import car1 from "@/images/cars/1.png";
import car2 from "@/images/cars/2.png";
import car3 from "@/images/cars/3.png";
import car4 from "@/images/cars/4.png";
import car5 from "@/images/cars/5.png";
import car6 from "@/images/cars/6.png";
import car7 from "@/images/cars/7.png";
import car8 from "@/images/cars/8.png";
import car9 from "@/images/cars/9.png";
import car10 from "@/images/cars/10.png";
import car11 from "@/images/cars/11.png";
import car12 from "@/images/cars/12.png";
import car13 from "@/images/cars/13.png";
import car14 from "@/images/cars/14.png";
import car15 from "@/images/cars/15.png";
import car16 from "@/images/cars/16.png";
import { Route } from "@/routers/types";
const carsImgs = [
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
  car8,
  car9,
  car10,
  car11,
  car12,
  car13,
  car14,
  car15,
  car16,
];

// guide images
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

const GUIDES = {
  alfama: [alfama1, gracaalfama, lucaspanteaoalfama],
  chiado: [lucaseospessoalchiado, lucasebrasileiros, lindafoto],
  belem: [belemtour, belem2, belem3, torrebelem],
  "full day": [belemefullday, miradouro],
  miradouros: [miradouro, miradouroalfama, miradouronossasenhora],
  christmas: [linda2, meninas, pessoas],
  sintra: [pessoas_notuk, fotosnotuk, lucasebrasileiros],
  fatima: [panteaonacional, pracadocomercio, panteao_alfama],
  default: [alfama1],
};

function findGuideImagesForPost(title: string, href: string) {
  const t = (title || "").toLowerCase();
  const h = (href || "").toLowerCase();

  if (t.includes("alfama") || h.includes("alfama")) return GUIDES.alfama;
  if (t.includes("chiado") || t.includes("bairro") || h.includes("chiado") || h.includes("bairro")) return GUIDES.chiado;
  if (t.includes("belém") || t.includes("belem") || h.includes("belem")) return GUIDES.belem;
  if (t.includes("full day") || t.includes("full-day") || h.includes("full-day")) return GUIDES["full day"];
  if (t.includes("miradouros") || t.includes("viewpoints") || h.includes("miradouros")) return GUIDES.miradouros;
  if (t.includes("christmas") || t.includes("lights")) return GUIDES.christmas;
  if (t.includes("sintra") || t.includes("cascais")) return GUIDES.sintra;
  if (t.includes("fatima") || t.includes("nazare") || t.includes("obidos")) return GUIDES.fatima;
  return GUIDES.default;
}

const DEMO_STAY_LISTINGS = __stayListing.map((post, index): StayDataType => {
  //  ##########  GET CATEGORY BY CAT ID ######## //
  const category = DEMO_STAY_CATEGORIES.filter(
    (taxonomy) => taxonomy.id === post.listingCategoryId
  )[0];

  const guideImgs = findGuideImagesForPost(post.title, post.href || "");
  // merge guide images with object's gallery images, remove duplicates and filter out remote URLs
  const originalImgs = Array.isArray(post.galleryImgs) ? post.galleryImgs : [];
  const mergedRaw = [...guideImgs, ...originalImgs].filter((v, i, a) => a.indexOf(v) === i);
  const merged = mergedRaw.filter((img) => {
    if (typeof img === "string") {
      return !/^https?:\/\//i.test(img);
    }
    return true; // keep imported StaticImageData
  });
  // fallback: if merged is empty, keep guideImgs
  const finalGallery = merged.length ? merged : guideImgs;
  const featured = guideImgs[0] || (post.featuredImage && typeof post.featuredImage === "string" && !/^https?:\/\//i.test(post.featuredImage) ? post.featuredImage : undefined);
  return {
    ...post,
    id: `stayListing_${index}_`,
    featuredImage: featured,
    galleryImgs: finalGallery,
    saleOff: !index ? "-20% today" : post.saleOff,
    isAds: !index ? true : post.isAds,
    author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
    listingCategory: category,
    href: post.href as Route,
  };
});

const DEMO_EXPERIENCES_LISTINGS = __experiencesListing.map(
  (post, index): ExperiencesDataType => {
    //  ##########  GET CATEGORY BY CAT ID ######## //
    const category = DEMO_EXPERIENCES_CATEGORIES.filter(
      (taxonomy) => taxonomy.id === post.listingCategoryId
    )[0];

    const guideImgs = findGuideImagesForPost(post.title, post.href || "");
    const originalImgs = Array.isArray(post.galleryImgs) ? post.galleryImgs : [];
    const mergedRaw = [...guideImgs, ...originalImgs].filter((v, i, a) => a.indexOf(v) === i);
    const merged = mergedRaw.filter((img) => {
      if (typeof img === "string") {
        return !/^https?:\/\//i.test(img);
      }
      return true;
    });
    const finalGallery = merged.length ? merged : guideImgs;
    const featured = guideImgs[0] || (post.featuredImage && typeof post.featuredImage === "string" && !/^https?:\/\//i.test(post.featuredImage) ? post.featuredImage : undefined);
    return {
      ...post,
      id: `experiencesListing_${index}_`,
      featuredImage: featured,
      galleryImgs: finalGallery,
      saleOff: !index ? "-20% today" : post.saleOff,
      isAds: !index ? true : post.isAds,
      author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
      listingCategory: category,
      href: post.href as Route,
    };
  }
);

const DEMO_CAR_LISTINGS = __carsListing.map((post, index): CarDataType => {
  //  ##########  GET CATEGORY BY CAT ID ######## //
  const category = DEMO_EXPERIENCES_CATEGORIES.filter(
    (taxonomy) => taxonomy.id === post.listingCategoryId
  )[0];

  return {
    ...post,
    id: `carsListing_${index}_`,
    saleOff: !index ? "-20% today" : post.saleOff,
    isAds: !index ? true : post.isAds,
    author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
    listingCategory: category,
    featuredImage: carsImgs[index],
    href: post.href as Route,
  };
});

export { DEMO_STAY_LISTINGS, DEMO_EXPERIENCES_LISTINGS, DEMO_CAR_LISTINGS };
