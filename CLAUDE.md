# BradFabian.com

Build a responsive, single-page consulting website for Brad Fabian. The site should help retail and e-commerce leaders understand Brad's services and book a 30-minute introductory call. Brad is the person clients work with directly. Position him as an independent advisor whose career has been at the intersection of technology and commerce. He brings hands-on development and e-commerce leadership together to help retailers improve site performance, conversion, and profitability.

## Start here

- Inspect the project root and existing configuration before editing. For a new repository, use Astro with static output, Tailwind CSS, and TypeScript where useful. Follow official setup instructions for the installed versions. Reuse a working stack if Brad has already chosen one for this repository.
- Treat `.claude/reference/Brad_Fabian_Website_Visual_Design.pdf` as the visual reference and `.claude/reference/Brad_Fabian_Website_Design_Brief.pdf` as the specification. If the mockup HTML is supplied, use it for exact copy and layout details. The PDFs and images are supplied separately.
- Build the homepage in one pass, then review it against the visual reference at desktop and mobile widths. When a reference file is missing, use the specs below to build what you can and identify the missing asset in the handoff.

## Page structure

| Section                | Build                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Header                 | Transparent BF wordmark. Desktop links to Expertise, About, and Book a call. Keep the booking action visible on mobile.                                                                                                                                                                                                                                            |
| Hero                   | Left side: “Big picture. Real progress. Personally.” Set “Personally.” in teal Georgia Italic. Use the positioning copy below to explain how Brad combines commerce strategy and hands-on technical work to improve profitability. Primary CTA: “Book an introductory call” to `#book`. Right side: arched Wynwood-inspired BF mural with an offset coral backing. |
| Expertise `#expertise` | “Clarity at the top. Momentum on the ground.” Use a two-column service grid for Commerce strategy, Platforms & technology, Experience & growth, and Leadership & delivery. Use the service positioning below for the card copy. Stack on mobile.                                                                                                                   |
| About `#about`         | Deep teal section with Brad's square portrait on the left and “Strategy is personal. So is the work.” on the right. Add a fine coral frame and show how his progression from web development to e-commerce leadership shaped his ability to make commercial decisions and lead technical execution. Use the About copy below. Link to `#book`.                     |
| Approach               | Soft sage section headed “Understand it. Align it. Make it happen.” Use three numbered steps: Start with the business, Connect the moving parts, Stay close to the work.                                                                                                                                                                                           |
| Booking `#book`        | “A little time. A clearer next step.” Add a meeting summary for a 30-minute introductory video call and space for a live scheduling embed.                                                                                                                                                                                                                         |
| Inquiry `#contact`     | “What’s your next move?” Keep a written contact option for people who prefer email.                                                                                                                                                                                                                                                                                |
| Footer                 | Brad Fabian, copyright, and Miami location. Include a privacy link if a privacy page is provided.                                                                                                                                                                                                                                                                  |

## Service positioning

Keep the four-card layout from the design PDFs. Use the following copy direction when building the homepage.

- **Commerce strategy:** Help retail leaders prioritize the digital roadmap and connect platform decisions to business goals.
- **Shopify & BigCommerce development** (Platforms & technology): Build and improve storefronts, customize themes, connect systems, and guide platform migrations. Make both platform names visible in the card heading.
- **Performance, SEO & agentic commerce readiness** (Experience & growth): Feature storefront performance optimization explicitly. Diagnose slow pages with Core Web Vitals and prioritize fixes to images, scripts, and rendering. Pair speed improvements with conversion analysis to identify where customers struggle to browse, add to cart, or check out. Cover technical SEO fundamentals such as crawlability, indexability, and product structured data. Explain answer engine optimization (AEO) in plain language as making product information and buying answers easier for AI tools to interpret. Offer a readiness audit and prioritized roadmap covering product data, discovery, and the path from catalog to checkout. Separate what can be verified on the storefront from what requires platform access. Avoid promises of rankings, AI citations, or agent checkout compatibility.
- **Leadership & delivery:** Bring business and technical teams together, set priorities, and lead implementation.

Use this hero introduction: “I help retailers build faster, more profitable e-commerce sites. I bring commerce strategy and hands-on technical expertise to Shopify and BigCommerce, from deciding what to fix to getting it done.” Keep the main booking CTA.

