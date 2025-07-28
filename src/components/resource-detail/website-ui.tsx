"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function DetailWebsiteUI({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="website-ui-kit"
      categoryDisplayName="Website UI Kit"
      buttonText="Download Now"
      altTextSuffix=" Website UI"
    />
  );
}