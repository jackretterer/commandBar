import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-amber-50 p-24">
      <div className="w-full max-w-4xl text-center">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-blue-900">Welcome to Our Landing Page</h1>
          <p className="mt-4 text-xl text-blue-900">Discover amazing features and join our community</p>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center">
          <img src="https://res.cloudinary.com/dko9vskvn/image/upload/v1714544130/Dog_Girl_1_yfaoxr.png" alt="Hero Image" className="rounded-lg" />
          <Link href="/product">
          <button className="mt-8 px-6 py-3 bg-blue-900 text-amber-50 text-lg rounded-lg shadow-lg hover:bg-blue-700">
            Get Started
          </button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900">Feature One</h2>
            <p className="mt-2 text-blue-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900">Feature Two</h2>
            <p className="mt-2 text-blue-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900">Feature Three</h2>
            <p className="mt-2 text-blue-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="mt-16">
          <p className="text-blue-900">&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
