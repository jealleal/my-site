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
                    <button 
                        className={styles.audio_toggle}
                        onClick={toggleAudio}
                        aria-label={isPlaying ? "Выключить звук" : "Включить звук"}
                    >
                        {isPlaying ? "🔊" : "🔈"}
                    </button>
                </>
            )}
        </>
    );
}
