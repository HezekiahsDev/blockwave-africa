# Leaflet Africa Map Component

An interactive, animated map component showcasing Web3 adoption across Africa using Leaflet.js.

## Features

### 🗺️ Interactive Map

- **Dark theme** optimized for the Blockwave brand
- **Centered on Africa** with proper zoom levels
- **Smooth panning** enabled for exploration
- **Limited zoom** (3-6) to keep focus on the continent

### 🎯 Major Tech Hubs

Displays 10 major African tech/Web3 hubs:

- **North Africa:** Cairo (Egypt), Tunis (Tunisia)
- **West Africa:** Lagos (Nigeria), Accra (Ghana), Dakar (Senegal)
- **East Africa:** Nairobi (Kenya), Addis Ababa (Ethiopia)
- **Central Africa:** Kinshasa (DRC)
- **Southern Africa:** Johannesburg (South Africa), Cape Town (South Africa)

### ✨ Animations

1. **Pulsing Markers** - Each hub has an animated, glowing marker
2. **Ripple Effects** - Dual ripple animations emanate from each marker
3. **Connection Lines** - Animated dashed lines show network connections
4. **Staggered Timing** - Sequential animation delays for organic feel

### 🎨 Visual Effects

- **Gradient colors** (green to cyan) matching brand
- **Glowing shadows** for depth and prominence
- **Custom tooltips** showing hub information on hover
- **Transparent background** for seamless integration

## Usage

```tsx
import LeafletAfricaMap from "@/components/ui/graphics/LeafletAfricaMap";

// Basic usage
<LeafletAfricaMap />

// With custom height
<LeafletAfricaMap height="400px" />

// With additional className
<LeafletAfricaMap height="350px" className="custom-class" />
```

## Props

| Prop        | Type     | Default   | Description                 |
| ----------- | -------- | --------- | --------------------------- |
| `height`    | `string` | `"280px"` | Height of the map container |
| `className` | `string` | `""`      | Additional CSS classes      |

## Technologies

- **Leaflet** - Open-source JavaScript library for interactive maps
- **CartoDB Dark Theme** - Dark map tiles for better contrast
- **SVG Overlays** - For connection lines and animations
- **CSS Animations** - Pulse, ripple, and dash effects

## Performance

- Lazy initialization (only loads when mounted)
- Efficient SVG rendering for connection lines
- Minimal tile loading (restricted zoom levels)
- Proper cleanup on unmount

## Accessibility

- Keyboard navigation disabled for consistent UX
- Screen reader friendly tooltips
- Reduced motion support can be added via CSS

## Future Enhancements

- [ ] Add data packet animations along connection lines
- [ ] Show statistics overlay for each hub
- [ ] Implement real-time adoption metrics
- [ ] Add country boundaries highlight
- [ ] Custom marker icons for different hub types
