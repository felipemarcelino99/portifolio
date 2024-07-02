import { useEffect, useRef } from 'react';
import * as S from './styles'

type VideoProps = {
  pauseAfterSeconds?: number;
  src: string;
}

const BannerVideo = ({ pauseAfterSeconds, src }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (pauseAfterSeconds && videoRef.current) {
      const videoElement = videoRef.current;
      const timeout = setTimeout(() => {
        
        videoElement.pause();
        
        // if(audioRef.current) {
        //   audioRef.current.pause();
        // }
        
      }, pauseAfterSeconds * 1000);

      return () => clearTimeout(timeout);
    }
  }, [pauseAfterSeconds]);

  return (
    <>
      <S.Video ref={videoRef} autoPlay muted width="100%" height="1080">
        <source src={src} type="video/mp4" />
      </S.Video>
      <audio ref={audioRef} autoPlay controls={false}>
        <source src="/audios/car_starting.m4a" type="audio/mp4" />
      </audio>
    </>
  );
};

export default BannerVideo;
