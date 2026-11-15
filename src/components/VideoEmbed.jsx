import { useState } from 'react';

// Vídeo do YouTube "leve": mostra só a miniatura e carrega o player quando a pessoa clica.
// Isso deixa a página bem mais rápida (o player do YouTube pesa mais de 1 MB).
const VideoEmbed = ({ videoId, title, channel, channelUrl }) => {
  const [playing, setPlaying] = useState(false);
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const videoTitle = title && title !== 'Vídeo Original' ? title : 'Vídeo original no YouTube';

  return (
    <div className="video-embed">
      <h3 className="video-embed-title">🎬 Assista ao vídeo original</h3>

      <div className="video-embed-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <button type="button" className="video-embed-play" onClick={() => setPlaying(true)} aria-label={`Reproduzir vídeo: ${videoTitle}`}>
            <img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" loading="lazy" width="480" height="360" />
            <span className="video-embed-icon" aria-hidden="true">▶</span>
          </button>
        )}
      </div>

      <p className="video-embed-credit">
        {channel && (
          <>
            <strong>Canal:</strong>{' '}
            {channelUrl ? (
              <a href={channelUrl} target="_blank" rel="noopener noreferrer">{channel}</a>
            ) : (
              channel
            )}
            {' · '}
          </>
        )}
        <a href={watchUrl} target="_blank" rel="noopener noreferrer">Assistir no YouTube</a>
      </p>
    </div>
  );
};

export default VideoEmbed;
