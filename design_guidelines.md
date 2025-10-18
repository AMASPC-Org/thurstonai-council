# Thurston AI Business Council - Design Guidelines

## Design Approach
**Framework**: Hybrid approach combining civic authority with modern tech design
- **Primary Inspiration**: Government/civic websites (whitehouse.gov, seattle.gov) for trustworthy, institutional feel
- **Secondary Influence**: Linear/Stripe for clean typography and minimal tech aesthetic
- **Key Principle**: Authoritative minimalism - every element serves a purpose, nothing decorative

## Color Palette

**Primary Colors:**
- Deep Tech Blue: `216 82% 28%` (Primary brand, headers, CTAs)
- Charcoal: `220 13% 18%` (Body text, secondary elements)
- Crisp White: `0 0% 100%` (Backgrounds, text on dark)

**Supporting Colors:**
- Light Blue Accent: `216 82% 92%` (Subtle backgrounds, hover states)
- Medium Gray: `220 9% 46%` (Secondary text, borders)
- Success Green: `142 76% 36%` (Form confirmations only)

**Usage Rules:**
- Hero sections: White text on Deep Tech Blue background
- Body sections: Alternate white and Light Blue Accent backgrounds
- Never use gradients - solid colors only for civic authority
- Borders: 1px Medium Gray for subtle separation

## Typography

**Font Families** (via Google Fonts):
- Headings: **Inter** (weights: 600, 700, 800) - modern, authoritative
- Body: **Inter** (weights: 400, 500) - consistent, highly readable
- Accent/Numbers: **IBM Plex Mono** (weight: 500) - for dates, times, technical elements

**Scale:**
- Hero H1: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- Page H1: text-4xl md:text-5xl, font-bold
- Section H2: text-3xl md:text-4xl, font-semibold
- Subsection H3: text-2xl md:text-3xl, font-semibold
- Body: text-base md:text-lg, leading-relaxed
- Small/Meta: text-sm, font-medium

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-16 md:py-24 lg:py-32
- Component gaps: gap-8 md:gap-12
- Content max-width: max-w-7xl for full sections, max-w-3xl for text-heavy content

**Grid Strategy:**
- Homepage hero: Single column, centered
- Features/Benefits: 2-column on tablet (md:grid-cols-2), 3-column on desktop (lg:grid-cols-3)
- Summit agenda: Single column timeline layout
- Get Involved: 2-column split (md:grid-cols-2)

## Logo & Branding

**Main Council Logo Placeholder:**
- SVG combining: Washington State Capitol dome (simplified outline), Mount Rainier silhouette, subtle circuit board pattern overlay
- Monochrome: White on dark backgrounds, Deep Tech Blue on light backgrounds
- Size: h-12 md:h-16 in navigation, h-24 md:h-32 in footer
- Placement: Top left of navigation, centered in footer

**Summit Event Logo:**
- Main council icon with "INAUGURAL SUMMIT 2026" in IBM Plex Mono, bold, uppercase
- Use on summit.html hero and event materials sections

## Component Library

**Navigation Bar:**
- Full-width, bg-white with subtle shadow
- Logo left, menu items right (horizontal desktop, hamburger mobile)
- Links: text-base font-medium, Deep Tech Blue hover state
- Fixed/sticky on scroll for easy access

**Hero Sections:**
- **Homepage**: Full-width Deep Tech Blue background, no image - pure typography focus
  - Large headline (text-5xl-7xl), white text
  - Subtitle in Light Blue Accent tint
  - Single prominent CTA button (bg-white, Deep Tech Blue text, rounded-md, px-8 py-4)
  - Height: min-h-[70vh], centered content

- **Internal Pages**: Simplified hero with page title, breadcrumb, white background
  - H1 in Deep Tech Blue
  - Height: py-16 md:py-24

**Call-to-Action Buttons:**
- Primary: bg-Deep Tech Blue, white text, px-8 py-4, rounded-md, font-semibold
- Secondary (on images/blue): bg-white/90 backdrop-blur-sm, Deep Tech Blue text
- Hover: Subtle scale transform (scale-105), no color change
- Size: text-base md:text-lg

**Cards (for features/sponsors):**
- bg-white, border border-Medium Gray, rounded-lg
- Padding: p-6 md:p-8
- Shadow: shadow-sm hover:shadow-md transition
- Icon at top (if applicable), heading, description

**Forms (Registration):**
- White background with subtle border
- Labels: text-sm font-medium, Charcoal
- Inputs: border-Medium Gray, rounded-md, px-4 py-3, focus:border-Deep Tech Blue
- Submit button: Primary CTA style
- Field layout: Single column on mobile, 2-column (first/last name) on desktop

**Timeline/Agenda:**
- Vertical timeline with connection line (border-l-2 border-Deep Tech Blue)
- Each item: Time in IBM Plex Mono (text-sm), title (text-lg font-semibold), description
- Circle markers at each point

**Footer:**
- bg-Charcoal, white text
- Three sections: Logo/mission, Quick links, Legal/copyright
- py-12 md:py-16, organized in grid (md:grid-cols-3)

## Page-Specific Layouts

**index.html:**
1. Hero (full-width, Deep Tech Blue, no image)
2. Mission statement (white bg, centered, max-w-3xl)
3. Three-column benefits (icons + text)
4. CTA section (Light Blue Accent bg)
5. Partner logos (white bg)

**about.html:**
1. Page hero
2. "Why We Started" (2-column text layout with pull quote)
3. Founding Partner section (logo + description, Light Blue Accent bg)
4. Vision/values cards (3-column grid)

**summit.html:**
1. Page hero with event logo
2. Event details grid (date, time, status in cards)
3. Venue Partner section (50/50 split: text + map embed)
4. Agenda timeline (single column)
5. Registration form (prominent, white card on Light Blue Accent bg)

**get-involved.html:**
1. Page hero
2. Two-column layout: Sponsors (left) | Speakers (right)
3. Each column: Icon, heading, description, mailto button
4. Full-width closing encouragement section

## Images & Visual Assets

**No Hero Images**: This site uses typography and color blocking instead of photography for civic authority

**Required Images/Graphics:**
- Council logo SVG (described above)
- Summit event logo SVG
- American Marketing Alliance SPC logo (footer)
- Thurston EDC logo (summit page, partner section)
- Icon set for features/benefits: Use Heroicons (outline style) in Deep Tech Blue

**Google Maps Embed:**
- Summit page venue section
- Embed size: w-full h-80 md:h-96, rounded-md
- Default zoom showing Thurston County area

## Accessibility & Responsiveness

- All text meets WCAG AA contrast ratios (verified against backgrounds)
- Focus states: 2px outline in Deep Tech Blue
- Mobile breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch targets: minimum 44x44px for all interactive elements
- Semantic HTML: proper heading hierarchy, nav landmarks, form labels

## Animation & Interaction

**Minimal, Purposeful Motion:**
- Smooth scroll for anchor links (scroll-smooth)
- Button hover: subtle scale (scale-105) + shadow increase, duration-200
- Card hover: shadow-md transition, duration-300
- Page transitions: None - instant navigation for authority
- Form validation: Instant feedback with Success Green checkmarks

**Avoid:** Loading animations, parallax effects, scroll-triggered reveals

This design creates a trustworthy, institutional presence that positions the Thurston AI Business Council as a credible, professional community organization while maintaining modern web standards.