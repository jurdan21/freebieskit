"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function DetailIcons({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="icons"
      categoryDisplayName="Icons"
      buttonText="Download Now"
      altTextSuffix=" Icon"
    />
  );
}
