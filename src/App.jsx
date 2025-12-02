// App.jsx — Vite + React + Tailwind + Framer Motion + Swiper
// Single-file starter (you can split components into files as needed)
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// -- Sample product data (images from Unsplash) --
const PRODUCTS = [
  {
    id: "tenda-2p",
    name: "Tenda 2-Person",
    price: "Rp 80.000/hari",
    short: "Tenda ringan & mudah dipasang, cocok untuk 2 orang.",
    images: [
      "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "tenda-4p",
    name: "Tenda 4-Person",
    price: "Rp 140.000/hari",
    short: "Lebih luas, nyaman untuk keluarga kecil.",
    images: [
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501959915551-4e8c7f0b4bde?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "matras",
    name: "Matras Camping",
    price: "Rp 25.000/hari",
    short: "Matras empuk, ringan dan tahan lama.",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "kompor",
    name: "Kompor Portable",
    price: "Rp 30.000/hari",
    short: "Kompor gas portable, mudah digunakan.",
    images: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

// ---------------- Navbar ----------------
function Navbar({ onToggleTheme, isDark }) {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed w-full z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold text-emerald-600 dark:text-emerald-300">
            CampGear Rent
          </div>
          <div className="hidden md:flex gap-4 text-sm text-gray-700 dark:text-gray-200">
            <button
              onClick={() => handleScroll("home")}
              className="hover:underline"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("features")}
              className="hover:underline"
            >
              Keunggulan
            </button>
            <button
              onClick={() => handleScroll("products")}
              className="hover:underline"
            >
              Produk
            </button>
            <button
              onClick={() => handleScroll("testi")}
              className="hover:underline"
            >
              Testimoni
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/628123456789"
            className="px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm hidden md:inline-block"
          >
            Pesan via WhatsApp
          </a>
          <button
            onClick={onToggleTheme}
            aria-label="toggle theme"
            className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}

// ---------------- Hero ----------------
function Hero() {
  return (
    <section id="home" className="pt-28 pb-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 dark:text-gray-100">
            Sewa Peralatan Kemah
            <br />
            <span className="text-emerald-600">Mudah</span> &{" "}
            <span className="text-emerald-600">Terjangkau</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
            Peralatan camping lengkap: tenda, matras, kompor, dan aksesori. Siap
            antar & jemput area sekitar. Pesan cepat lewat WhatsApp.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="https://wa.me/628123456789"
              className="px-5 py-3 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700"
            >
              Pesan Sekarang
            </a>
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-3 border rounded-lg text-sm text-gray-700 dark:text-gray-200"
            >
              Lihat Produk
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex-1"
        >
          <img
            src="https://images.unsplash.com/photo-1744843936424-b6206cde80e0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="camping hero"
            className="rounded-2xl shadow-lg w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

// ---------------- Features ----------------
function Features() {
  const items = [
    {
      title: "Peralatan Terawat",
      desc: "Semua alat kami diperiksa & dibersihkan setiap kali kembali.",
    },
    {
      title: "Harga Transparan",
      desc: "Tidak ada biaya tersembunyi, harga jelas per hari.",
    },
    { title: "Antar-Jemput", desc: "Layanan antar & jemput di area terdekat." },
  ];

  return (
    <section id="features" className="py-14 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Kenapa Pilih CampGear Rent?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl shadow-sm bg-gray-50 dark:bg-gray-800"
            >
              <h4 className="font-semibold text-emerald-600 mb-2">
                {it.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Product Modal ----------------
function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        ></div>

        <motion.div
          initial={{ y: 20, scale: 0.98 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="relative max-w-3xl w-full mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-4 flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {product.name}
              </h3>
              <p className="text-sm text-emerald-600 font-semibold">
                {product.price}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-600 dark:text-gray-200"
            >
              ✕
            </button>
          </div>

          <div className="p-4">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="rounded-lg overflow-hidden"
            >
              {product.images.map((src, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={src}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <p className="mt-4 text-gray-700 dark:text-gray-200">
              {product.short}
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href="https://wa.me/628123456789"
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
              >
                Pesan via WhatsApp
              </a>
              <button className="px-4 py-2 border rounded-lg" onClick={onClose}>
                Tutup
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ---------------- Products List ----------------
function Products({ onOpen }) {
  return (
    <section id="products" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
          Peralatan Kami
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={18}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={6000}
        >
          {PRODUCTS.map((p) => (
            <SwiperSlide key={p.id}>
              <motion.div whileHover={{ scale: 1.03 }} className="p-3">
                <div
                  onClick={() => onOpen(p)}
                  className="cursor-pointer bg-gray-50 dark:bg-gray-800 rounded-2xl shadow overflow-hidden"
                >
                  <img src={p.images[0]} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                      {p.name}
                    </h4>
                    <p className="text-emerald-600 font-bold mt-2">{p.price}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {p.short}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// ---------------- Testimonials ----------------
function Testimonials() {
  const tests = [
    {
      name: "Rina",
      text: "Peralatannya bersih & lengkap. Layanan antar sangat membantu!",
    },
    { name: "Dedi", text: "Harga terjangkau, proses sewa cepat. Recomended." },
  ];

  return (
    <section id="testi" className="py-14 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Testimoni Pelanggan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tests.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow"
            >
              <p className="italic text-gray-700 dark:text-gray-200">
                “{t.text}”
              </p>
              <p className="mt-3 font-semibold text-emerald-600">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- CTA & Footer ----------------
function CTA() {
  return (
    <section className="py-12 bg-emerald-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-xl font-bold">Siap Berpetualang?</h3>
        <p className="mt-2">
          Pesan peralatan kemah sekarang dan nikmati diskon khusus untuk
          pemesanan awal.
        </p>
        <a
          href="https://wa.me/628123456789"
          className="inline-block mt-4 px-6 py-3 bg-white text-emerald-600 rounded-lg font-semibold"
        >
          Pesan via WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-700 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        © {new Date().getFullYear()} CampGear Rent. All rights reserved.
      </div>
    </footer>
  );
}

// ---------------- Main App ----------------
export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [openProduct, setOpenProduct] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar onToggleTheme={() => setIsDark((s) => !s)} isDark={isDark} />

      <main>
        <Hero />
        <Features />
        <Products onOpen={(p) => setOpenProduct(p)} />
        <Testimonials />
        <CTA />
      </main>

      <Footer />

      {/* Modal */}
      <AnimatePresence>
        {openProduct && (
          <ProductModal
            product={openProduct}
            onClose={() => setOpenProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
