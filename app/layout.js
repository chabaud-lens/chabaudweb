import './globals.css';

export const metadata = {
  title: 'CHABAUD Photography',
  description: 'Portfolio web for CHABAUD Photography',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com/3.4.17"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
