'use client';
import { useEffect, useRef, useState } from 'react';
import { useMusic } from '@/contexts/MusicContext';
export default function BackgroundMusic() {
  const { audioRef: contextAudioRef, isPlaying, setIsPlaying } = useMusic();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [song] = useState(() => Math.random() < 0.01 ? '/song1.wav' : '/song2.mp3');
  const [volume, setVolume] = useState(0.2);
  const hasStarted = useRef(false);
  useEffect(() => {
    if (contextAudioRef && audioRef.current) {
      (contextAudioRef as React.MutableRefObject<HTMLAudioElement>).current = audioRef.current;
    }
  }, [contextAudioRef]);
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && !hasStarted.current) {
      audio.volume = volume;
      audio.currentTime = 42;
      audio.loop = true;
      hasStarted.current = true;
      const playAudio = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (err) {
          document.addEventListener('click', () => {
            audio.play();
            setIsPlaying(true);
          }, { once: true });
        }
      };
      playAudio();
    }
  }, [volume, setIsPlaying]);
  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };
  return (
    <>
      <audio ref={audioRef} src={song} loop />
      <div className="music-controls">
        <button onClick={togglePlay} className="control-button">
          {isPlaying ? 'pause' : 'play'}
        </button>
        <div className="volume-control">
          <span className="volume-icon">🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </div>
    </>
  );
}
