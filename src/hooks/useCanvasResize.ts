import { useEffect } from "react";

interface UseCanvasResizeProps {
  dimensions: any;
  setDimensions: any;
}
const useCanvasResize = ({ setDimensions }: UseCanvasResizeProps) => {
  // Firstly, grab the user's screen to set canvas width and height
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
};

export default useCanvasResize;
