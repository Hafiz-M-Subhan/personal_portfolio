import { personalData } from "@/utils/data/personal-data";
import { Suspense } from "react";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// Revalidate data every 24 hours
export const revalidate = 86400;

async function getData() {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${personalData.devUsername}`,
      {
        next: { revalidate: 86400 },
        headers: {
          'Accept': 'application/vnd.forem.v1+json',
        }
      }
    )

    if (!res.ok) {
      console.error('Failed to fetch blogs');
      return [];
    }

    const data = await res.json();
    const filtered = data
      .filter((item) => item?.cover_image)
      .sort(() => Math.random() - 0.5)
      .slice(0, 6); // Limit to 6 blogs for better performance

    return filtered;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return [];
  }
}

// Loading component for blogs
function BlogSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse">
          <div className="h-44 lg:h-52 w-full bg-gray-800 rounded-t-lg"></div>
          <div className="p-3 space-y-3">
            <div className="h-4 bg-gray-800 rounded w-full"></div>
            <div className="h-6 bg-gray-800 rounded w-3/4"></div>
            <div className="h-4 bg-gray-800 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

async function BlogSection() {
  const blogs = await getData();
  return <Blog blogs={blogs} />;
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Suspense fallback={<BlogSkeleton />}>
        <BlogSection />
      </Suspense>
      <ContactSection />
    </>
  )
}