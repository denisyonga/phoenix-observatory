import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PhoenixOperationsCentre
  from "./components/PhoenixOperationsCentre";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-100">
        <PhoenixOperationsCentre />
      </main>

      <Footer />
    </>
  );
}