"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function DetailTemplates({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="templates"
      categoryDisplayName="Templates"
      buttonText="Download Now"
      altTextSuffix=" Template"
    />
  );
}
