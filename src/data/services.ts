export interface Service {
  /** Category from the design (shown above the heading when it differs). */
  category: string;
  heading: string;
  summary: string;
  points?: { label: string; text: string }[];
  note?: string;
}

export const services: Service[] = [
  {
    category: 'Commerce strategy',
    heading: 'Commerce strategy',
    summary:
      'Prioritize the digital roadmap and connect platform decisions to your business goals, so time and investment go where they matter most.',
  },
  {
    category: 'Platforms & technology',
    heading: 'Shopify & BigCommerce development',
    summary:
      'Build and improve storefronts, customize themes, connect the systems behind them, and guide platform migrations from selection to launch.',
  },
  {
    category: 'Experience & growth',
    heading: 'Performance, SEO & agentic commerce readiness',
    summary: 'Make the storefront faster, easier to shop, and easier to find.',
    points: [
      {
        label: 'Storefront performance',
        text: 'Diagnose slow pages with Core Web Vitals and prioritize fixes to images, scripts, and rendering.',
      },
      {
        label: 'Conversion',
        text: 'Pair speed improvements with conversion analysis to see where customers struggle to browse, add to cart, or check out.',
      },
      {
        label: 'Technical SEO',
        text: 'Cover the fundamentals: crawlability, indexability, and product structured data.',
      },
      {
        label: 'Answer engine optimization (AEO)',
        text: 'Make product information and buying answers easier for AI tools to interpret, with a readiness audit and prioritized roadmap covering product data, discovery, and the path from catalog to checkout.',
      },
    ],
    note: 'Findings separate what can be verified on the live storefront from what needs platform access. The goal is a clear list of what to fix first, not promised rankings, AI citations, or agent checkout compatibility.',
  },
  {
    category: 'Leadership & delivery',
    heading: 'Leadership & delivery',
    summary:
      'Bring business and technical teams together, set clear priorities, and lead implementation through to delivery.',
  },
];
