// components/ui/Navbar/Navbar.tsx
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-amber-50 shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-16">
        <Link href="/">
          <div className="flex items-center">
            <span className="font-bold text-3xl tracking-tight text-blue-900">
              Command Bar
            </span>
          </div>
        </Link>
        <div className="flex items-center">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="bg-blue-950 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
