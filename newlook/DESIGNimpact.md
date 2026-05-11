---
name: Compassionate Care System
colors:
  surface: '#fff8f8'
  surface-dim: '#e1d8d9'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf1f2'
  surface-container: '#f5eced'
  surface-container-high: '#efe6e7'
  surface-container-highest: '#e9e0e1'
  on-surface: '#1e1b1c'
  on-surface-variant: '#4c4640'
  inverse-surface: '#342f30'
  inverse-on-surface: '#f8efef'
  outline: '#7d766f'
  outline-variant: '#cec5bd'
  surface-tint: '#615e5c'
  primary: '#615e5c'
  on-primary: '#ffffff'
  primary-container: '#fef8f5'
  on-primary-container: '#75726f'
  inverse-primary: '#cac5c3'
  secondary: '#426649'
  on-secondary: '#ffffff'
  secondary-container: '#c4edc7'
  on-secondary-container: '#486d4f'
  tertiary: '#456551'
  on-tertiary: '#ffffff'
  tertiary-container: '#e8ffed'
  on-tertiary-container: '#587a64'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e7e1de'
  primary-fixed-dim: '#cac5c3'
  on-primary-fixed: '#1d1b1a'
  on-primary-fixed-variant: '#494644'
  secondary-fixed: '#c4edc7'
  secondary-fixed-dim: '#a8d0ac'
  on-secondary-fixed: '#00210b'
  on-secondary-fixed-variant: '#2b4e33'
  tertiary-fixed: '#c7ebd1'
  tertiary-fixed-dim: '#abcfb6'
  on-tertiary-fixed: '#012111'
  on-tertiary-fixed-variant: '#2d4d3a'
  background: '#fff8f8'
  on-background: '#1e1b1c'
  surface-variant: '#e9e0e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Open Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Open Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-padding: 120px
---

## Brand & Style

The brand personality of this design system is rooted in empathy, reliability, and serenity. It is designed to bridge the gap between the urgency of animal rescue and the professional transparency required for a non-profit organization. The emotional response should be one of "peaceful action"—making the user feel that while the problem is serious, the solution is handled with grace and competence.

The style is a blend of **Minimalism** and **Tactile Softness**. It prioritizes high-quality, soulful animal photography as the primary emotional driver, supported by a layout that breathes through generous whitespace. Visual elements avoid clinical coldness by using organic shapes and soft transitions, ensuring the NGO feels like a warm community rather than a rigid institution.

## Colors

The palette is anchored by a warm, bone-toned off-white (#FEF8F5) that serves as the canvas, preventing the "stark" feel of pure white. The primary interaction colors are Sage Green (#729877) and Forest Green (#53745F), which symbolize growth, healing, and nature. 

- **Primary/Background:** Used for all large surfaces and page backgrounds.
- **Secondary/Accents:** Used for primary call-to-action buttons, active states, and icons.
- **Deep Accents:** Used for hover states, footer backgrounds, and high-importance emphasis.
- **Typography/Dark:** A deep charcoal used for all text to ensure high legibility while remaining softer than pure black.

## Typography

This design system utilizes a classic serif/sans-serif pairing to communicate both tradition and modern accessibility. 

- **Headings:** 'Playfair Display' provides a literary, established feel that evokes trust. It should be used for all editorial storytelling and page headers.
- **Body:** 'Open Sans' offers a humanist touch with wide apertures, ensuring that long-form rescue stories remain legible and inviting.
- **Hierarchy:** Maintain a clear contrast between headings and body text. Use 'Display' sizes for hero sections where photography and text overlap.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a curated, editorial feel, transitioning to a fluid model for mobile devices.

- **Grid:** A 12-column grid is used for desktop (1280px max width). Content blocks, such as animal galleries, should utilize 3 or 4-column spans to provide images enough room to breathe.
- **Rhythm:** An 8px base unit drives all spacing. Large vertical gaps (120px+) between sections are encouraged to create a sense of calm and prevent information overload.
- **Mobile:** On mobile, margins reduce to 20px, and the 12-column grid collapses into a single-column stack. Photography should remain edge-to-edge or use a very small margin to maintain impact.

## Elevation & Depth

Visual hierarchy in this design system is achieved through **Ambient Shadows** and **Tonal Layering**. 

- **Shadows:** Use extremely soft, diffused shadows with a slight green tint (`rgba(83, 116, 95, 0.08)`) rather than neutral grey. This makes elements like cards feel like they are gently resting on the warm background.
- **Layers:** Most content stays on the base layer. Interactive cards or "Donate" modules may lift slightly on hover using a subtle vertical shift (-4px) and an increased shadow spread. 
- **Glassmorphism:** Reserved exclusively for navigation bars or image captions where text overlays photography, using a 12px blur and 80% opacity of the primary background color.

## Shapes

The shape language is consistently **Rounded**, avoiding sharp corners to maintain a friendly and safe aesthetic.

- **Buttons & Inputs:** Use the standard `rounded` (0.5rem) setting.
- **Cards & Large Containers:** Use `rounded-lg` (1rem) or `rounded-xl` (1.5rem) to soften the visual weight of large image containers.
- **Imagery:** Animal portraits should occasionally use organic, slightly asymmetrical "blob" masks or very high corner radii to emphasize the soft nature of the brand.

## Components

- **Buttons:** Primary buttons use a solid Sage Green background with white text. Secondary buttons use a Forest Green outline with a subtle 1px stroke. All buttons feature a 300ms transition on hover to a deeper shade.
- **Cards:** Used for animal profiles. They feature a top-heavy image layout, minimal padding for the text area below, and a very soft ambient shadow. No borders.
- **Input Fields:** Use a subtle Forest Green border (20% opacity) that strengthens on focus. Labels are always positioned above the field in the 'label-md' style.
- **Progress Bars:** For fundraising goals, use a thick, rounded track in a very light sage and a solid Forest Green fill to indicate progress clearly.
- **Chips/Tags:** Used for animal traits (e.g., "Vaccinated," "Friendly"). These are pill-shaped with a light sage background and deep green text, using the 'caption' typography style.
- **Donation Ticker:** A specialized component showing recent small donations to build community trust; it should be styled as a simple, elegant list with subtle dividers.