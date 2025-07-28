"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function DetailMobileUI({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="mobile-ui-kit"
      categoryDisplayName="Mobile UI Kit"
      buttonText="Download Now"
      altTextSuffix=" Mobile UI"
    />
  );
}