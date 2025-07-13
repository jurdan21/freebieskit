'use client';
import React from "react";
import Header from "@/components/Header";
import DetailWebsiteUI from "@/components/resource-detail/website-ui";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    params.then(p => setId(p.id));
  }, [params]);

  if (!id) return null;

  return (
    <>
      <Header />
      <DetailWebsiteUI id={id} />
    </>
  );
} 