Use this About opening: “My career has always been at the intersection of technology and commerce. I started in web development and went on to lead e-commerce. That experience helps me see where a site is losing sales or costing more than it should, decide what will make the biggest difference, and lead the work to fix it.”

## Design tokens and assets

- Deep teal `#073E45`, coral `#EE816F`, warm ivory `#F6F3EC`, muted teal `#397A7A`, slate body text `#496267`, soft sage `#E5ECE5`, and dividers `#CCD5CE`. Use coral primarily for decorative accents.
- Use Arial with Helvetica and sans-serif fallbacks for body, navigation, and the main hero text. Use Georgia with a serif fallback for section headings and the italic hero emphasis. Keep body text around 14–17 px with a 1.7 line height. Use fluid hero and section headings, following the brief.
- Use a 1,480 px maximum page width. Start with 5% side padding for the hero and 7% for content sections. Stack major layouts at about 760 px and use 6% side padding on narrow screens. Keep the mural and portrait legible without clipping important details.
- Place the supplied transparent logo, original mural, and portrait in `src/assets/` or the established asset directory. Expected filenames are `brad-fabian-logo-transparent.png`, `wynwood-bf.png`, and `brad-fabian-portrait.webp`. The older web-assets ZIP contains an ivory-background logo, so use the separately supplied transparent PNG. Preserve alpha if converting the logo to WebP.
- Use responsive image sizes and explicit dimensions. Prioritize loading the hero mural and defer below-the-fold portraits. Give the portrait descriptive alt text and use an empty alt attribute on decorative images when nearby text conveys the same information.

## Booking and inquiry

- Use a verified Calendly or Cal.com event URL supplied by Brad. Provide a direct booking link alongside the embed and defer loading the embed until needed. Keep the event URL configurable.
- Until a real event URL is supplied, keep any sample calendar clearly labeled as a preview for local review. For the public site, use a verified email contact as the call-to-action fallback, if available. Never display sample availability or claim a meeting was booked on the public site.
- For written inquiries, start with a verified email link. If Brad supplies a form provider, use name, email, and project details, with accessible labels and clear validation, success, and failure states. The mockup's clipboard action is a prototype. Never imply that copying a brief sent a message.
- Never guess the scheduling URL, public inbox, analytics IDs, testimonials, client names, or performance claims. Keep credentials out of source and client bundles.

## CSS, Tailwind, and JavaScript rules

- **Tailwind:** Follow the installed version and the project's existing setup. Use utilities for layout, spacing, typography, and responsive states. Put repeated colors, spacing, and type values in shared tokens. Extract repeated markup into Astro components and reserve one-off values for details from the mockup.
- **CSS:** Use the global stylesheet for design tokens and base styles. Use scoped CSS for distinctive details such as the mural arch and portrait frame. Build mobile first with Grid or Flexbox and fluid sizing. Keep custom styles close to the component they affect.
- **JavaScript:** Render content and section navigation as static HTML. Use native links, buttons, and form controls first. Add small Astro scripts only for interactions that need them, such as loading the scheduler. Preserve the direct booking link if the embed fails or JavaScript is unavailable.
- **Dependencies and performance:** Keep the page static. Add dependencies only for a concrete requirement. Load the scheduler on demand and avoid adding a client framework, global state, or animation library for simple interactions.
- **Verification:** After styling or interaction changes, check keyboard focus, zoom and narrow-screen overflow, reduced motion, and the booking fallback. Compare the result against both design PDFs.

## Build and review

- Use `src/pages/index.astro`, a shared layout, focused section components, and one global stylesheet for tokens and base styles. Keep the HTML semantic and add JavaScript only where the interaction needs it. Use Astro components for the layout without introducing a frontend framework or backend for this page.
- Use a single H1, logical headings, visible focus, keyboard-operable controls, sufficient contrast, and reduced-motion support. Confirm the primary CTA and section links work.
- Set title, description, favicon, Open Graph metadata, and the production canonical URL when the domain is confirmed. Keep staging out of search indexes.
- Run the project's build and configured checks. Review the rendered page at roughly 375, 768, 1,024, and 1,440 px. Verify images load, layouts do not overflow, and booking or inquiry states reflect what actually happened.
- Report the files changed, the checks run, and any missing launch inputs. Keep the preview local until Brad authorizes deployment or domain changes.
