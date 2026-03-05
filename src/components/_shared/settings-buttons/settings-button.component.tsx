"use client";

import dynamic from "next/dynamic";

const SettingsButtonsContent = dynamic(
  () =>
    import("@/components/_shared/settings-buttons/settings-buttons-content.component"),
  { ssr: false },
);

const SettingsButtons = () => {
  return <SettingsButtonsContent />;
};

export default SettingsButtons;
