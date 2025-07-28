"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function DetailPresentations({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="presentations"
      categoryDisplayName="Presentations"
      buttonText="Download Now"
      altTextSuffix=" Presentation"
    />
  );
}