import Footer from "./components/Footer";
import Header from "./components/Header";
import InteractiveMap from "./components/InteractiveMap";
import MapLegend from "./components/MapLegend";


export default function Home() {
  return (
    <>
      <Header />

      <MapLegend />

      <main className="min-h-screen bg-slate-100">
        <InteractiveMap />
      </main>

      <Footer />
    </>
  );
}