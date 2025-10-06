import React, { useState } from 'react';
import { ShoppingCart, User, Search, ChevronDown, Truck, Heart, Shield, MessageCircle } from 'lucide-react';
import Banner from "./Banner"
import Reviews from "./Reviews"

export default function BegumJhumkaPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "https://soluv.in/cdn/shop/files/IMG_6947.jpg?v=1757447784&width=1946",
    "https://soluv.in/cdn/shop/files/46_97e2bbf2-1e1a-48eb-8215-6b98755a8852.jpg?v=1757447784&width=1646",
    'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80'
  ];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
            <div className="text-center">
              <h1 className="text-3xl font-bold text-pink-600" style={{ fontFamily: 'cursive' }}>So luv</h1>
            </div>
            <div className="flex items-center gap-4">
              <User className="w-5 h-5 text-gray-600 cursor-pointer" />
              <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Earrings</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Pendants</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <span className="cursor-pointer">Ear Pins</span>
            <span className="cursor-pointer">Bracelets</span>
            <a
              href="https://soluv.in/collections/jewellery"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-pink-600 hover:text-pink-700"
            >
              Jewelry
            </a>
            <span className="cursor-pointer">Hair accessories</span>
            <span className="cursor-pointer">Handbags</span>
            <span className="cursor-pointer">Sahiba - Festive Edit</span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="mb-4">
              <img
                src={images[selectedImage]}
                alt="Begum Jhumka"
                className="w-full rounded-lg"
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`w-full aspect-square object-cover rounded cursor-pointer border-2 ${selectedImage === idx ? 'border-pink-600' : 'border-gray-200'}`}
                  onClick={() => setSelectedImage(idx)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ color: '#6b1942' }}>Begum Jhumka</h1>
            <Banner />

            <div className="mb-6">
              <p className="text-2xl font-semibold text-gray-900">Rs. 1,700.00</p>
              <p className="text-sm text-pink-600 mt-1">
                <span className="underline cursor-pointer">Shipping</span> calculated at checkout.
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={decreaseQuantity}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  −
                </button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-8">
              <button className="w-full py-3 border-2 border-pink-600 text-pink-600 rounded-full font-medium hover:bg-pink-50 transition">
                Add to cart
              </button>
              <button className="w-full py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition">
                Buy it now
              </button>
            </div>

            {/* Jewelry Collection Link */}
            <div className="mb-8">
              <a
                href="https://soluv.in/collections/jewellery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-600 underline hover:text-pink-700"
              >
                Browse Jewelry Collection
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b">
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold text-sm">Free Shpping</p>
                <p className="text-xs text-pink-600">No Extra Costs</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold text-sm">Crafted</p>
                <p className="text-xs text-pink-600">With Love</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold text-sm">Secure</p>
                <p className="text-xs text-pink-600">Checkout</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Our Begum jhumka is a dream come true for all the jhumka lovers out there! It features a multi-tiered classic bell shaped design, featuring pink and white stones, complete with a pearl fringe. This statement jhumka is ideal for weddings and special occasions!
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Material Used:</span> Gold plated brass
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12 md:mt-16">
          <Reviews />
        </div>
      </main>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          <span className="pr-2">Contact Us</span>
        </button>
      </div>

      {/* Get 15% OFF Banner */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-black px-2 py-8 text-xs font-bold transform -rotate-90 origin-left cursor-pointer">
        Get 15% OFF
      </div>
    </div>
  );
}