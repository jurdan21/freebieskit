'use client';
import React from "react";
import DetailBrandingMockup from "./branding-mockup";

type Props = {
  id: string;
};

export default function DetailBrandingMockupClient({ id }: Props) {
  return <DetailBrandingMockup id={id} />;
} 