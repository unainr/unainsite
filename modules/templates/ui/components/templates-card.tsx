import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ShoppingBag } from "lucide-react";
import { templatesQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Button } from "@/components/ui/button";

type Template = {
  _id: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  buyUrl: string;
};
interface TemplatesCardProps {
  startCount?: number;
 endCount?: number;

}
export default async function TemplatesCard({startCount,endCount}: TemplatesCardProps) {
  const templates = await client.fetch<Template[]>(templatesQuery);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="my-4 tracking-tighter uppercase text-5xl font-bold">
					 Ready to {" "}
					<span className=" italic bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
						use templates
					</span>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Production-ready templates built with modern stack. Buy, install, and go live fast.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.slice(startCount, endCount).map((template) => (
            <div
              key={template._id}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-foreground/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                   src={template.image ?? "/placeholder.png"}
                  alt={template.title}
                  fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-medium text-foreground mb-1">
                  {template.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {template.description}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-2">
                  <Link
                    href={template.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </Link>
                  <div className="flex-1" />
                  <Button asChild>

                  <Link
                    href={template.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShoppingBag size={14} />
                    Buy on Contra
                  </Link>
                    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}