import React from 'react';

const Newsletter = () => {
  return (
    <div id="mc_embed_shell" style={{
      background: '#1a1210',
      padding: '2.5rem 2rem',
      borderRadius: '12px',
      maxWidth: '700px',
      margin: '3rem auto',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    }}>
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      
      <style type="text/css">{`
        #mc_embed_signup {
          background: transparent;
          clear: left;
          font: 14px 'Inter', Helvetica, Arial, sans-serif;
          width: 100%;
        }
        #mc_embed_signup h2 {
          color: #ffffff;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          text-align: center;
          font-weight: 700;
        }
        #mc_embed_signup .mc-field-group {
          margin-bottom: 1.5rem;
        }
        #mc_embed_signup .mc-field-group label {
          color: #d1d5db;
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        #mc_embed_signup input[type="email"] {
          width: 100%;
          padding: 0.875rem 1.25rem;
          border: 2px solid #4b5563;
          border-radius: 8px;
          background: #374151;
          color: white;
          font-size: 1rem;
          box-sizing: border-box;
          transition: border-color 0.3s;
        }
        #mc_embed_signup input[type="email"]:focus {
          outline: none;
          border-color: #b91c1c;
        }
        #mc_embed_signup input[type="email"]::placeholder {
          color: #9ca3af;
        }
        #mc_embed_signup input[type="submit"] {
          background: #b91c1c;
          color: white;
          border: none;
          padding: 0.875rem 2.5rem;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          font-size: 1rem;
          width: 100%;
          transition: all 0.3s;
        }
        #mc_embed_signup input[type="submit"]:hover {
          background: #991b1b;
          transform: translateY(-2px);
        }
        #mc_embed_signup .indicates-required {
          color: #9ca3af;
          font-size: 0.875rem;
          text-align: right;
          margin-bottom: 1rem;
        }
        #mc_embed_signup .asterisk {
          color: #ef4444;
        }
        #mc_embed_signup .clear.foot p {
          color: #6b7280;
          font-size: 0.875rem;
          text-align: center;
          margin: 1rem 0 0 0;
        }
        @media (max-width: 640px) {
          #mc_embed_shell {
            padding: 2rem 1.5rem;
            margin: 2rem 1rem;
          }
          #mc_embed_signup h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
      
      <div id="mc_embed_signup">
        <form 
          action="https://sdgloria.us14.list-manage.com/subscribe/post?u=1f2b0530e55c5f990c2e5c940&id=b62f49e1cc&f_id=007a98e0f0" 
          method="post" 
          id="mc-embedded-subscribe-form" 
          name="mc-embedded-subscribe-form" 
          className="validate" 
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>📧 Receba Nossos Estudos por E-mail</h2>
            
            <div className="indicates-required">
              <span className="asterisk">*</span> indica obrigatório
            </div>
            
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Endereço de e-mail</label>
              <input 
                type="email" 
                name="EMAIL" 
                className="required email" 
                id="mce-EMAIL" 
                required 
                placeholder="Seu melhor e-mail"
                autoComplete="email"
              />
            </div>
            
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
              <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
            </div>
            
            <div aria-hidden="true" style={{position: 'absolute', left: '-5000px', height: '0', width: '0'}}>
              <input 
                type="text" 
                name="b_1f2b0530e55c5f990c2e5c940_b62f49e1cc" 
                tabIndex="-1" 
                value=""
              />
            </div>
            
            <div className="clear foot">
              <input 
                type="submit" 
                name="subscribe" 
                id="mc-embedded-subscribe" 
                className="button" 
                value="Quero Receber"
              />
              <p>
                🔒 Respeitamos sua privacidade. Sem spam, cancele quando quiser.
              </p>
            </div>
          </div>
        </form>
      </div>
      
      <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
    </div>
  );
};

export default Newsletter;
