'use client';
import React from "react";
import Header from "@/components/Header";
import DetailThreeDAssets from "@/components/resource-detail/three-d-assets";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    params.then(p => setId(p.id));
  }, [params]);

  if (!id) return null;

  return (
    <>
      <Header />
      <DetailThreeDAssets id={id} />
    </>
  );
} 