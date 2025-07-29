import { useEffect } from "react";

const useKakaoLoader = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=625d523b05271240eef452e833c69ccd&autoload=false";
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        console.log("Kakao SDK loaded");
      });
    };

    document.head.appendChild(script);
  }, []);
};

export default useKakaoLoader;
