"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <FadeIn direction="down" distance={10}>
        <div>
          <h1 className="text-2xl font-bold text-octo-dark">Settings</h1>
          <p className="text-sm text-octo-gray-500 mt-1">
            Manage your account settings and preferences.
          </p>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-octo-dark">Profile</h2>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <Input label="Name" defaultValue="Reynaldhi" />
            <Input label="Email" type="email" defaultValue="admin@octopaygate.com" />
            <Input label="Company" defaultValue="OCTOPayGate Inc." />
            <Button onClick={handleSave}>
              {saved ? "Saved!" : "Save Changes"}
            </Button>
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-octo-dark">Security</h2>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <Input label="Current Password" type="password" placeholder="Enter current password" />
            <Input label="New Password" type="password" placeholder="Enter new password" />
            <Input label="Confirm Password" type="password" placeholder="Confirm new password" />
            <Button>Update Password</Button>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
