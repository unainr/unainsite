export interface PropsLayout {
    children: React.ReactNode
}

export interface Project {
    _id?: string;
	name: string;
	description: string;
	images: string;
	projectLink: string;
}