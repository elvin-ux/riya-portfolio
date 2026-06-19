# Riya Francis Premium Desktop Hero Design

## Scope

This spec covers only the desktop hero section for Riya Francis's portfolio website. It does not define the rest of the one-page site, mobile behavior beyond basic non-goals, or implementation details for other sections.

## Goal

Create an elegant, premium, editorial-style desktop hero section for Riya Francis, positioned as a professional Event Host, Anchor, and MC. The hero should use the supplied stage photograph as the primary storytelling asset and immediately communicate warmth, confidence, credibility, and strong stage presence.

## Brand Impression

The final impression should feel like:

- A polished event host with real stage experience
- A warm and approachable public-facing personality
- A premium personal brand with media credibility
- An editorial portfolio, not a SaaS landing page

## Primary Asset

The hero is built around the supplied photograph of Riya on stage in a teal outfit holding a microphone.

Image requirements:

- Keep the microphone visible
- Keep the smile visible
- Preserve a nearly full-body composition
- Avoid aggressive cropping
- Let the image carry more visual weight than the copy

## Layout Direction

Use an asymmetrical two-column desktop layout within a centered container:

- `max-width: 1400px`
- `min-height: 100vh`
- Approximate split: `42% text / 58% image`

This is intentionally image-led. The photograph is strong enough to sell the brand on its own, so the image area should feel slightly larger than the text area.

## Composition Rule

Do not center the text and image perfectly against one another.

Required composition:

- Text sits slightly higher than vertical center
- Image sits slightly lower than vertical center

This offset should create the feel of a premium editorial spread rather than a templated hero block.

## Background

Use a soft luxury editorial background:

```css
background: linear-gradient(135deg, #FFF9F8 0%, #FEF4F3 100%);
```

Add these supporting layers with very low visual strength:

- Watercolor blush texture
- Fine floral line illustrations
- Soft light gradients

All decorative background elements should remain below roughly `8%` visual dominance. They should enrich the atmosphere without drawing focus away from the portrait.

## Navigation

The navigation should float transparently at the top of the hero.

Left side:

- `Riya Francis` rendered like an elegant handwritten signature
- Small uppercase descriptor beneath:
  `ANCHOR • MC • EVENT HOST`

Center nav items:

- `Home`
- `About`
- `Events`
- `Gallery`
- `Testimonials`
- `Contact`

Right side:

- `Book An Event` in a rose-colored button

Although there is no hero CTA inside the text area, the nav CTA remains present.

## Left Content

The left content column is intentionally restrained and editorial.

Content order:

1. `Hello, I'm`
2. `Riya Francis`
3. `You plan the celebration.`
   `I'll take care of the stage.`
4. `ANCHOR • MC • EVENT HOST`

Guidance:

- The emotional hook is the two-line stage promise
- The role line acts as a credential layer, not the main message
- Keep supporting copy minimal
- Do not add hero CTA buttons

Optional supporting sentence if spacing needs balance:

`Bringing warmth, presence, and polish to every celebration.`

This line should only be used if the composition needs it. It should not weaken the impact of the core hook.

## Typography

Type pairing:

- Headings and major titles: `Playfair Display`
- Body, nav, and interface text: `Manrope` or `Inter`

Specific hierarchy:

- `Riya Francis`
  - `Playfair Display`
  - Around `72px`
  - Weight `600`
  - Color `#1D1D1D`
- `Hello, I'm`
  - Soft rose accent
  - Color `#C58A92`
- Role line
  - Uppercase
  - Letter spacing around `4px`
  - Dark text with softened contrast

## Color System

- Primary rose: `#D97A87`
- Secondary rose: `#C58A92`
- Dark text: `#1E1E1E`
- Background: `#FFF9F8`
- Soft blush accent: `#F7E4E5`

The palette should remain warm, soft, and expensive-looking. Avoid anything neon, saturated, or app-like.

## Right Visual Area

The image treatment is the signature moment of the hero.

### Portrait Presentation

- Occupy approximately `85vh`
- Preserve a tall silhouette
- Show nearly full body
- Do not place the image inside a card, rectangle, phone frame, circle, or blob

### Frame Direction

The image should feel like a premium cutout emerging naturally from the page.

This should be achieved through masking, transparency, or a carefully softened edge treatment so the image blends with the atmosphere rather than reading as a pasted rectangle.

### Background Layers Behind Portrait

Layer 1:

- Large abstract blush shape
- Color `#F7E4E5`
- Organic, soft, curved silhouette

Layer 2:

- Soft circular glow
- `rgba(255, 210, 215, 0.3)`
- Blur approximately `120px`

Layer 3:

- Very subtle floral line art
- Placed behind the lower portion of the image

These layers should support the portrait and never overpower it.

## Floating Accent

Add one small refined badge near the portrait:

- `200+ Events Hosted`

Rules:

- Elegant and understated
- No flashy sparkle styling
- Small enough to feel like a detail, not a callout card

## Scroll Prompt

Place the scroll prompt at the bottom-left of the hero.

Copy:

- `Discover Her Journey`

Treatment:

- Thin line-based styling
- Small editorial typography
- Subtle line animation

This should feel like a magazine cue, not a website widget.

## Motion

Animation should be subtle and premium.

Allowed motion language:

- Gentle text reveal on load
- Soft portrait reveal
- Slow drifting glow behind the portrait
- Slight floating drift on the badge
- Thin animated scroll line

Avoid:

- Bouncy motion
- Strong parallax
- Flashy transitions
- SaaS-style microinteractions

## Non-Goals

Do not include:

- Hero CTA buttons in the left content block
- Overly symmetrical alignment
- Sharp boxed cards around the portrait
- Circular or blob image framing
- Dark, moody luxury aesthetics
- Tech-product styling cues
- Busy decorative textures

## Implementation Notes

This hero should be built with:

- Next.js 15
- TypeScript
- Tailwind CSS v4
- `shadcn/ui` where helpful for shared primitives
- `lucide-react` for any minimal icon use
- `framer-motion` for restrained motion

The hero should preserve the premium editorial composition on desktop first. Responsiveness can be solved later, but the desktop build should not be compromised by mobile-first simplifications during this phase.

## Success Criteria

The hero is successful if:

- The photo is clearly the focal point
- Riya feels credible, warm, and stage-ready at first glance
- The composition feels editorial rather than templated
- The text hierarchy feels premium and emotionally confident
- The page avoids generic SaaS or agency aesthetics
- The overall result looks ready for a personal event-host portfolio
