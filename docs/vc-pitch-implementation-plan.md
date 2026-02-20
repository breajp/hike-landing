# Hike Landing Page - VC Pitch & Aesthetic Overhaul

## Objective
Refine the entire landing page to serve as an ultra-premium, conversion-focused pitch for Venture Capitals (specifically 17Sigma). The design needs to match the modern, sleek, liquid-glass dark UI references provided (e.g., deep fluid gradients, fine borders, sophisticated typography, minimal "noise"). 

## Key Areas of Improvement

1.  **Storytelling & Copywriting (VC Focus)**
    *   Rename "Poder" in the SideNav to something more professional like "Alianzas" (Alliances) or "Capacidad" (Capabilities). "Poder" sounds a bit vague.
    *   Ensure the narrative clearly flows: *Who we are (Hike x Sigma) -> Whom we serve (Clients) -> Why we exist (Mission) -> Why we win (Team & Partners) -> How we got here (History) -> How we do it (Methodology) -> What we do (Units) -> How we align (Pricing).*
    *   Sharpen copy to sound hyper-executive, focusing on metrics, engineering prowess, and scaling.

2.  **Units Section (Collapsible & Sleek)**
    *   The user requested "mejorame las unidades, que sean desplegables". Currently, they use a click-to-expand mechanism, but we can make the UI much sleeker, utilizing the liquid glass aesthetic from the references. 
    *   We will redesign them into a vertical accordion or a grid of sleek cards that expand dynamically with better micro-animations and glowing borders.

3.  **Global UI / UX Enhancements (Based on References)**
    *   **Gradients & Glows:** The references use deep, localized "liquid" mesh gradients (blues, cyans, slight purples) on a dark/pitch-black canvas. We will refine our aurora blobs to match this "liquid glass" feel.
    *   **Borders & Cards:** Ultra-thin borders (`border-white/5` or `border-white/10`), deep backdrop blurs, and localized glowing borders on hover.
    *   **Typography:** Keep the elegant, fine typography (`font-light`, `tracking-wide`) instead of the brutalist large text.

## Execution Steps

- [ ] **Step 1:** Update `SideNav.tsx` to rename "Poder" to "Alianzas" or "Respaldo" for better context.
- [ ] **Step 2:** Refactor `UnitsSection.tsx` into an ultra-premium vertical accordion to satisfy "que sean desplegables" beautifully, using Framer Motion for liquid-smooth opening/closing.
- [ ] **Step 3:** Overhaul `PartnershipsSection.tsx` to use sleek glassmorphic cards with glowing localized borders, maximizing the VC appeal of the "95% engineers", "McKinsey", and "GCP" data points.
- [ ] **Step 4:** Refine the background glows in `page.tsx` and `MethodologySection.tsx` to match the sophisticated "liquid UI" (deep blue, cyan, minimal purple) seen in the reference images.
- [ ] **Step 5:** Review the timeline and pricing section for consistency in the newly established "liquid glass / premium VC" aesthetic.
