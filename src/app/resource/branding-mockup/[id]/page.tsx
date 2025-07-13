'use client';
import React from "react";
import Header from "@/components/Header";
import DetailBrandingMockup from "@/components/resource-detail/branding-mockup";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    params.then(p => setId(p.id));
  }, [params]);

  if (!id) return null;

  return (
    <>
      <Header />
      <DetailBrandingMockup id={id} />
    </>
  );
} 