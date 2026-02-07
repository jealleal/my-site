'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '@/app/styles/page.module.css';

interface BackgroundVideoProps {
    videoSrc: string;
    audioSrc?: string;
    muted?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
}

export default function BackgroundVideo({
    videoSrc,
    audioSrc,
    muted = false,
    autoPlay = true,
    loop = true
}: BackgroundVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (videoRef.current && autoPlay) {
            videoRef.current.play().catch(console.error);
        }
        if (audioRef.current && audioSrc && !muted) {
            const playAudio = () => {
                audioRef.current!.play()
                    .then(() => setIsPlaying(true))
                    .catch(console.error);
            };
            
            const timeout = setTimeout(playAudio, 1000);
            return () => clearTimeout(timeout);
        }
    }, [autoPlay, audioSrc, muted]);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(console.error);
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <div className={styles.video_background}>
                <video
                    ref={videoRef}
                    className={styles.background_video}
                    src={videoSrc}
                    muted={muted}
                    autoPlay={autoPlay}
                    loop={loop}
                    playsInline
                />
                <div className={styles.video_overlay} />
            </div>
            {audioSrc && (
                <>
                    <audio
                        ref={audioRef}
                        src={audioSrc}
                        loop={loop}
                        preload="auto"
                    />
                    <button className={styles.audio_toggle} onClick={toggleAudio}>
                        {isPlaying ? (
                            <svg 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                            </svg>
                        ) : (
                            <svg 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <line x1="23" y1="9" x2="17" y2="15" />
                                <line x1="17" y1="9" x2="23" y2="15" />
                            </svg>
                        )}
                    </button>
                </>
            )}
        </>
    );
}
