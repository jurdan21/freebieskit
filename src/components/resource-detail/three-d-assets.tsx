"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function Detail3DAssets({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="3d-assets"
      categoryDisplayName="3D Assets"
      buttonText="Download Now"
      altTextSuffix=" 3D Asset"
    />
  );
}
