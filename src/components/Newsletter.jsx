import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="newsletter-section">
      <h3>📬 Receba Nossos Estudos por E-mail</h3>
      <p>Toda semana enviamos um novo estudo bíblico direto na sua caixa de entrada. Grátis, sem spam.</p>
      
      <form 
        action="https://sdgloria.us14.list-manage.com/subscribe/post?u=1f2b0530e55c5f990c2e5c940&id=b62f49e1cc&f_id=007a98e0f0" 
        method="post" 
        id="mc-embedded-subscribe-form" 
        name="mc-embedded-subscribe-form" 
        className="newsletter-form validate" 
        target="_blank" 
        noValidate
      >
        <input 
          type="email" 
          name="EMAIL" 
          id="mce-EMAIL"
          placeholder="Seu melhor e-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          autoComplete="email"
        />
        
        {/* Anti-spam bot trap de segurança do Mailchimp */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px', height: '0', width: '0' }}>
          <input 
            type="text" 
            name="b_1f2b0530e55c5f990c2e5c940_b62f49e1cc" 
            tabIndex="-1" 
            defaultValue=""
          />
        </div>
        
        <button type="submit" name="subscribe" id="mc-embedded-subscribe">
          Quero Receber
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
