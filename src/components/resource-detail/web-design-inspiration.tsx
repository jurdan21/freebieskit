"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function DetailWebDesignInspiration({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="web-design-inspiration"
      categoryDisplayName="Web Design Inspiration"
      buttonText="Download Now"
      altTextSuffix=" Web Design"
    />
  );
}
