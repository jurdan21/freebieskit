'use client';
import React from "react";
import Header from "@/components/Header";
import DetailIllustrations from "@/components/resource-detail/illustrations";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    params.then(p => setId(p.id));
  }, [params]);

  if (!id) return null;

  return (
    <>
      <Header />
      <DetailIllustrations id={id} />
    </>
  );
} 