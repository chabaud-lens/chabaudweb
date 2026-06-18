import React, { useState } from 'react';
import { MailIcon, WhatsAppIcon, InstagramIcon, TikTokIcon } from './BrandIcons';

export default function BrandLogo({ name, className = 'w-5 h-5', alt = '', ...props }) {
  const [failed, setFailed] = useState(false);
  const src = `/icons/${name}.svg`;

  if (failed) {
    // fallback to inline SVGs from BrandIcons
    switch (name) {
      case 'instagram':
        return <InstagramIcon className={className} {...props} />;
      case 'tiktok':
        return <TikTokIcon className={className} {...props} />;
      case 'whatsapp':
        return <WhatsAppIcon className={className} {...props} />;
      case 'mail':
      default:
        return <MailIcon className={className} {...props} />;
    }
  }

  return (
    <img
      src={src}
      alt={alt || name}
      className={className}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
