import React from 'react';

const VideoEmbed = ({ videoId, title }) => {
  return (
    <div style={{
      margin: '2rem 0',
      background: '#f8f9fa',
      padding: '1.5rem',
      borderRadius: '12px',
      borderLeft: '4px solid #b91c1c',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{marginTop: 0, color: '#1a1210', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px'}}>
        <span style={{fontSize: '1.2rem'}}>🎬</span> ASSISTA AO VÍDEO ORIGINAL
      </h3>
      
      <div style={{
        position: 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        marginBottom: '1rem'
      }}>
        <iframe 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0
          }}
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      
      <div style={{fontSize: '0.95rem', color: '#555', lineHeight: '1.6'}}>
        <p style={{margin: '0 0 5px 0'}}><strong>📺 Canal:</strong> Aquarela Sagrada</p>
        <p style={{margin: '0 0 5px 0'}}><strong>Vídeo:</strong> "{title}"</p>
        <p style={{margin: '0 0 15px 0'}}>
          <strong>🔗 Link direto:</strong> <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer" style={{color: '#0066cc', textDecoration: 'none'}}>https://www.youtube.com/watch?v={videoId}</a>
        </p>
        
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', justifyContent: 'space-between'}}>
          <a 
            href={`https://www.youtube.com/watch?v=${videoId}`} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#ff0000',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}
          >
            ▶ Assistir no YouTube
          </a>
          <p style={{margin: 0, fontStyle: 'italic', color: '#666'}}>💬 "Prefere ler? O artigo completo está logo abaixo."</p>
        </div>
      </div>
    </div>
  );
};

export default VideoEmbed;
