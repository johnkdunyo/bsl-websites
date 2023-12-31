import {
  CSSProperties,
  FC,
  PropsWithChildren,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaAngleUp } from "react-icons/fa";

interface AnimateInProps
  extends PropsWithChildren<{
    from: CSSProperties;
    to: CSSProperties;
    className?: string;
  }> {}

function useElementOnScreen(ref: RefObject<Element>, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

const AnimateIn: FC<AnimateInProps> = ({ from, to, className, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: CSSProperties = {
    transition: "600ms ease-in-out",
  };
  return (
    <div
      className={className}
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...to,
            }
          : {
              ...defaultStyles,
              ...from,
            }
      }
    >
      {children}
    </div>
  );
};

const FadeIn: FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => (
  <AnimateIn className={className} from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {children}
  </AnimateIn>
);

const FadeUp: FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => (
  <AnimateIn
    className={className}
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
  >
    {children}
  </AnimateIn>
);

const ScaleIn: FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => (
  <AnimateIn className={className} from={{ scale: "0" }} to={{ scale: "1" }}>
    {children}
  </AnimateIn>
);

export const Animate = {
  FadeIn,
  FadeUp,
  ScaleIn,
};

// scrollToTop
export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // changing the showTopBtn state whenever a scroll event happens
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  // fucntion to help scroll to top smoothly
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
      )}
    </div>
  );
};
