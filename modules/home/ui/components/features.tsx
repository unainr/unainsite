import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";

export default  function Features() {
	return (
		<section className="py-16 md:py-32">
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="text-center">
					<div className="my-4 text-5xl font-bold" >
						AI Features That{" "}
						<span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-blue-400">
							Drive Growth
						</span>
					</div>
					<p className="mt-4 text-muted-foreground">
						Customizable, secure, and built with the latest tech—so you can
						focus on results, not complexity.{" "}
					</p>
				</div>

				<div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
					{/* Feature 1 */}
					<Card className="group border-0 shadow-none">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Zap className="size-6" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-medium">Fully Customizable</h3>
						</CardHeader>
						<CardContent>
							<p className="text-sm">
								Adapt workflows, branding, and AI capabilities to match your
								exact business needs.
							</p>
						</CardContent>
					</Card>

					{/* Feature 2 */}
					<Card className="group border-0 shadow-none">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Settings2 className="size-6" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-medium">Total Control</h3>
						</CardHeader>
						<CardContent>
							<p className="text-sm">
								Easily manage every detail—from design to automation—without
								technical complexity.
							</p>
						</CardContent>
					</Card>

					{/* Feature 3 */}
					<Card className="group border-0 shadow-none">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Sparkles className="size-6" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-medium">AI-Powered</h3>
						</CardHeader>
						<CardContent>
							<p className="text-sm">
								Boost productivity with intelligent features built on the latest
								generative AI technology.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
	<div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
		<div
			aria-hidden
			className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
		/>
		<div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
			{children}
		</div>
	</div>
);
