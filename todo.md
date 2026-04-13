# Wessel Braakman - Professional Portfolio Website

## Design Guidelines

### Design References
- **Modern consultant portfolio**: Clean, professional, minimal with strong typography
- **Style**: Dark modern professional + subtle tech accents

### Color Palette
- Primary Background: #0F172A (Deep Navy)
- Secondary Background: #1E293B (Slate)
- Card Background: #1E293B with border #334155
- Accent: #6366F1 (Indigo/Purple - ties to NAIE branding)
- Accent Secondary: #22D3EE (Cyan - tech feel)
- Text Primary: #F8FAFC (White)
- Text Secondary: #94A3B8 (Slate gray)
- Text Muted: #64748B

### Typography
- Headings: Inter, font-weight 700
- Body: Inter, font-weight 400
- Monospace accents: JetBrains Mono (for tech keywords)

### Key Component Styles
- Cards: Dark slate (#1E293B), 1px border (#334155), 12px rounded, subtle hover glow
- Buttons: Indigo gradient, white text, rounded-lg
- Timeline: Vertical line with glowing dots
- Skill badges: Small rounded pills with subtle borders
- Section transitions: Smooth fade-in on scroll

### Layout
- Single page scrolling portfolio
- Full viewport hero
- Alternating section backgrounds for visual rhythm
- Max-width container for content (1200px)

### Images to Generate
1. **hero-abstract-tech-network.jpg** - Abstract dark technology background with subtle network/connection lines in indigo and cyan tones, professional and modern (Style: minimalist, dark mood, 1024x576)
2. **about-quality-testing.jpg** - Abstract representation of software quality and testing, interconnected nodes, clean geometric patterns in dark blue tones (Style: minimalist, 1024x576)
3. **naie-ai-ethics.jpg** - Abstract representation of AI ethics, balance scales with neural network patterns, purple and blue tones (Style: minimalist, 1024x576)
4. **experience-timeline-bg.jpg** - Subtle dark gradient background with faint geometric grid pattern, professional feel (Style: minimalist, dark, 1024x576)

---

## Development Tasks

### Files to Create/Modify:
1. **src/pages/Index.tsx** - Main single-page portfolio with all sections
2. **src/components/HeroSection.tsx** - Hero with name, title, tagline
3. **src/components/AboutSection.tsx** - About me summary
4. **src/components/SkillsSection.tsx** - Skills, tools, certifications grid
5. **src/components/ExperienceSection.tsx** - Career timeline
6. **src/components/NaieSection.tsx** - NAIE & side projects
7. **src/components/ContactSection.tsx** - Contact & footer
8. **index.html** - Update title