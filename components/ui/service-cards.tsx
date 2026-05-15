"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCard {
	title: string;
	description: string;
	icon: React.ReactNode;
	bg: string;
	href: string;
}

export function InteractiveServiceCards({
	services,
}: {
	services: ServiceCard[];
}) {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="flex flex-col md:flex-row gap-4 w-full md:h-[500px]">
			{services.map((service, index) => {
				const isActive = activeIndex === index;

				return (
					<div
						key={index}
						className={cn(
							"relative group overflow-hidden rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer flex flex-col p-5 md:p-8 border border-zinc-100/50 bg-zinc-50 hover:bg-zinc-100/80",
							isActive
								? "h-[320px] md:h-auto md:flex-[2.5]"
								: "h-[110px] md:h-auto md:flex-1"
						)}
						onMouseEnter={() => setActiveIndex(index)}
						onClick={() => setActiveIndex(index)}
					>
						{/* Background decorative element */}
						<div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/40 blur-2xl pointer-events-none opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />

						{/* Top Section */}
						<div className="relative z-10 flex flex-col min-h-0">
							<h3
								className={cn(
									"font-bold text-zinc-900 transition-all duration-500 line-clamp-2 md:line-clamp-none",
									isActive
										? "text-2xl md:text-3xl mb-4"
										: "text-lg md:text-xl md:whitespace-nowrap md:truncate"
								)}
							>
								{service.title}
							</h3>

							<div
								className={cn(
									"overflow-hidden transition-all duration-700",
									isActive
										? "opacity-100 max-h-[200px]"
										: "opacity-0 max-h-0"
								)}
							>
								<p className="text-zinc-700/90 font-medium leading-relaxed md:max-w-xs">
									{service.description}
								</p>
							</div>
						</div>

						{/* Bottom Section */}
						<div className="relative z-10 flex items-center justify-between mt-auto pt-2">
							<Link
								href={service.href}
								className={cn(
									"inline-flex items-center text-sm font-bold tracking-wider text-zinc-900 group-hover:text-zinc-700 transition-colors",
									isActive ? "" : "md:opacity-0 md:pointer-events-none" // Hide text on PC when shrunk, keep on mobile
								)}
							>
								Read More
								<span className="ml-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:translate-x-1">
									<ArrowUpRight className="w-4 h-4 text-zinc-900" />
								</span>
							</Link>

							<div
								className={cn(
									"flex items-center justify-center rounded-full shadow-sm transition-all duration-500",
									service.bg, // Move the color here
									isActive ? "w-14 h-14" : "w-10 h-10 md:w-14 md:h-14"
								)}
							>
								{service.icon}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
