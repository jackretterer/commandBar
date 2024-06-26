import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-amber-50 p-24">
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900">Meet Our Team</h1>
          <p className="mt-4 text-xl text-blue-900">The people behind our success</p>
        </header>

        {/* Team Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
            <img src="https://res.cloudinary.com/dko9vskvn/image/upload/v1718307953/Isabella_-_Dark_blue_pcnmm3.png" alt="Team Member 1" className="rounded-full shadow-lg" />
            <h2 className="mt-4 text-2xl font-bold text-blue-900">Jane Doe</h2>
            <p className="text-blue-900">CEO</p>
            <p className="mt-2 text-center text-blue-900">Jane is the visionary behind our company. With over 20 years of experience in the industry, she leads our team with passion and dedication.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
            <img src="https://res.cloudinary.com/dko9vskvn/image/upload/v1718307953/Old_man_-_Dark_Blue_lwhpuz.png" alt="Team Member 2" className="rounded-full shadow-lg" />
            <h2 className="mt-4 text-2xl font-bold text-blue-900">John Smith</h2>
            <p className="text-blue-900">CTO</p>
            <p className="mt-2 text-center text-blue-900">John is the tech guru of our team. He is responsible for overseeing the development and implementation of our cutting-edge technology.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
            <img src="https://res.cloudinary.com/dko9vskvn/image/upload/v1718307953/pink_ribbon_girl_-_dark_blue_txdlah.png" alt="Team Member 3" className="rounded-full shadow-lg" />
            <h2 className="mt-4 text-2xl font-bold text-blue-900">Emily Davis</h2>
            <p className="text-blue-900">COO</p>
            <p className="mt-2 text-center text-blue-900">Emily ensures our operations run smoothly. Her exceptional organizational skills keep our projects on track and our team motivated.</p>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="mt-16 text-center">
          <p className="text-blue-900">&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
