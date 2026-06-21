"use client";

import BackgroundSection from "@/components/BackgroundSection";
import ListingImageGallery from "@/components/listing-image-gallery/ListingImageGallery";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";
import { DEMO_STAY_LISTINGS, DEMO_EXPERIENCES_LISTINGS, DEMO_CAR_LISTINGS } from "@/data/listings";
import { Route } from "next";

const DetailtLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const thisPathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");

  const handleCloseModalImageGallery = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete("modal");
    router.push(`${thisPathname}/?${params.toString()}` as Route);
  };

  const getImageGalleryListing = () => {
    const segments = thisPathname?.split("/").filter(Boolean) || [];
    const last = segments[segments.length - 1] || "";

    const findItem = (all: any[]) => {
      // last may contain id or id-slug
      const id = last;
      return all.find((it) => {
        const href = (it.href || "").toString();
        if (!id) return false;
        if (href.endsWith(`/${id}`)) return true;
        if (href.includes(`/${id}-`)) return true;
        if (href.includes(`/${id}`)) return true;
        return false;
      });
    };

    if (thisPathname?.includes("/listing-stay-detail")) {
      const item = findItem(DEMO_STAY_LISTINGS as any);
      if (item?.gallery && Array.isArray(item.gallery)) {
        return item.gallery.map((g: any, i: number) => ({ id: i, url: g.src }));
      }
      return [];
    }
    if (thisPathname?.includes("/listing-car-detail")) {
      const item = findItem(DEMO_CAR_LISTINGS as any);
      if (item?.gallery && Array.isArray(item.gallery)) {
        return item.gallery.map((g: any, i: number) => ({ id: i, url: g.src }));
      }
      return [];
    }
    if (thisPathname?.includes("/listing-experiences-detail")) {
      // search across experiences, stays and cars combined (same logic as detail page)
      const all = [...DEMO_EXPERIENCES_LISTINGS, ...DEMO_STAY_LISTINGS, ...DEMO_CAR_LISTINGS];
      const item = findItem(all as any);
      if (item?.gallery && Array.isArray(item.gallery)) {
        return item.gallery.map((g: any, i: number) => ({ id: i, url: g.src }));
      }
      return [];
    }

    return [];
  };

  return (
    <div className="ListingDetailPage">
      <ListingImageGallery
        isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
        onClose={handleCloseModalImageGallery}
        images={getImageGalleryListing()}
      />

      <div className="container ListingDetailPage__content">{children}</div>

      {/* OTHER SECTION removed: categories slider and newsletter intentionally omitted */}

      {/* STICKY FOOTER MOBILE removed */}
    </div>
  );
};

export default DetailtLayout;
