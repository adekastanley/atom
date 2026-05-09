import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
	return (
		<footer className="border-t bg-muted/40 text-muted-foreground">
			<div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<h3 className="text-xl font-bold tracking-tighter text-foreground">
							ATOM TechServe
						</h3>
						<p className="text-sm">
							Empowering businesses and organizations with innovative technology
							and data-driven insights.
						</p>
					</div>

					<div className="space-y-4">
						<h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
							Quick Links
						</h4>
						<nav className="flex flex-col space-y-2">
							<Link
								href="/"
								className="text-sm hover:text-primary transition-colors"
							>
								Home
							</Link>
							<Link
								href="/about"
								className="text-sm hover:text-primary transition-colors"
							>
								About Us
							</Link>
							<Link
								href="/services"
								className="text-sm hover:text-primary transition-colors"
							>
								Services
							</Link>
							<Link
								href="/contact"
								className="text-sm hover:text-primary transition-colors"
							>
								Contact
							</Link>
						</nav>
					</div>

					<div className="space-y-4">
						<h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
							Services
						</h4>
						<nav className="flex flex-col space-y-2">
							<Link
								href="/services#data"
								className="text-sm hover:text-primary transition-colors"
							>
								Data Platforms
							</Link>
							<Link
								href="/services#analytics"
								className="text-sm hover:text-primary transition-colors"
							>
								Data Modeling
							</Link>
							<Link
								href="/services#mobile"
								className="text-sm hover:text-primary transition-colors"
							>
								Mobile Apps
							</Link>
							<Link
								href="/services"
								className="text-sm hover:text-primary transition-colors"
							>
								View All
							</Link>
						</nav>
					</div>

					<div className="space-y-4">
						<h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
							Contact
						</h4>
						<div className="flex flex-col space-y-3 text-sm">
							<div className="flex items-start gap-2">
								<MapPin className="h-4 w-4 mt-0.5 shrink-0" />
								<span>No 151, Adetokunbo Ademola cresent Wuse 2 Abuja.</span>
							</div>

							<div className="flex items-center gap-2">
								<Phone className="h-4 w-4 shrink-0" />
								<a
									href="tel:+2347063267111"
									className="hover:text-primary transition-colors"
								>
									+234 706 326 7111
								</a>
							</div>
							<div className="flex items-center gap-2">
								<Mail className="h-4 w-4 shrink-0" />
								<a
									href="mailto:atomtechserve@gmail.com"
									className="hover:text-primary transition-colors"
								>
									atomtechserve@gmail.com
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t pt-8 text-center text-sm">
					<p>
						© {new Date().getFullYear()} ATOM TechServe. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
