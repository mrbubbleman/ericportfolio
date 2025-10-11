import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Eric Lee Portfolio',
	description:
		'Welcome to my portfolio! I am Eric Lee, an aspiring Software Engineer / Data Scientist. I focus on creating straightforward solutions that solve real problems.',
	keywords: [
'Python', 'C', 'C++', 'JavaScript', 'Next.js', 'TypeScript', 'TailwindCSS', 'React', 'Java', 'Node.js', 'SQL', 'MongoDB', 'AWS', 'Springboot', 'Firebase'
	],
	authors: [{ name: "Eric's Portfolio" }],
	creator: "Eric's Portfolio",
	openGraph: {
		title: "Eric's Portfolio",
		description: 'Welcome to my portfolio! I’m Eric, a developer passionate about building simple, effective solutions that make a real impact.',
		url: 'https://ericportfolio-eight.vercel.app/',
		siteName: '',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: "Eric's Portfolio",
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: "Eric's Portfolio",
		description: 'Welcome to my portfolio! I’m Eric, a developer passionate about building simple, effective solutions that make a real impact.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
