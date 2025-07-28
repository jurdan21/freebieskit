"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function DetailFonts({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="fonts"
      categoryDisplayName="Fonts"
      buttonText="Download Now"
      altTextSuffix=" Font"
    />
  );
}
