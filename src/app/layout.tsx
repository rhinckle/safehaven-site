import './globals.css';

export const metadata = {
  title: 'SafeHaven Life — Life Insurance',
  description: 'Book a free consultation today.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
