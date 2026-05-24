"use client"

export const metadata = {
  title: 'My Mobile PWA',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-bg">
          <div className="mobile-frame">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
