import { GoogleAuthButton } from "@/components/googleAuthButton";
import { LeftSideDesign } from "@/components/leftSideDesign";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="flex-1 hidden lg:block">
        <LeftSideDesign />
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Image
              src="/horizon-logo.svg"
              alt="Horizon Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-white">
              Welcome to Horizon
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Your shield against phishing attacks
            </p>
          </div>
          <GoogleAuthButton />
        </div>
      </div>
    </div>
  );
}
