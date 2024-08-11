import { useAppSelector } from "@redux/hooks";
import { useContext, useEffect } from "react";
import { RefContext } from "../contexts/context";

export function useLoaderAnimation() {
  const { loaderRef } = useContext(RefContext);
  const isLoading = useAppSelector((state) => state.loader.isLoading);

  const loaderAnimation = () => {
    useEffect(() => {
      if (loaderRef.current) {
        if (isLoading) {
          gsap.to(loaderRef.current, {
            duration: 0.2,
            y: 0,
            top: 0,
            ease: "power3.out",
          });
        }
      }
    });
  };

  return { loaderAnimation };
}
