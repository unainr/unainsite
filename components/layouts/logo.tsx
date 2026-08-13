import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link href="/" className="flex items-center gap-2 ">
			<Image
				className="h-auto w-auto hidden dark:block"
				src="https://res.cloudinary.com/ttvcunbx/image/upload/c_crop,g_north_west,h_305,w_1101,x_74,y_468/logo22_qb6iob.png" // or your public path
				alt="UNAIN Logo"
				width={120}
				height={50}
				priority
			/>
			<Image
				src="https://res.cloudinary.com/ttvcunbx/image/upload/e_background_removal/c_crop,g_north_west,h_308,w_1153,x_33,y_465/unain_emf2qo.png"
						alt="UNAIN Logo"

				width={120}
				height={50}
				priority
				className="h-auto w-auto object-contain dark:hidden block"
			/>
		</Link>
	);
};

export default Logo;
