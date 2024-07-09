import { useEffect, useRef } from 'react';
import * as S from './styles'

type VideoProps = {
  src: string;
}

const BannerVideo = ({ src }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {      
    if(audioRef.current) {
      audioRef.current.play();
    } 
  }, []);

  return (
    <>
      <S.Video ref={videoRef} autoPlay muted width="100%" height="1080">
        <source src={src} type="video/mp4" />
      </S.Video>
      <audio ref={audioRef} autoPlay controls={false}>
        <source src="/audios/car_starting.m4a" type="audio/m4a" />
      </audio>
    </>
  );
};

export default BannerVideo;
