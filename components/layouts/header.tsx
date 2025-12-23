"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../theme/mode-toggle";
import Logo from "./logo";

export default function MainHeader() {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const pathname = usePathname();
	const isActive = (path: string) => pathname === path;
	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-200 ${
				isScrolled ? "bg-background/60 backdrop-blur-md" : ""
			}`}>
			<div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
				<Logo />

				<nav className="hidden  md:flex items-center gap-4 lg:gap-6">
					<Link
						href="/"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/") &&
								"text-blue-400 hover:text-blue-600 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Home
					</Link>

					<Link
						href="/about"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/about") &&
								"text-blue-400 hover:text-blue-600 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						About
					</Link>
					<Link
						href="/services"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/services") &&
								"text-blue-400 hover:text-blue-600 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Services
					</Link>
					<Link
						href="/project"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/project") &&
								"text-blue-400 hover:text-blue-600 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Projects
					</Link>
					<Link
						href="/contact"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/contact") &&
								"text-blue-400 hover:text-blue-600 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Contact
					</Link>
					
				</nav>

				<div className="hidden md:flex items-center gap-2">
					
				<ModeToggle/>

				</div>

				{/* Mobile Menu Trigger */}
				<div className="md:hidden flex items-center">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-62.5 sm:w-75">
							<nav className="flex flex-col gap-4 mt-8 items-center">
								<Link
									href="/"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/") &&
											"text-blue-400 hover:text-blue-600 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Home
								</Link>
								<Link
									href="/about"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/about") &&
											"text-blue-400 hover:text-blue-600 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									About
								</Link>
								<Link
									href="/project"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/project") &&
											"text-blue-400 hover:text-blue-600 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Projects
								</Link>
								<Link
									href="/contact"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/contact") &&
											"text-blue-400 hover:text-blue-600 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Contact
								</Link>
				<ModeToggle/>
								
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}