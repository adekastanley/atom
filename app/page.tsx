import Link from "next/link";
import {
	ArrowRight,
	Database,
	LineChart,
	Smartphone,
	Cloud,
	Search,
	ShieldCheck,
	Laptop,
	Check,
	Plus,
	ChevronDown,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";

const services = [
	{
		title: "Data Collection Platforms",
		description:
			"Design and deployment of systems that collect, store, and manage large-scale data.",
		icon: <Database className="h-4 w-4 text-pink-600" />,
		bg: "bg-pink-100",
		href: "/services#data",
	},
	{
		title: "Data Modeling",
		description:
			"Transformation of raw data into meaningful insights through dashboards.",
		icon: <LineChart className="h-4 w-4 text-emerald-600" />,
		bg: "bg-emerald-100",
		href: "/services#analytics",
	},
	{
		title: "Mobile Apps",
		description:
			"Design and development of scalable mobile apps for Android and iOS.",
		icon: <Smartphone className="h-4 w-4 text-blue-600" />,
		bg: "bg-blue-100",
		href: "/services#mobile",
	},
	{
		title: "Digital Solutions",
		description:
			"Custom software, web, and cloud solutions that modernize business processes.",
		icon: <Cloud className="h-4 w-4 text-purple-600" />,
		bg: "bg-purple-100",
		href: "/services#digital",
	},
	{
		title: "MELR Frameworks",
		description:
			"Frameworks and tools for tracking performance and evaluating impact.",
		icon: <Search className="h-4 w-4 text-amber-600" />,
		bg: "bg-amber-100",
		href: "/services#melr",
	},
	{
		title: "Software Licensing",
		description: "Management and provision of software licenses and IT tools.",
		icon: <ShieldCheck className="h-4 w-4 text-cyan-600" />,
		bg: "bg-cyan-100",
		href: "/services#licensing",
	},
	{
		title: "Hardware Supply",
		description: "Supply of high-quality IT hardware and devices.",
		icon: <Laptop className="h-4 w-4 text-indigo-600" />,
		bg: "bg-indigo-100",
		href: "/services#hardware",
	},
];

const faqs = [
	{
		q: "What is ATOM TechServe?",
		a: "ATOM TechServe is a Nigeria-based software engineering and IT services company delivering data-driven and digital solutions that help organizations operate smarter and scale faster.",
	},
	{
		q: "How does your data collection work?",
		a: "We design and deploy systems like DHIS2 and custom platforms to collect, store, and manage large-scale data securely from multiple sources.",
	},
	{
		q: "Can you improve our customer experience?",
		a: "Yes, through our custom digital solutions and mobile application development, we modernize your business processes for improved engagement.",
	},
	{
		q: "What benefits do you offer businesses?",
		a: "We offer process automation, increased productivity, real-time analytics, and scalable technical infrastructure to drive sustainable growth.",
	},
];

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-zinc-50 font-sans selection:bg-cyan-200 selection:text-cyan-900">
			{/* 1. Hero Section (Dark with Cyan Glow) */}
			<section className="relative bg-zinc-950 text-white pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden">
				{/* Glow Effects */}
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[800px] h-[400px] bg-cyan-500/30 blur-[120px] rounded-full pointer-events-none"></div>
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[300px] bg-emerald-400/20 blur-[100px] rounded-full pointer-events-none"></div>

				<div className="container mx-auto px-4 md:px-8 relative z-10">
					<div className="max-w-4xl">
						<FadeIn>
							<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-zinc-300 mb-8 backdrop-blur-md">
								<span className="text-cyan-400">✦</span> Top Tech for Growing
								Business
							</div>
						</FadeIn>

						<FadeIn delay={0.1}>
							<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.1] mb-8">
								Empowering Decisions <br className="hidden md:block" /> Through
								Data & Technology
							</h1>
						</FadeIn>

						<div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mt-12 md:mt-24">
							<FadeIn delay={0.2} className="flex items-center gap-6">
								<Button className="bg-white text-zinc-950 hover:bg-zinc-200 rounded-full h-14 px-8 text-base font-medium shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all">
									Free Consultation
								</Button>

								<div className="flex items-center gap-3">
									<div className="flex -space-x-3">
										{/* <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center overflow-hidden">
											<img
												src="https://i.pravatar.cc/100?img=1"
												alt="Avatar"
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center overflow-hidden">
											<img
												src="https://i.pravatar.cc/100?img=2"
												alt="Avatar"
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center overflow-hidden">
											<img
												src="https://i.pravatar.cc/100?img=3"
												alt="Avatar"
												className="w-full h-full object-cover"
											/>
										</div> */}
									</div>
									<div className="text-sm font-medium">
										{/* <div className="flex text-amber-400 text-xs">★★★★★</div> */}
										{/* <span className="text-zinc-400">4.8 Trust Score</span> */}
									</div>
								</div>
							</FadeIn>

							<FadeIn delay={0.3} className="max-w-sm">
								<p className="text-zinc-300 text-lg leading-relaxed">
									Discover cutting-edge solutions designed to elevate your
									business to new heights and drive sustainable growth in
									today's competitive landscape.
								</p>
							</FadeIn>
						</div>
					</div>
				</div>
			</section>

			{/* 2. Value Proposition (Clean White) */}
			<section className="bg-white py-24 md:py-32">
				<div className="container mx-auto px-4 md:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
						<FadeIn>
							<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
								How can we help <br className="hidden md:block" /> your business
							</h2>
						</FadeIn>

						<FadeIn delay={0.2} className="space-y-8">
							<p className="text-lg text-zinc-600 leading-relaxed font-medium">
								At ATOM TechServe, we warmly invite you to arrange an in-depth
								consultation designed to thoroughly examine the intricacies of
								your business. In this extensive session, we will dive into a
								multitude of topics, including cutting-edge technology
								strategies specifically crafted for your industry.
							</p>
							<p className="text-lg text-zinc-600 leading-relaxed">
								Our team of highly experienced professionals is committed to
								delivering tailored advice that addresses your distinct needs
								and ambitions. We aim to ensure that you depart with not only
								actionable insights but also a clear roadmap to drive your
								business toward success.
							</p>
							<div>
								<Link
									href="/about"
									className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-zinc-900 hover:text-cyan-600 transition-colors"
								>
									Learn More <ArrowRight className="ml-2 w-4 h-4" />
								</Link>
							</div>
						</FadeIn>
					</div>
				</div>
			</section>

			{/* 3. Stats Section */}
			<section className="bg-white pb-24 md:pb-32 border-b border-zinc-100">
				<div className="container mx-auto px-4 md:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
						<FadeIn delay={0.1} className="pt-8 md:pt-0 md:px-8 first:pl-0">
							<div className="text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-4">
								100%
							</div>
							<p className="text-sm text-zinc-500 font-medium leading-relaxed max-w-[200px]">
								Strategies for Business Growth and Market Expansion
							</p>
						</FadeIn>
						<FadeIn delay={0.2} className="pt-8 md:pt-0 md:px-8">
							<div className="text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-4">
								90%
							</div>
							<p className="text-sm text-zinc-500 font-medium leading-relaxed max-w-[200px]">
								Global Corporations and Multinational Enterprises
							</p>
						</FadeIn>
						<FadeIn delay={0.3} className="pt-8 md:pt-0 md:px-8">
							<div className="text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-4">
								10k
							</div>
							<p className="text-sm text-zinc-500 font-medium leading-relaxed max-w-[200px]">
								Companies collaborate to achieve goals and innovate.
							</p>
						</FadeIn>
					</div>
				</div>
			</section>

			{/* 4. Services Grid (Minimalist Cards) */}
			<section className="bg-white py-24 md:py-32">
				<div className="container mx-auto px-4 md:px-8">
					<FadeIn className="text-center max-w-3xl mx-auto mb-20">
						<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
							Our Core Expertise
						</h2>
						<p className="text-lg text-zinc-500">
							Harnessing the Power of Data and Technology for Unmatched Business
							Precision and Efficiency
						</p>
					</FadeIn>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{services.slice(0, 4).map((service, idx) => (
							<FadeIn key={service.title} delay={0.1 * idx}>
								<Link href={service.href} className="block group h-full">
									<div className="bg-zinc-50 rounded-[2rem] p-8 h-full border border-zinc-100 transition-all hover:bg-zinc-100 hover:scale-[1.02]">
										<div
											className={`w-10 h-10 rounded-full ${service.bg} flex items-center justify-center mb-12`}
										>
											{service.icon}
										</div>
										<h3 className="text-xl font-bold text-zinc-900 mb-4 pr-4 leading-tight">
											{service.title}
										</h3>
										<p className="text-sm text-zinc-500 leading-relaxed font-medium">
											Our team offers solutions and insights for your business.
											We use tools to turn raw data into strategies that drive
											growth.
										</p>
									</div>
								</Link>
							</FadeIn>
						))}
					</div>

					<div className="mt-12 text-center">
						<Link
							href="/services"
							className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-zinc-900 hover:text-cyan-600 transition-colors"
						>
							View All Services <ArrowRight className="ml-2 w-4 h-4" />
						</Link>
					</div>
				</div>
			</section>

			{/* 5. Value Prop List (Dark Section) */}
			<section className="bg-zinc-950 py-32 text-center relative overflow-hidden">
				{/* Subtle background texture/image for the dark section */}
				<div
					className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
					style={{
						backgroundImage:
							"url('https://www.transparenttextures.com/patterns/cubes.png')",
					}}
				></div>

				<div className="container mx-auto px-4 md:px-8 relative z-10">
					<FadeIn>
						<h2 className="text-2xl text-zinc-400 font-medium mb-4">
							Integrated Solutions
						</h2>
						<p className="text-sm text-zinc-500 max-w-md mx-auto mb-16">
							Delving Deep into the Multi-Array of Industries We Have Proudly
							Supported and Served Over the Years.
						</p>
					</FadeIn>

					<ul className="space-y-6 md:space-y-8 flex flex-col items-center">
						{[
							"Data-Driven Decision Making",
							"Scalable Technical Infrastructure",
							"Security & Compliance First",
							"Expert Research & Evaluation",
						].map((item, idx) => (
							<FadeIn key={idx} delay={0.1 * idx}>
								<li className="text-3xl md:text-5xl lg:text-6xl font-medium text-zinc-500 hover:text-white transition-colors cursor-default tracking-tight">
									{item}
								</li>
							</FadeIn>
						))}
					</ul>
				</div>
			</section>

			{/* 6. FAQ Section */}
			<section className="bg-white py-24 md:py-32">
				<div className="container mx-auto px-4 md:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">
						<FadeIn>
							<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
								Frequently <br /> Asked Question
							</h2>
							<p className="text-lg text-zinc-500 mb-8 max-w-sm">
								Here are some frequently asked questions with answers to clarify
								doubts.
							</p>
							<Button
								variant="outline"
								className="rounded-full px-8 h-12 border-zinc-200 text-zinc-900 hover:bg-zinc-50 font-medium"
							>
								View All FAQs
							</Button>
						</FadeIn>

						<div className="space-y-4">
							{faqs.map((faq, idx) => (
								<FadeIn key={idx} delay={0.1 * idx}>
									<details className="group border-b border-zinc-200 pb-4 [&_summary::-webkit-details-marker]:hidden">
										<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-zinc-900 py-4 font-medium text-lg md:text-xl hover:text-cyan-600 transition-colors">
											{faq.q}
											<span className="relative size-5 shrink-0">
												<Plus className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity text-zinc-400" />
												<ChevronDown className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity text-zinc-400 rotate-180" />
											</span>
										</summary>
										<p className="mt-2 text-zinc-500 leading-relaxed pr-8 pb-4">
											{faq.a}
										</p>
									</details>
								</FadeIn>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* 7. Bottom CTA & Mock Footer */}
			<section className="bg-zinc-950 text-white pt-24 pb-12 relative overflow-hidden">
				{/* Glow Effects */}
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none"></div>

				<div className="container mx-auto px-4 md:px-8 relative z-10 border-b border-zinc-800 pb-20 mb-12">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<FadeIn>
							<h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
								Let's Build The <br /> Future Together
							</h2>
							<p className="text-zinc-400 max-w-md text-lg mb-10">
								Partner with ATOM TechServe to unlock value through technology.
								Let's discuss your next project.
							</p>
							<div className="flex items-center gap-2">
								<span className="text-4xl text-cyan-400 leading-none">*</span>
								<span className="text-4xl font-bold tracking-tighter">
									ATOM TechServe
								</span>
							</div>
						</FadeIn>

						<FadeIn
							delay={0.2}
							className="lg:justify-self-end w-full max-w-sm space-y-6"
						>
							<div className="space-y-4">
								<h4 className="text-sm font-semibold text-white uppercase tracking-wider">
									Product
								</h4>
								<nav className="flex flex-col space-y-2 text-zinc-400">
									<Link href="#" className="hover:text-white transition-colors">
										Data Systems
									</Link>
									<Link href="#" className="hover:text-white transition-colors">
										Mobile Apps
									</Link>
									<Link href="#" className="hover:text-white transition-colors">
										Licensing
									</Link>
								</nav>
							</div>
						</FadeIn>
					</div>
				</div>

				<div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
					<p>
						© {new Date().getFullYear()} ATOM TechServe. All rights reserved.
					</p>
					<div className="flex gap-4 mt-4 md:mt-0">
						<Link href="#" className="hover:text-white transition-colors">
							Privacy Policy
						</Link>
						<Link href="#" className="hover:text-white transition-colors">
							Terms of Condition
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
