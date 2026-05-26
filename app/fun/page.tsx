'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useMusic } from '@/contexts/MusicContext';
export default function Video67() {
    const { pauseMusic, resumeMusic } = useMusic();
    useEffect(() => {
        pauseMusic();
        return () => {
            resumeMusic();
        };
    }, [pauseMusic, resumeMusic]);
    return (
            <div className="page-container">
                <Link href="/" className="back-arrow">
                    ←
                </Link>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' }}>
                    <video controls autoPlay style={{ maxWidth: '90vw', maxHeight: '70vh', border: '2px solid #fff' }}>
                        <source src="/fun%20video.mp4" type="video/mp4" />
                    </video>
                    <p style={{ color: '#888', marginTop: '1rem', textAlign: 'center', fontSize: '18px' }}>fun video.mp4</p>
                </div>
            </div>
    );
}
