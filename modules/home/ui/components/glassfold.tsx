"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { GlassFold } from "./glass";
import { TextFlip } from "./text-flip";

// the adjustable settings 21st shows next to the preview
const palettes = {
	dark: {
		color1: "#2B7FFF",
		color2: "#0a0626",
		color3: "#0085FF",
		speed: 0.5,
		scale: 1,
		noise: 0.08,
	},
	light: {
		color1: "#3b2bff",
		color2: "#f3f5ff",
		color3: "#8fd0ff",
		speed: 0.5,
		scale: 1,
		noise: 0.05,
	},
};

export default function GlassHero(props: Partial<typeof palettes.dark>) {
	const { resolvedTheme } = useTheme();


	// before mount the theme is unknown, so default to dark to avoid a hydration mismatch
	const mode = resolvedTheme === "light" ? "light" : "dark";

	const config = { ...palettes[mode], ...props };

	return (
		<div className="relative h-screen w-full overflow-hidden">
			<GlassFold {...config} mode={mode} className="absolute inset-0" />
			<TextFlip />
		</div>
	);
}
