export { default as AfricaMapGraphic } from "./AfricaMapGraphic";
export { default as ProgramsGraphic } from "./ProgramsGraphic";
export { default as EventsGraphic } from "./EventsGraphic";
export { default as TeamGraphic } from "./TeamGraphic";

// LeafletAfricaMap should be imported dynamically where needed
// to avoid SSR issues with Leaflet's window dependency
// Example usage:
// import dynamic from 'next/dynamic';
// const LeafletAfricaMap = dynamic(() => import('./ui/graphics/LeafletAfricaMap'), { ssr: false });
