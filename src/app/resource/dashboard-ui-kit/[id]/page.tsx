'use client';
import React from "react";
import Header from "@/components/Header";
import DetailDashboardUI from "@/components/resource-detail/dashboard-ui";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    params.then(p => setId(p.id));
  }, [params]);

  if (!id) return null;

  return (
    <>
      <Header />
      <DetailDashboardUI id={id} />
    </>
  );
} 