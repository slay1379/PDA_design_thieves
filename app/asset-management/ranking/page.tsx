import Header from "@/components/Header"
import Hero from "@/components/Hero"
import RankingGrid from "@/components/RankingGrid"
import SecondGrid from "@/components/SecondGrid"
import Footer from "@/components/Footer"

export default function RankingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <RankingGrid />
        <SecondGrid />
      </main>
      <Footer />
    </div>
  )
}
