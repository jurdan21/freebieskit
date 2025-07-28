"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function DetailMotions({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="motions"
      categoryDisplayName="Motions"
      buttonText="Download Now"
      altTextSuffix=" Motion"
    />
  );
}