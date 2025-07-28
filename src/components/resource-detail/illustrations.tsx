"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function DetailIllustrations({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="illustrations"
      categoryDisplayName="Illustrations"
      buttonText="Download Now"
      altTextSuffix=" Illustration"
    />
  );
}