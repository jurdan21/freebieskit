"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function DetailDesignSystem({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="design-system"
      categoryDisplayName="Design System"
      buttonText="Go to Site"
      altTextSuffix=" Design System"
    />
  );
}