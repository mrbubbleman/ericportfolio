export default function ProjectsSection() {
	const projects = [
		{
			title: '"Facebook" Clone Web App',
			description:
				'Built a "Facebook" social media clone website using Django with RESTful APIs and dynamic content updates.',
			image: '/Facebookclone.png',
			link: 'https://github.com/mrbubbleman/facebookclone',
			technologies: ['Django', 'Heroku', 'JavaScript', 'Swagger'],
		},
		{
			title: 'Pokémon GO QR Code Hunter App',
			description:
				'Developed an Android app for QR code scanning similar to Pokémon GO.',
			image: '/QRCodeHunter.jpg',
			link: 'https://github.com/CMPUT301W23T14/QRHunter-App',
			technologies: ['Java', 'Firebase', 'JUnit', 'Google Maps API'],
		},
		{
			title: 'AI Gym Exercise App',
			description:
				'Created an AI-powered fitness app using pose estimation to track and analyze user exercises.',
			image: '/aigymbuddy.png',
			link: 'https://github.com/jtolentino1/MyGymBuddy',
			technologies: ['Python', 'Streamlit', 'MediaPipe', 'OpenCV'],
		},
	];

	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
					Featured Projects
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className={`bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow 
								${index === 2 ? 'sm:col-span-2 sm:mx-auto sm:w-2/3' : ''}`}
						>
							{/* Updated image container */}
							<div className="bg-gray-700 relative flex justify-center items-center h-64 sm:h-72">
								<img
									src={project.image}
									alt={project.title}
									className="object-contain w-full h-full rounded-t-lg"
								/>
							</div>

							{/* Card body */}
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">
									{project.title}
								</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-3">
									{project.technologies.map((tech, i) => (
										<span
											key={i}
											className="text-xs sm:text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded-full"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-2">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
									>
										View Project →
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
