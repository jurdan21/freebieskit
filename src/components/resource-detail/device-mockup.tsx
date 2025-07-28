"use client";

import BaseResourceDetail from "./BaseResourceDetail";

export default function DetailDeviceMockup({ id }: { id: string }) {
  return (
    <BaseResourceDetail
      id={id}
      categorySlug="device-mockup"
      categoryDisplayName="Device Mockup"
      buttonText="Download Now"
      altTextSuffix=" Device Mockup"
    />
  );
}