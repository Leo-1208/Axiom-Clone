"use client";

import React, { useState } from 'react';

/**
 * Data structure describing a single trading feature. Each entry has
 * a title displayed in the tab, a short tagline shown beneath the
 * title when active, an extended description and an optional image
 * placeholder. If an image is supplied the component will render it
 * alongside the description.
 */
export interface FeatureItem {
  /** The label shown in the tab list */
  title: string;
  /** A brief tagline that summarises the value proposition */
  subtitle: string;
  /** The detailed description to be displayed when active */
  description: string;
  /** Optional image source to illustrate the feature */
  image?: string;
  /** Optional video source to illustrate the feature. If provided this
   *  takes precedence over the image when rendering the panel. Use
   *  a relative path pointing into the public directory (e.g.
   *  "/automatic-placement.mp4"). */
  video?: string;
}

interface FeatureTabsProps {
  /** Collection of feature definitions to render */
  features: FeatureItem[];
}

/**
 * FeatureTabs renders a horizontal tab navigation for a set of trading
 * features. When a tab is selected its corresponding description and
 * optional illustration appear in a panel below. This component is
 * intentionally client-side only because it relies on stateful
 * interaction to switch between tabs. The appearance is adapted for
 * dark mode with subtle borders and hover states.
 */
export default function FeatureTabs({ features }: FeatureTabsProps) {
  // Track the index of the currently selected feature
  const [activeIdx, setActiveIdx] = useState(0);

  const activeFeature = features[activeIdx];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tab list */}
      <div className="flex overflow-x-auto border-b border-gray-800 mb-8">
        {features.map((feat, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={feat.title}
              onClick={() => setActiveIdx(idx)}
              className={
                'flex-shrink-0 px-4 sm:px-6 py-4 text-sm sm:text-base font-medium ' +
                (isActive
                  ? 'text-white border-b-2 border-blue-500'
                  : 'text-gray-400 hover:text-white hover:border-blue-500')
              }
            >
              {feat.title}
            </button>
          );
        })}
      </div>
      {/* Active panel */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Description area */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2">{activeFeature.title}</h3>
          <p className="text-blue-300 mb-4">{activeFeature.subtitle}</p>
          <p className="text-gray-400 leading-relaxed">{activeFeature.description}</p>
        </div>
        {/* Illustration if provided. Prefer video over image when both are supplied */}
        {activeFeature.video ? (
          <div className="flex-1 flex justify-center items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <video
              src={activeFeature.video}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-lg max-h-72 w-full"
            />
          </div>
        ) : activeFeature.image ? (
          <div className="flex-1 flex justify-center items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeFeature.image}
              alt={activeFeature.title}
              className="rounded-lg shadow-lg max-h-72 object-contain"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}