"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function DetailBrandingMockup({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="branding-mockup"
      categoryDisplayName="Branding Mockup"
      buttonText="Download Now"
      altTextSuffix=" Branding Mockup"
    />
  );
}
