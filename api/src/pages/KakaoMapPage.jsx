import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useKakaoLoader from "../hooks/useKakaoLoader.js";

const MapBox = styled.div`
  width: 100%;
  height: 400px;
`;

const KakaoMap = () => {
  const mapRef = useRef(null);
  useKakaoLoader();

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        const map = new window.kakao.maps.Map(mapRef.current, {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        });

        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(37.5665, 126.978),
        });

        marker.setMap(map);
      });
    }
  }, []);

  return <MapBox ref={mapRef} />;
};

export default KakaoMap;
