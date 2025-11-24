"use client";

import Link from 'next/link';
import { useAppSelector } from '../hooks/useAppSelector';
import FeatureTabs, { FeatureItem } from '../components/FeatureTabs';

// Home page for the Axiom clone. This page introduces the product with
// a hero section, followed by key features, architecture highlights and
// a FAQ. It uses a dark theme consistent with the rest of the app and
// leverages Tailwind CSS for layout and styling.
export default function Home() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const ctaHref = isLoggedIn ? '/discovery' : '/discovery';

  // Data used to drive the feature tabs. Each entry includes a title
  // displayed in the tab list, a subtitle that summarises the value
  // proposition and a detailed description shown when the tab is
  // active. These values are inspired by the official Axiom marketing
  // copy provided by the user.
  const features: FeatureItem[] = [
    {
      title: 'Order Execution Engine',
      subtitle: 'Trade with confidence.',
      description:
        'Our lightning‑fast order execution engine lands your limit orders in ≤ 1 block using co‑located nodes and proprietary infrastructure. This ensures minimal slippage and optimal price discovery on every trade.',
    },
    {
      title: 'Wallet & Twitter Tracker',
      subtitle: 'Trade and track all in one place.',
      description:
        'Monitor your wallets and favourite Twitter accounts side‑by‑side in a single dashboard. Stay on top of your on‑chain positions and social sentiment without ever leaving the Axiom platform.',
    },
    {
      title: 'Hyperliquid Perpetuals',
      subtitle: 'Trade leveraged Perps.',
      description:
        'Access hyper‑liquid perpetual contracts on leading DEXs with up to 50× leverage. Enjoy deep liquidity, tight spreads and real‑time funding rates to make informed trading decisions.',
    },
    {
      title: 'Yield',
      subtitle: 'Earn while you sleep.',
      description:
        'Deposit assets into curated DeFi yield strategies and earn competitive returns automatically. Our smart contracts compound your earnings and manage risk on your behalf.',
    },
  ];

  // Frequently asked questions. Each entry has a question and an
  // accompanying answer. These can be expanded by the user to read
  // additional information.
  const faqs = [
    {
      question: 'What is Axiom?',
      answer:
        'Axiom is a trading platform designed to be the only application you need to trade on-chain. We offer a suite of integrations that allow you to trade the hottest assets, all in one place.',
    },
    {
      question: 'How secure is Axiom?',
      answer:
        'The Axiom wallet is fully non-custodial, secured by Turnkey’s scalable infrastructure for managing private keys across blockchains. With air-gapped architecture, it ensures robust security, seamless recovery and protection from vulnerabilities.',
    },
    {
      question: 'Can I buy crypto on Axiom?',
      answer:
        'Yes. We integrate with leading on-ramps and decentralized exchanges to help you purchase and trade crypto assets directly on-chain.',
    },
    {
      question: 'How does Axiom offer yield?',
      answer:
        'Axiom aggregates proven DeFi yield strategies, allowing you to deposit assets and earn competitive returns automatically.',
    },
    {
      question: 'Is Axiom decentralized?',
      answer:
        'Axiom is built on decentralized, non-custodial infrastructure. You always maintain ownership of your keys and funds.',
    },
  ];

  return (
    <main className="bg-gray-950 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Decorative background layers: nested gradient rectangles to mirror the official design */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          {/* Largest panel */}
          <div className="h-[80%] w-[80%] rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 opacity-50" />
          {/* Middle panel */}
          <div className="absolute h-[60%] w-[60%] rounded-3xl bg-gradient-to-br from-blue-800 via-blue-600 to-indigo-600 opacity-60 translate-y-8" />
          {/* Smallest panel */}
          <div className="absolute h-[40%] w-[40%] rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-600 opacity-70 translate-y-16" />
        </div>
        {/* Foreground content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-7xl font-bold mb-6">The Gateway to DeFi</h1>
          <p className="text-lg sm:text-2xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Axiom is the only trading platform you&#39;ll ever need.
          </p>
          <Link
            href={ctaHref}
            className="inline-block px-8 py-3 rounded-md bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Start Trading
          </Link>
          <div className="mt-10 text-gray-400 text-sm flex justify-center items-center gap-2">
            <span>Backed by</span>
            <span className="bg-white text-gray-800 px-2 py-1 rounded font-semibold">
              Y Combinator
            </span>
          </div>
        </div>
      </section>
      {/* Features Section: interactive tabbed interface */}
      <section className="py-16 px-4">
        {/* Section heading matches the marketing copy provided by the user */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Advanced Features to videoline Your Trading
        </h2>
        <FeatureTabs features={features} />
      </section>
      {/* Architecture Section */}
      <section className="py-16 px-4 bg-gray-900">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Architecture
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Integrations card */}
          <div className="border border-gray-800 rounded-lg bg-gray-800 p-6">
            <h3 className="text-2xl font-semibold mb-2">Integrations</h3>
            <p className="text-gray-400 mb-4">
              Axiom integrates all the different protocols and applications you use,
              giving you a seamless trading experience.
            </p>
            <div className="flex justify-around mt-6">
              <span className="p-2 bg-blue-700 rounded-full">C</span>
              <span className="p-2 bg-green-600 rounded-full">S</span>
              <span className="p-2 bg-purple-600 rounded-full">P</span>
              <span className="p-2 bg-yellow-500 rounded-full">Y</span>
            </div>
          </div>
          {/* Non-custodial card */}
          <div className="border border-gray-800 rounded-lg bg-gray-800 p-6">
            <h3 className="text-2xl font-semibold mb-2">Non‑Custodial</h3>
            <p className="text-gray-400 mb-4">
              Your keys, your coins. Axiom’s non‑custodial wallet architecture is
              secured by air‑gapped infrastructure to protect your assets.
            </p>
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-10 w-10 bg-blue-600 rounded-full">
                  <span className="font-bold text-lg">🔑</span>
                </div>
                <div className="flex items-center justify-center h-10 w-10 bg-green-600 rounded-full">
                  <span className="font-bold text-lg">👤</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <details key={idx} className="mb-4 rounded-lg bg-gray-900 p-4">
              <summary className="cursor-pointer text-lg font-medium">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}