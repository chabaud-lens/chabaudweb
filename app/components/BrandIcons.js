import React from 'react';

export function MailIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M3 7.5l8.5 6L20.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function WhatsAppIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M15.5 8.5c-.3 0-1.1.1-1.6.3-.5.2-1 .4-1.3.6-.3.2-.7.4-1 .6-.3.2-.7.4-.9.6-.2.2-.2.5 0 .8l.6.9c.2.3.5.6.9 1 .4.4.8.8 1.3 1 .5.3.9.4 1.2.4.3 0 .9-.1 1.4-.5.5-.4.8-.9 1.1-1.3.3-.4.4-.7.3-1-.1-.3-.3-.6-.6-1l-.8-1c-.2-.2-.4-.3-.6-.3z" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M10.5 9.5c.2.6.8 1.1 1.6 1.4" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function InstagramIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M12 3v9.5a3.5 3.5 0 1 0 3.5 3.5V9.5h3.5V6.5h-3.5V3h-3.5z" fill="currentColor" />
    </svg>
  );
}

export default {
  MailIcon,
  WhatsAppIcon,
  InstagramIcon,
  TikTokIcon,
};
