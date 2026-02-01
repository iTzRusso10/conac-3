import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '[Nome Casolare] | B&B di charme nelle Langhe',
  description: 'Un casolare storico trasformato in B&B esclusivo nelle Langhe piemontesi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
