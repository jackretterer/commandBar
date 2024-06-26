'use client';

import Image from "next/image";
import { init } from "commandbar";
import { useUser } from "@clerk/clerk-react";
import React, { useState, useEffect } from 'react';

// the argument is your organization's unique ID,
// which can be found in your Dashboard
init("5555a2a4");

interface SayHiArgs {
    name: string;
};

interface CatFacts {
    fact: string;
  };

export default function Product() {

    const { isSignedIn, user, isLoaded } = useUser();

    useEffect(() => {
        const loggedInUserId = user?.id
        window.CommandBar.boot(loggedInUserId);
    }, [user])

    window.CommandBar.addCallback(
        "sayHi",
        (args: SayHiArgs, context) => alert(`Hi there, ${args.name}!`)
    );

    window.CommandBar.addCallback(
        "print_cat_facts",
        (args: CatFacts, context) => console.log(`Cat Facts: ${args.fact}`)
    )


    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-amber-50 p-24">
            <div className="w-full max-w-4xl">
                {/* Header Section */}
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-blue-900">Hi {user?.firstName}, Checkout Product Name</h1>
                    <p className="mt-4 text-xl text-blue-900">A brief description of the product</p>
                </header>

                {/* Product Details Section */}
                <section className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="md:w-1/2 p-4">
                        <img src="https://res.cloudinary.com/dko9vskvn/image/upload/v1715359337/1._woman_greeting_gc6yyl.png" className="w-3/4"></img>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Product Features</h2>
                        <ul className="list-disc list-inside text-blue-900">
                            <li>Feature one</li>
                            <li>Feature two</li>
                            <li>Feature three</li>
                            <li>Feature four</li>
                        </ul>
                        <div className="mt-8">
                            <span className="text-3xl font-bold text-blue-900">$99.99</span>
                            <button className="ml-4 px-6 py-3 bg-blue-900 text-amber-50 text-lg rounded-lg shadow-lg hover:bg-blue-700">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </section>

                {/* Additional Information Section */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Additional Information</h2>
                    <p className="text-blue-900">Here you can provide more details about the product, usage instructions, or any other relevant information.</p>
                </section>

                {/* Footer Section */}
                <footer className="mt-16 text-center">
                    <p className="text-blue-900">&copy; 2024 Your Company. All rights reserved.</p>
                </footer>
            </div>
        </main>
    );
}
