import __stayListing from "./jsons/__stayListing.json";
import __carsListing from "./jsons/__carsListing.json";
import __experiencesListing from "./jsons/__experiencesListing.json";
import {
  DEMO_STAY_CATEGORIES,
  DEMO_EXPERIENCES_CATEGORIES,
} from "./taxonomies";
import { TOUR_IMAGES_MAP } from "./tourImages";
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

// NOTE: Guided image heuristics removed. Use explicit `gallery` on each post.

const DEMO_STAY_LISTINGS = __stayListing.map((post, index): StayDataType => {
  //  ##########  GET CATEGORY BY CAT ID ######## //
  const category = DEMO_STAY_CATEGORIES.filter(
    (taxonomy) => taxonomy.id === post.listingCategoryId
  )[0];

  // Build gallery objects for this post.
  // Support structured `gallery` in JSON: [{ id, image, alt }]
  // or legacy `galleryImgs` (array of strings).
  const structured = Array.isArray((post as any).gallery) ? (post as any).gallery : null;
  const galleryObjs = structured
    ? (structured as any[]).map((g) => ({ src: g.image || g.src || g, alt: g.alt || "" }))
    : Array.isArray(post.galleryImgs)
      ? (post.galleryImgs as any[]).map((g) => {
        // try to resolve legacy string path to imported image
        if (typeof g === "string") {
          const parts = g.split("/");
          const filename = parts[parts.length - 1];
          const folder = parts.length > 1 ? parts[parts.length - 2] : null;
          if (folder && TOUR_IMAGES_MAP[`${folder}/${filename}`]) {
            return { src: TOUR_IMAGES_MAP[`${folder}/${filename}`], alt: "" };
          }
          if (TOUR_IMAGES_MAP[filename]) {
            return { src: TOUR_IMAGES_MAP[filename], alt: "" };
          }
        }
        return { src: g, alt: "" };
      })
      : [];

  const featured = (post.featuredImage && typeof post.featuredImage === "string" && !/^https?:\/\//i.test(post.featuredImage))
    ? post.featuredImage
    : undefined;

  return {
    ...post,
    id: `stayListing_${index}_`,
    featuredImage: featured,
    // canonical gallery of objects
    gallery: galleryObjs,
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

    // Build gallery objects from structured gallery or legacy galleryImgs
    const structured = Array.isArray((post as any).gallery) ? (post as any).gallery : null;
    const galleryObjs = structured
      ? (structured as any[]).map((g) => ({ src: g.image || g.src || g, alt: g.alt || "" }))
      : Array.isArray(post.galleryImgs)
        ? (post.galleryImgs as any[]).map((g) => {
          if (typeof g === "string") {
            const parts = g.split("/");
            const filename = parts[parts.length - 1];
            const folder = parts.length > 1 ? parts[parts.length - 2] : null;
            if (folder && TOUR_IMAGES_MAP[`${folder}/${filename}`]) {
              return { src: TOUR_IMAGES_MAP[`${folder}/${filename}`], alt: "" };
            }
            if (TOUR_IMAGES_MAP[filename]) {
              return { src: TOUR_IMAGES_MAP[filename], alt: "" };
            }
          }
          return { src: g, alt: "" };
        })
        : [];

    const featured = (post.featuredImage && typeof post.featuredImage === "string" && !/^https?:\/\//i.test(post.featuredImage))
      ? post.featuredImage
      : undefined;

    return {
      ...post,
      id: `experiencesListing_${index}_`,
      featuredImage: featured,
      gallery: galleryObjs,
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
