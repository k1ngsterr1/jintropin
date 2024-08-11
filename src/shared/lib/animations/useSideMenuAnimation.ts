import { useEffect, useContext } from "react";
import { RefContext } from "../contexts/context";
import { useAppSelector } from "@redux/hooks";
import gsap from "gsap";

export function useSideMenuAnimation() {
  const { sideMenuRef } = useContext(RefContext);
  const isOpen = useAppSelector((state) => state.sideMenu.isOpen);

  const sideMenuAnimation = () => {
    useEffect(() => {
      if (sideMenuRef.current) {
        const links = sideMenuRef.current.querySelectorAll("a");

        if (isOpen) {
          gsap.to(sideMenuRef.current, {
            duration: 0.5,
            x: 0,
            right: 0,
            ease: "power3.out",
          });
          gsap.fromTo(
            links,
            { x: 500, opacity: 0 },
            {
              duration: 0.5,
              x: 0,
              opacity: 1,
              stagger: 0.1,
              delay: 0.1,
              ease: "power3.out",
            }
          );
        } else {
          gsap.to(sideMenuRef.current, {
            duration: 0.5,
            x: "500%",
            ease: "power3.in",
          });

          gsap.to(links, {
            duration: 0.3,
            y: 20,
            opacity: 0,
            stagger: 0.05,
            ease: "power3.in",
          });
        }
      }
    }, [isOpen, sideMenuRef]);
  };

  return { sideMenuAnimation };
}
