"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function DetailDashboardUI({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="dashboard-ui-kit"
      categoryDisplayName="Dashboard UI Kit"
      buttonText="Download Now"
      altTextSuffix=" Dashboard UI"
    />
  );
}
