export interface PricingTier {
  title: string;
  basicPrice: string;
  basicLabel: string;
  tiers?: { name: string; description: string }[];
  influencers?: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    title: "Video Editing",
    basicPrice: "$12* - $15*",
    basicLabel: "/per hour",
    tiers: [
      {
        name: "Medium",
        description:
          "Basic editing + Video Transition Effects / Fine Cut / Audio Normalizing / DVD Authoring",
      },
      {
        name: "Advanced",
        description:
          "Medium editing features + Video Enhancement / Audio Enhancement / Menu with customized chapters / Blu Ray Authoring",
      },
    ],
  },
  {
    title: "Audio Editing",
    basicPrice: "$10*",
    basicLabel: "/per hour",
    influencers: [
      "Number of microphones used",
      "Number of Participants in the Audio",
      "Desired Audio Quality",
    ],
  },
  {
    title: "Storyboarding",
    basicPrice: "$10*",
    basicLabel: "/per hour",
    influencers: [
      "Script / Scenario Complexity",
      "Number of Characters, Details in the Characters",
      "Number of Frames and Panels, Live Actions, Cartoons",
      "Details in the Backgrounds, and Objects used",
      "Inking and Coloring",
    ],
  },
];

export const pricingDisclaimer = [
  "At Video Caddy, we ensure that the information published on our website is always accurate and current. We make sincere efforts to keep all information on the site accurate and up-to-date along with the pricing.",
  "Please note that all prices displayed on our website are INDICATIVE, and final pricing is decided only after taking into the account various factors like nature of the project, complexity level, skill and experience of the resources, time required for completion and terms of contract. Prices displayed are subject to final approval at the time of order fulfillment, which could result in an increase or decrease in the price quoted on the website.",
];
