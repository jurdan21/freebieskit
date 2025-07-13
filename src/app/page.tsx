import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResourceSection from "@/components/ResourceSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense>
        <ResourceSection />
      </Suspense>
    </>
  );
}
