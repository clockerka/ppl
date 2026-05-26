'use client';
import { createContext, useContext, useRef, useState, useEffect, ReactNode } from 'react';
interface MusicContextType {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  pauseMusic: () => void;
  resumeMusic: () => void;
}
const MusicContext = createContext<MusicContextType>({
  audioRef: { current: null },
  isPlaying: false,
  setIsPlaying: () => {},
  pauseMusic: () => {},
  resumeMusic: () => {},
});
export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const pauseMusic = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  const resumeMusic = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <MusicContext.Provider value={{ audioRef, isPlaying, setIsPlaying, pauseMusic, resumeMusic }}>
      {children}
    </MusicContext.Provider>
  );
}
export function useMusic() {
  return useContext(MusicContext);
}
