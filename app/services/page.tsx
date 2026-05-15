import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	Database,
	LineChart,
	Smartphone,
	Cloud,
	Search,
	ShieldCheck,
	Laptop,
	Check,
} from "lucide-react";
import Image from "next/image";

const services = [
	{
		id: "data",
		title: "Data Collection & Aggregation Platforms",
		what: "Design and deployment of systems that collect, store, and manage large-scale data from multiple sources.",
		who: "Government agencies, NGOs, health programs, and data-driven organizations.",
		benefits: [
			"Centralized data management",
			"Real-time monitoring",
			"Improved reporting and decision-making",
		],
		tools: "DHIS2, Custom-built data platforms",
		icon: <Database className="w-6 h-6 text-pink-600" />,
		bg: "bg-pink-100",
		image: "/images/data.jpg",
	},
	{
		id: "analytics",
		title: "Data Modeling & Visualization",
		what: "Transformation of raw data into meaningful insights through dashboards and analytics tools.",
		who: "Organizations that need clear insights from complex datasets.",
		benefits: [
			"Real-time analytics",
			"Easy KPI tracking",
			"Better strategic decisions",
		],
		tools: "Microsoft Power BI, Tableau, Apache Superset",
		icon: <LineChart className="w-6 h-6 text-emerald-600" />,
		bg: "bg-emerald-100",
		image: "/images/model.jpg",
	},
	{
		id: "mobile",
		title: "Mobile Application Development",
		what: "Design and development of scalable mobile apps for Android and iOS.",
		who: "Businesses looking to improve user engagement and service delivery.",
		benefits: [
			"Improved customer experience",
			"Increased accessibility",
			"Streamlined operations",
		],
		tools: "Android & iOS frameworks, Cross-platform technologies",
		icon: <Smartphone className="w-6 h-6 text-blue-600" />,
		bg: "bg-blue-100",
		image: "/images/mobile.jpg",
	},
	{
		id: "digital",
		title: "Digital Solutions for Business Transformation",
		what: "Custom software, web, and cloud solutions that modernize business processes.",
		who: "Organizations seeking digital transformation and operational efficiency.",
		benefits: [
			"Process automation",
			"Increased productivity",
			"Scalable infrastructure",
		],
		tools: "Cloud platforms, Web technologies & Custom software frameworks",
		icon: <Cloud className="w-6 h-6 text-purple-600" />,
		bg: "bg-purple-100",
		image: "/images/solutions.jpg",
	},
	{
		id: "melr",
		title: "Monitoring, Evaluation, Learning & Research (MELR)",
		what: "Frameworks and tools for tracking performance, evaluating impact, and improving outcomes.",
		who: "Development organizations, NGOs, and research-driven institutions.",
		benefits: [
			"Measurable impact tracking",
			"Data-driven improvements",
			"Continuous learning systems",
		],
		tools: "MEL frameworks, Data analytics tools & Reporting systems",
		icon: <Search className="w-6 h-6 text-amber-600" />,
		bg: "bg-amber-100",
		image: "/images/monitor.jpg",
	},
	{
		id: "licensing",
		title: "Software Licensing & IT Procurement",
		what: "Management and provision of software licenses and IT tools.",
		who: "Organizations needing reliable access to essential software.",
		benefits: [
			"Simplified procurement",
			"Cost efficiency",
			"Compliance and updates",
		],
		tools: "Vendor partnerships, License management systems",
		icon: <ShieldCheck className="w-6 h-6 text-cyan-600" />,
		bg: "bg-cyan-100",
		image: "/images/license.jpg",
	},
	{
		id: "hardware",
		title: "Computer Hardware & Tech Gadgets Supply",
		what: "Supply of high-quality IT hardware and devices.",
		who: "Organizations building or upgrading their tech infrastructure.",
		benefits: [
			"Reliable equipment",
			"Improved productivity",
			"Access to trusted brands",
		],
		tools: "Hardware from leading manufacturers",
		icon: <Laptop className="w-6 h-6 text-indigo-600" />,
		bg: "bg-indigo-100",
		image: "/images/supply.jpg",
	},
];

