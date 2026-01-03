export const words = ["Startups", "SaaS Products", "AI Agents", "Enterprises","E-commerce","Your Business"];

// --- Portfolio Data & Main App ---
 export interface ProjectFolder {
  id: string;
  image: string;
  title: string;
}
export const portfolioData = [
  {
    title: "AI Site",
    gradient: "linear-gradient(135deg, #e73827, #f85032)",
    projects: [
      { id: "b1", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/screencapture-wisera-vercel-app-2025-08-01-13_04_22.png?updatedAt=1754035533383", title: "Wisera" },
      { id: "b2", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/cloudhorizon.png?updatedAt=1754036421041", title: "Cloud Horizon" },
      { id: "b3", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/4ab824c625cf2a94441990585d08bcb3dcb6d0ab-1884x1975.webp", title: "NeuroX" },
      { id: "b4", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/b53c9651cd2cc211c46d2e0dc419251605d7631c-1920x1174.webp", title: "Wayferen" },
      { id: "b5", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/12.png?updatedAt=1754034871815", title: "Zephyr Lab" },
      { id: "b6", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/68dcaca860cfd1f4444a45921763df295026e56f-1884x1710.webp", title: "BookLoom" },
    ] as ProjectFolder[]
  },
  {
    title: "Web Design",
    gradient: "linear-gradient(to right, #f7b733, #fc4a1a)",
    projects: [
      { id: "w1", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/15.png?updatedAt=1754034875842", title: "HomeDecor" },
      { id: "w2", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/14.png?updatedAt=1754034875527", title: "Irvin" },
      { id: "w3", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/11.png?updatedAt=1754034871698", title: "SonicBlend" },
      { id: "w4", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/7.png?updatedAt=1754034870667", title: "SwiftBuy" },
      { id: "w5", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/10.png?updatedAt=1754034870674", title: "Luxury Jewelry" },
    ] as ProjectFolder[]
  },
  {
    title: "UI/UX Design",
    gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
    projects: [
      { id: "u1", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/3.png?updatedAt=1754034860809", title: "BookWise" },
      { id: "u2", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/16.png?updatedAt=1754034861569", title: "Fusion Style" },
      { id: "u3", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/19.png?updatedAt=1754034859698", title: "WordSphere" },
      { id: "u4", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/1.png?updatedAt=1754034861006", title: "Linkify" },
      { id: "u5", image: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/4.png?updatedAt=1754034867482", title: "MediaFlow" },
    ] as ProjectFolder[]
  },
//   {
//     title: "Photography",
//     gradient: "linear-gradient(to right, #414345, #232526)",
//     projects: [
//       { id: "p1", image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=800", title: "Urban Rhythms" },
//       { id: "p2", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800", title: "Natural States" },
//       { id: "p3", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800", title: "Silent Woods" },
//     ] as ProjectFolder[]
//   },
//   {
//     title: "Illustration",
//     gradient: "linear-gradient(135deg, #8e2de2, #4a00e0)",
//     projects: [
//       { id: "i1", image: "https://images.unsplash.com/photo-1618335829737-2228915674e0?auto=format&fit=crop&q=80&w=800", title: "Digital Flora" },
//       { id: "i2", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800", title: "Neon Nights" },
//       { id: "i3", image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800", title: "Abstract Worlds" },
//     ] as ProjectFolder[]
//   },
//   {
//     title: "Motion",
//     gradient: "linear-gradient(135deg, #f80759, #bc4e9c)",
//     projects: [
//       { id: "m1", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800", title: "3D Sequences" },
//       { id: "m2", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", title: "Glitch Art" },
//       { id: "m3", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800", title: "Tech Loops" },
//     ] as ProjectFolder[]
//   }
];