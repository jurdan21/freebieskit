"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function DetailSocialMedia({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="social-media"
      categoryDisplayName="Social Media"
      buttonText="Download Now"
      altTextSuffix=" Social Media"
    />
  );
}
