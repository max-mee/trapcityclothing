import React, { useState } from "react";
import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Instagram, Facebook, Twitter, Sun, Moon } from "lucide-react";
import Link from "next/link";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "min-h-screen bg-black text-white" : "min-h-screen bg-white text-black"}>
      <Head>
        <title>Trap City Clothing - Premium Streetwear & Urban Fashion</title>
        <meta name="description" content="Shop the latest streetwear trends at Trap City Clothing. Limited Drops, Exclusive Collections, and High-Quality Urban Fashion." />
        <meta name="keywords" content="Trap City Clothing, streetwear, urban fashion, hoodies, t-shirts, exclusive collections" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Trap City Clothing - Premium Streetwear & Urban Fashion" />
        <meta property="og:description" content="Shop the latest streetwear trends at Trap City Clothing. Limited Drops, Exclusive Collections, and High-Quality Urban Fashion." />
        <meta property="og:image" content="/hero.jpg" />
        <meta property="og:url" content="https://www.trapcityclothing.com" />
      </Head>
      <header className="flex justify-between items-center p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Trap City Clothing</h1>
        <nav className="space-x-4">
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <Sun /> : <Moon />}</Button>
          <Button className="flex items-center">
            <ShoppingCart className="mr-2" /> Cart
          </Button>
        </div>
      </header>

      <section className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-4xl font-bold">Streetwear Redefined</h2>
          <p className="mt-2">Limited Drops | Exclusive Collections</p>
          <Button className="mt-4 px-6 py-3 bg-red-500 hover:bg-red-600">Shop Now</Button>
        </div>
      </section>

      <footer className="p-6 bg-black border-t border-gray-700 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Instagram className="cursor-pointer" />
          <Facebook className="cursor-pointer" />
          <Twitter className="cursor-pointer" />
        </div>
        <p className="text-gray-400">© 2025 Trap City Clothing. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
