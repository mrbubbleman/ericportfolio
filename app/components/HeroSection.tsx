'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/portrait.jpg" alt="Profile Picture" width={120} height={120} className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Eric Lee</h1>
				<p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">Data Scientist | Software Programmer</p>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					Welcome to my portfolio! I’m Eric, a developer passionate about building simple, effective solutions that make a real impact.
				</p>
			</div>
		</section>
	);
}