export default function ServicesPage() {
	return (
		<div className="flex flex-col min-h-screen bg-zinc-50 font-sans selection:bg-cyan-200 selection:text-cyan-900">
			{/* Header Section (Dark with Cyan Glow) */}
			<section className="relative bg-zinc-950 text-white pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden">
				{/* Glow Effects */}
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none"></div>

				<div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
					<FadeIn>
						<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-zinc-300 mb-8 backdrop-blur-md">
							<span className="text-cyan-400">✦</span> What We Do
						</div>
					</FadeIn>

					<FadeIn delay={0.1}>
						<h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
							Our Services
						</h1>
					</FadeIn>

					<FadeIn delay={0.2}>
						<p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
							Comprehensive software engineering, data systems, and IT solutions
							tailored to scale your organization.
						</p>
					</FadeIn>
				</div>
			</section>

			{/* Services List (Clean White Sections) */}
			<section className="py-24 md:py-32 bg-white">
				<div className="container mx-auto px-4 md:px-8 space-y-32 md:space-y-48">
					{services.map((service, index) => {
						const isEven = index % 2 === 0;
						return (
							<div key={service.id} id={service.id} className="scroll-mt-32">
								<div
									className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 md:gap-24 items-center`}
								>
									<FadeIn
										direction={isEven ? "right" : "left"}
										className="w-full lg:w-1/2"
									>
										<div className="space-y-8">
											<div
												className={`w-14 h-14 rounded-full ${service.bg} flex items-center justify-center mb-6`}
											>
												{service.icon}
											</div>

											<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
												{service.title}
											</h2>

											<div className="space-y-6 pt-4">
												<div>
													<h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-2">
														What it is
													</h3>
													<p className="text-lg text-zinc-600 leading-relaxed">
														{service.what}
													</p>
												</div>
												<div>
													<h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-2">
														Who it’s for
													</h3>
													<p className="text-lg text-zinc-600 leading-relaxed">
														{service.who}
													</p>
												</div>
											</div>

											<div className="pt-2">
												<h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">
													Key Benefits
												</h3>
												<ul className="grid grid-cols-1 gap-3">
													{service.benefits.map((benefit, i) => (
														<li
															key={i}
															className="flex items-center gap-3 text-zinc-600 font-medium"
														>
															<div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
																<Check className="w-3 h-3 text-zinc-900" />
															</div>
															<span>{benefit}</span>
														</li>
													))}
												</ul>
											</div>

											<div className="pt-2">
												<h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-2">
													Tools Used
												</h3>
												<p className="text-sm text-zinc-600 bg-zinc-50 py-2.5 px-4 rounded-xl border border-zinc-100 inline-block font-medium">
													{service.tools}
												</p>
											</div>

											<div className="pt-6">
												<Button
													className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full h-12 px-8 text-sm font-medium"
													asChild
												>
													<Link href={`/contact?service=${service.id}`}>
														Inquire Now
													</Link>
												</Button>
											</div>
										</div>
									</FadeIn>

									<FadeIn
										direction={isEven ? "left" : "right"}
										className="w-full lg:w-1/2"
									>
										<div className="relative h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden flex items-center justify-center border border-zinc-100">
											<div className="text-zinc-400 font-medium text-center px-4">
												{/* <div className="mb-4 flex justify-center opacity-50 grayscale">
													{service.icon}
												</div> */}
												{/* <p>{service.title} Image Placeholder</p> */}
												{service.image && (
													<Image
														className="w-full h-full object-cover bg-no-repeat bg-cover"
														width={600}
														height={600}
														src={service.image}
														alt={service.title}
													/>
												)}
											</div>
										</div>
									</FadeIn>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			{/* CTA Section (Dark minimal) */}
			<section className="bg-zinc-950 text-white py-24 relative overflow-hidden">
				{/* Glow Effects */}
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

				<div className="container mx-auto px-4 md:px-8 relative z-10">
					<div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
						<FadeIn>
							<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
								Not sure which solution fits you?
							</h2>
						</FadeIn>
						<FadeIn delay={0.2}>
							<p className="text-lg text-zinc-400 max-w-2xl mx-auto">
								Reach out to our experts for a personalized consultation
								tailored to your organizational needs.
							</p>
						</FadeIn>
						<FadeIn delay={0.4}>
							<Button
								className="bg-white text-zinc-950 hover:bg-zinc-200 rounded-full h-14 px-8 text-base font-medium mt-4"
								asChild
							>
								<Link href="/contact">Contact Us Today</Link>
							</Button>
						</FadeIn>
					</div>
				</div>
			</section>
		</div>
	);
}
