'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useMusic } from '@/contexts/MusicContext';
export default function About() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showFunVideoModal, setShowFunVideoModal] = useState(false);
  const { pauseMusic, resumeMusic } = useMusic();
  useEffect(() => {
    if (showVideoModal || showFunVideoModal) {
      pauseMusic();
    } else {
      resumeMusic();
    }
  }, [showVideoModal, showFunVideoModal, pauseMusic, resumeMusic]);
  return (
    <div className="page-container">
      <Link href="/" className="back-arrow">
        ←
      </Link>
      <div className="about-content">
        <h1 className="contact-title">о проекте ppl corporation</h1>
        <p>
          ну тип проект такой, ppl corporation. у нас есть кстати{' '}
          <a href="https://t.me/pplcorporation" className="link" target="_blank" rel="noopener noreferrer">
            телеграм канал
          </a>
          .
        </p>
        <p>
          в состав нашего привилегированного объединения входят очень успешные и состоявшиеся люди: Илья Игнатьев, Илья Кудрявцев и Милосердов Максим.
        </p>
        <p>
          наш любимый мессенджер - МАКС! СКАЧАЙ МАКС!{' '}
          <Link href="/max" className="link">
            наш канал в максе
          </Link>
        </p>
        <p>
          <button onClick={() => setShowVideoModal(true)} className="link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            СЮДА НЕ ТЫКАТЬ
          </button>{' '}
        </p>
        <p>
          <button onClick={() => setShowPhotoModal(true)} className="link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            да и сюда в принципе тоже не стоит
          </button>{' '}
        </p>
        <p>
          <button onClick={() => setShowFunVideoModal(true)} className="link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            fun video.mp4
          </button>{' '}
        </p>
      </div>
      {showVideoModal && (
        <div className="modal-overlay" onClick={() => setShowVideoModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowVideoModal(false)}>×</button>
            <video controls autoPlay style={{ maxWidth: '100%', maxHeight: '70vh' }}>
              <source src="/67.mp4" type="video/mp4" />
            </video>
            <p style={{ color: '#888', marginTop: '1rem', textAlign: 'center' }}>а мы же предупреждали...</p>
          </div>
        </div>
      )}
      {showPhotoModal && (
        <div className="modal-overlay" onClick={() => setShowPhotoModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPhotoModal(false)}>×</button>
            <img src="/photo1.png" alt="" style={{ maxWidth: '100%', maxHeight: '70vh' }} />
            <p style={{ color: '#888', marginTop: '1rem', textAlign: 'center' }}>все фото Захара были загружены на наш сайт с его разрешения и по его просьбе</p>
          </div>
        </div>
      )}
      {showFunVideoModal && (
        <div className="modal-overlay" onClick={() => setShowFunVideoModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowFunVideoModal(false)}>×</button>
            <video controls autoPlay style={{ maxWidth: '100%', maxHeight: '70vh' }}>
              <source src="/fun%20video.mp4" type="video/mp4" />
            </video>
            <p style={{ color: '#888', marginTop: '1rem', textAlign: 'center' }}>fun video.mp4</p>
          </div>
        </div>
      )}
    </div>
  );
}
