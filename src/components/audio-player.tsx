'use client';

import { useState, useRef, useEffect } from 'react';
import {
  RiPlayFill,
  RiPauseFill,
  RiLoader4Line,
  RiLoader2Line,
  RiLoaderLine,
  RiLoader5Line,
  RiPauseLine,
  RiPauseCircleLine,
  RiPlayCircleLine,
  RiPauseCircleFill,
} from '@remixicon/react';
import styles from './audio-player.module.scss';

interface AudioPlayerProps {
  href: string;
  title: string;
  subtitle: string;
}

// Global set to track all audio elements
const allAudioElements = new Set<HTMLAudioElement>();

export default function AudioPlayer({ href, title, subtitle }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Pause all other audio elements
        allAudioElements.forEach((audio) => {
          if (audio !== audioRef.current) {
            audio.pause();
          }
        });

        setIsLoading(true);
        audioRef.current.play();
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Register this audio element
    allAudioElements.add(audio);

    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      // Unregister this audio element
      allAudioElements.delete(audio);

      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <div className={styles.audioPlayer}>
      <button onClick={togglePlayPause} className={styles.playButton}>
        <span className={styles.iconContainer}>
          {isLoading ? (
            <RiLoader5Line size={20} className={styles.spinner} />
          ) : isPlaying ? (
            <RiPauseCircleFill size={20} />
          ) : (
            <RiPlayCircleLine size={20} />
          )}
        </span>
        <span className={styles.titleContainer}>
          <span className={styles.desktop}>
            {title} | {subtitle}
          </span>
          <span className={styles.mobile}>
            {title}
            <br />
            <small>{subtitle}</small>
          </span>
        </span>
      </button>
      <audio ref={audioRef} src={href} preload="metadata" />
    </div>
  );
}
