import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'InnovateBox',
  description: 'InnovateBox delivers custom AI-driven learning boxes to small businesses, providing them with the latest tools and resources in health tech, productivity, and web3/blockchain, aimed at boosting innovation within teams.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">InnovateBox</h1>
      <p className="mt-4 text-lg">InnovateBox delivers custom AI-driven learning boxes to small businesses, providing them with the latest tools and resources in health tech, productivity, and web3/blockchain, aimed at boosting innovation within teams.</p>
    </main>
  )
}
