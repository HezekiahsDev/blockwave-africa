"use client";

import React, { useEffect, useRef, useMemo } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export type LeafletAfricaMapProps = {
  /** Optional height of the map container */
  height?: string;
  /** Optional className for additional styling */
  className?: string;
};

// Major African tech hubs with coordinates - Complete coverage (2+ per country)
const techHubs = [
  // North Africa - Egypt (2)
  {
    name: "Cairo",
    country: "Egypt",
    lat: 30.0444,
    lng: 31.2357,
    size: "large",
  },
  {
    name: "Alexandria",
    country: "Egypt",
    lat: 31.2001,
    lng: 29.9187,
    size: "small",
  },

  // Tunisia (2)
  {
    name: "Tunis",
    country: "Tunisia",
    lat: 36.8065,
    lng: 10.1815,
    size: "medium",
  },
  {
    name: "Sfax",
    country: "Tunisia",
    lat: 34.7406,
    lng: 10.7603,
    size: "small",
  },

  // Algeria (4)
  {
    name: "Algiers",
    country: "Algeria",
    lat: 36.7372,
    lng: 3.0865,
    size: "medium",
  },
  {
    name: "Oran",
    country: "Algeria",
    lat: 35.6969,
    lng: -0.6331,
    size: "small",
  },
  {
    name: "Ghardaia",
    country: "Algeria",
    lat: 32.4914,
    lng: 3.6676,
    size: "small",
  },
  {
    name: "Tamanrasset",
    country: "Algeria",
    lat: 22.785,
    lng: 5.5228,
    size: "small",
  },

  // Morocco (2)
  {
    name: "Casablanca",
    country: "Morocco",
    lat: 33.5731,
    lng: -7.5898,
    size: "medium",
  },
  {
    name: "Rabat",
    country: "Morocco",
    lat: 34.0209,
    lng: -6.8416,
    size: "small",
  },

  // Libya (2)
  {
    name: "Tripoli",
    country: "Libya",
    lat: 32.8872,
    lng: 13.1913,
    size: "small",
  },
  {
    name: "Benghazi",
    country: "Libya",
    lat: 32.1191,
    lng: 20.0686,
    size: "small",
  },

  // Sudan (2)
  {
    name: "Khartoum",
    country: "Sudan",
    lat: 15.5007,
    lng: 32.5599,
    size: "small",
  },
  {
    name: "Omdurman",
    country: "Sudan",
    lat: 15.6446,
    lng: 32.4777,
    size: "small",
  },

  // South Sudan (2)
  {
    name: "Juba",
    country: "South Sudan",
    lat: 4.8517,
    lng: 31.5825,
    size: "small",
  },
  {
    name: "Malakal",
    country: "South Sudan",
    lat: 9.5334,
    lng: 31.6605,
    size: "small",
  },

  // West Africa - Nigeria (3)
  {
    name: "Lagos",
    country: "Nigeria",
    lat: 6.5244,
    lng: 3.3792,
    size: "large",
  },
  {
    name: "Abuja",
    country: "Nigeria",
    lat: 9.0765,
    lng: 7.3986,
    size: "medium",
  },
  {
    name: "Kano - Blockwave HQ",
    country: "Nigeria",
    lat: 12.0022,
    lng: 8.5919,
    size: "large",
  },

  // Ghana (2)
  { name: "Accra", country: "Ghana", lat: 5.6037, lng: -0.187, size: "large" },
  {
    name: "Kumasi",
    country: "Ghana",
    lat: 6.6885,
    lng: -1.6244,
    size: "small",
  },

  // Senegal (2)
  {
    name: "Dakar",
    country: "Senegal",
    lat: 14.7167,
    lng: -17.4677,
    size: "medium",
  },
  { name: "Touba", country: "Senegal", lat: 14.85, lng: -15.88, size: "small" },

  // Côte d'Ivoire (2)
  {
    name: "Abidjan",
    country: "Côte d'Ivoire",
    lat: 5.36,
    lng: -4.0083,
    size: "medium",
  },
  {
    name: "Yamoussoukro",
    country: "Côte d'Ivoire",
    lat: 6.8276,
    lng: -5.2893,
    size: "small",
  },

  // Mali (2)
  {
    name: "Bamako",
    country: "Mali",
    lat: 12.6392,
    lng: -8.0029,
    size: "small",
  },
  {
    name: "Sikasso",
    country: "Mali",
    lat: 11.3177,
    lng: -5.6667,
    size: "small",
  },

  // Burkina Faso (2)
  {
    name: "Ouagadougou",
    country: "Burkina Faso",
    lat: 12.3714,
    lng: -1.5197,
    size: "small",
  },
  {
    name: "Bobo-Dioulasso",
    country: "Burkina Faso",
    lat: 11.1771,
    lng: -4.2979,
    size: "small",
  },

  // Niger (2)
  {
    name: "Niamey",
    country: "Niger",
    lat: 13.5127,
    lng: 2.1128,
    size: "small",
  },
  {
    name: "Zinder",
    country: "Niger",
    lat: 13.8069,
    lng: 8.9881,
    size: "small",
  },

  // Guinea (2)
  {
    name: "Conakry",
    country: "Guinea",
    lat: 9.6412,
    lng: -13.5784,
    size: "small",
  },
  {
    name: "Nzérékoré",
    country: "Guinea",
    lat: 7.7562,
    lng: -8.8179,
    size: "small",
  },

  // Sierra Leone (2)
  {
    name: "Freetown",
    country: "Sierra Leone",
    lat: 8.4657,
    lng: -13.2317,
    size: "small",
  },
  {
    name: "Bo",
    country: "Sierra Leone",
    lat: 7.9647,
    lng: -11.7383,
    size: "small",
  },

  // Liberia (2)
  {
    name: "Monrovia",
    country: "Liberia",
    lat: 6.3156,
    lng: -10.8074,
    size: "small",
  },
  {
    name: "Gbarnga",
    country: "Liberia",
    lat: 6.9978,
    lng: -9.4722,
    size: "small",
  },

  // Benin (2)
  {
    name: "Cotonou",
    country: "Benin",
    lat: 6.3654,
    lng: 2.4183,
    size: "small",
  },
  {
    name: "Porto-Novo",
    country: "Benin",
    lat: 6.4969,
    lng: 2.6289,
    size: "small",
  },

  // Togo (2)
  { name: "Lomé", country: "Togo", lat: 6.1256, lng: 1.2254, size: "small" },
  { name: "Sokodé", country: "Togo", lat: 8.9833, lng: 1.1333, size: "small" },

  // Mauritania (2)
  {
    name: "Nouakchott",
    country: "Mauritania",
    lat: 18.0735,
    lng: -15.9582,
    size: "small",
  },
  {
    name: "Nouadhibou",
    country: "Mauritania",
    lat: 20.9316,
    lng: -17.0347,
    size: "small",
  },

  // Gambia (2)
  {
    name: "Banjul",
    country: "Gambia",
    lat: 13.4549,
    lng: -16.579,
    size: "small",
  },
  {
    name: "Serekunda",
    country: "Gambia",
    lat: 13.4389,
    lng: -16.6778,
    size: "small",
  },

  // Guinea-Bissau (2)
  {
    name: "Bissau",
    country: "Guinea-Bissau",
    lat: 11.8636,
    lng: -15.5982,
    size: "small",
  },
  {
    name: "Bafatá",
    country: "Guinea-Bissau",
    lat: 12.1704,
    lng: -14.6622,
    size: "small",
  },

  // Cape Verde (2)
  {
    name: "Praia",
    country: "Cape Verde",
    lat: 14.9177,
    lng: -23.5092,
    size: "small",
  },
  {
    name: "Mindelo",
    country: "Cape Verde",
    lat: 16.8866,
    lng: -24.9875,
    size: "small",
  },

  // East Africa - Kenya (2)
  {
    name: "Nairobi",
    country: "Kenya",
    lat: -1.2864,
    lng: 36.8172,
    size: "large",
  },
  {
    name: "Mombasa",
    country: "Kenya",
    lat: -4.0435,
    lng: 39.6682,
    size: "small",
  },

  // Ethiopia (2)
  {
    name: "Addis Ababa",
    country: "Ethiopia",
    lat: 9.03,
    lng: 38.74,
    size: "large",
  },
  {
    name: "Dire Dawa",
    country: "Ethiopia",
    lat: 9.5931,
    lng: 41.8661,
    size: "small",
  },

  // Tanzania (2)
  {
    name: "Dar es Salaam",
    country: "Tanzania",
    lat: -6.7924,
    lng: 39.2083,
    size: "medium",
  },
  {
    name: "Dodoma",
    country: "Tanzania",
    lat: -6.163,
    lng: 35.7516,
    size: "small",
  },

  // Uganda (2)
  {
    name: "Kampala",
    country: "Uganda",
    lat: 0.3476,
    lng: 32.5825,
    size: "medium",
  },
  {
    name: "Entebbe",
    country: "Uganda",
    lat: 0.0563,
    lng: 32.4636,
    size: "small",
  },

  // Rwanda (2)
  {
    name: "Kigali",
    country: "Rwanda",
    lat: -1.9441,
    lng: 30.0619,
    size: "medium",
  },
  {
    name: "Butare",
    country: "Rwanda",
    lat: -2.5961,
    lng: 29.7392,
    size: "small",
  },

  // Burundi (2)
  {
    name: "Bujumbura",
    country: "Burundi",
    lat: -3.3614,
    lng: 29.3599,
    size: "small",
  },
  {
    name: "Gitega",
    country: "Burundi",
    lat: -3.4271,
    lng: 29.9246,
    size: "small",
  },

  // Somalia (2)
  {
    name: "Mogadishu",
    country: "Somalia",
    lat: 2.0469,
    lng: 45.3182,
    size: "small",
  },
  {
    name: "Hargeisa",
    country: "Somalia",
    lat: 9.56,
    lng: 44.065,
    size: "small",
  },

  // Eritrea (2)
  {
    name: "Asmara",
    country: "Eritrea",
    lat: 15.3229,
    lng: 38.9251,
    size: "small",
  },
  {
    name: "Keren",
    country: "Eritrea",
    lat: 15.7794,
    lng: 38.4508,
    size: "small",
  },

  // Djibouti (2)
  {
    name: "Djibouti City",
    country: "Djibouti",
    lat: 11.8251,
    lng: 42.5903,
    size: "small",
  },
  {
    name: "Ali Sabieh",
    country: "Djibouti",
    lat: 11.1564,
    lng: 42.7128,
    size: "small",
  },

  // Central Africa - DRC (2)
  {
    name: "Kinshasa",
    country: "DRC",
    lat: -4.4419,
    lng: 15.2663,
    size: "large",
  },
  {
    name: "Lubumbashi",
    country: "DRC",
    lat: -11.667,
    lng: 27.4794,
    size: "small",
  },

  // Cameroon (2)
  {
    name: "Yaoundé",
    country: "Cameroon",
    lat: 3.848,
    lng: 11.5021,
    size: "medium",
  },
  {
    name: "Douala",
    country: "Cameroon",
    lat: 4.0511,
    lng: 9.7679,
    size: "small",
  },

  // Congo (2)
  {
    name: "Brazzaville",
    country: "Congo",
    lat: -4.2634,
    lng: 15.2429,
    size: "small",
  },
  {
    name: "Pointe-Noire",
    country: "Congo",
    lat: -4.7692,
    lng: 11.8636,
    size: "small",
  },

  // Central African Republic (2)
  { name: "Bangui", country: "CAR", lat: 4.3947, lng: 18.5582, size: "small" },
  { name: "Bimbo", country: "CAR", lat: 4.2531, lng: 18.5186, size: "small" },

  // Chad (2)
  {
    name: "N'Djamena",
    country: "Chad",
    lat: 12.1348,
    lng: 15.0557,
    size: "small",
  },
  {
    name: "Moundou",
    country: "Chad",
    lat: 8.5667,
    lng: 16.0833,
    size: "small",
  },

  // Gabon (2)
  {
    name: "Libreville",
    country: "Gabon",
    lat: 0.4162,
    lng: 9.4673,
    size: "small",
  },
  {
    name: "Port-Gentil",
    country: "Gabon",
    lat: -0.7193,
    lng: 8.7815,
    size: "small",
  },

  // Equatorial Guinea (2)
  {
    name: "Malabo",
    country: "Eq. Guinea",
    lat: 3.7504,
    lng: 8.7371,
    size: "small",
  },
  {
    name: "Bata",
    country: "Eq. Guinea",
    lat: 1.8554,
    lng: 9.7674,
    size: "small",
  },

  // São Tomé and Príncipe (2)
  {
    name: "São Tomé",
    country: "São Tomé",
    lat: 0.3365,
    lng: 6.7273,
    size: "small",
  },
  {
    name: "Santo António",
    country: "São Tomé",
    lat: 1.6414,
    lng: 7.418,
    size: "small",
  },

  // Southern Africa - South Africa (4)
  {
    name: "Johannesburg",
    country: "South Africa",
    lat: -26.2041,
    lng: 28.0473,
    size: "large",
  },
  {
    name: "Cape Town",
    country: "South Africa",
    lat: -33.9249,
    lng: 18.4241,
    size: "large",
  },
  {
    name: "Durban",
    country: "South Africa",
    lat: -29.8587,
    lng: 31.0218,
    size: "medium",
  },
  {
    name: "Pretoria",
    country: "South Africa",
    lat: -25.7479,
    lng: 28.2293,
    size: "small",
  },

  // Zambia (2)
  {
    name: "Lusaka",
    country: "Zambia",
    lat: -15.3875,
    lng: 28.3228,
    size: "medium",
  },
  {
    name: "Ndola",
    country: "Zambia",
    lat: -12.9706,
    lng: 28.6366,
    size: "small",
  },

  // Zimbabwe (2)
  {
    name: "Harare",
    country: "Zimbabwe",
    lat: -17.8252,
    lng: 31.0335,
    size: "medium",
  },
  {
    name: "Bulawayo",
    country: "Zimbabwe",
    lat: -20.1396,
    lng: 28.5869,
    size: "small",
  },

  // Mozambique (2)
  {
    name: "Maputo",
    country: "Mozambique",
    lat: -25.9655,
    lng: 32.5832,
    size: "small",
  },
  {
    name: "Beira",
    country: "Mozambique",
    lat: -19.8436,
    lng: 34.8389,
    size: "small",
  },

  // Namibia (2)
  {
    name: "Windhoek",
    country: "Namibia",
    lat: -22.5597,
    lng: 17.0832,
    size: "small",
  },
  {
    name: "Walvis Bay",
    country: "Namibia",
    lat: -22.9575,
    lng: 14.5053,
    size: "small",
  },

  // Botswana (2)
  {
    name: "Gaborone",
    country: "Botswana",
    lat: -24.6282,
    lng: 25.9231,
    size: "small",
  },
  {
    name: "Francistown",
    country: "Botswana",
    lat: -21.1699,
    lng: 27.5084,
    size: "small",
  },

  // Angola (2)
  {
    name: "Luanda",
    country: "Angola",
    lat: -8.8383,
    lng: 13.2344,
    size: "medium",
  },
  {
    name: "Huambo",
    country: "Angola",
    lat: -12.7761,
    lng: 15.7381,
    size: "small",
  },

  // Malawi (2)
  {
    name: "Lilongwe",
    country: "Malawi",
    lat: -13.9626,
    lng: 33.7741,
    size: "small",
  },
  {
    name: "Blantyre",
    country: "Malawi",
    lat: -15.7861,
    lng: 35.0058,
    size: "small",
  },

  // Lesotho (2)
  {
    name: "Maseru",
    country: "Lesotho",
    lat: -29.3167,
    lng: 27.4833,
    size: "small",
  },
  {
    name: "Teyateyaneng",
    country: "Lesotho",
    lat: -29.15,
    lng: 27.75,
    size: "small",
  },

  // Eswatini (2)
  {
    name: "Mbabane",
    country: "Eswatini",
    lat: -26.3054,
    lng: 31.1367,
    size: "small",
  },
  {
    name: "Manzini",
    country: "Eswatini",
    lat: -26.4979,
    lng: 31.3708,
    size: "small",
  },

  // Madagascar (2)
  {
    name: "Antananarivo",
    country: "Madagascar",
    lat: -18.8792,
    lng: 47.5079,
    size: "small",
  },
  {
    name: "Toamasina",
    country: "Madagascar",
    lat: -18.1443,
    lng: 49.4122,
    size: "small",
  },

  // Mauritius (2)
  {
    name: "Port Louis",
    country: "Mauritius",
    lat: -20.1609,
    lng: 57.5012,
    size: "small",
  },
  {
    name: "Vacoas",
    country: "Mauritius",
    lat: -20.2978,
    lng: 57.4783,
    size: "small",
  },

  // Comoros (2)
  {
    name: "Moroni",
    country: "Comoros",
    lat: -11.7172,
    lng: 43.2473,
    size: "small",
  },
  {
    name: "Mutsamudu",
    country: "Comoros",
    lat: -12.1667,
    lng: 44.4,
    size: "small",
  },

  // Seychelles (2)
  {
    name: "Victoria",
    country: "Seychelles",
    lat: -4.6191,
    lng: 55.4513,
    size: "small",
  },
  {
    name: "Anse Royale",
    country: "Seychelles",
    lat: -4.7394,
    lng: 55.5159,
    size: "small",
  },
];

const LeafletAfricaMap = React.memo(
  ({
    height = "400px",
    className = "bg-transparent",
  }: LeafletAfricaMapProps) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<L.Map | null>(null);

    // Memoize tech hubs array to prevent recalculation on re-renders
    const memoizedTechHubs = useMemo(() => techHubs, []);

    useEffect(() => {
      if (!mapContainerRef.current || mapRef.current) return;

      // Add a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        if (!mapContainerRef.current) return;

        // Initialize the map centered on Africa (adjusted to show North Africa better)
        const map = L.map(mapContainerRef.current, {
          center: [5, 20],
          zoom: 3,
          minZoom: 2,
          maxZoom: 6,
          zoomControl: false,
          attributionControl: false,
          dragging: false,
          scrollWheelZoom: false,
          doubleClickZoom: false,
          boxZoom: false,
          keyboard: false,
        });

        mapRef.current = map;

        // Dark theme tile layer
        L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
          {
            maxZoom: 19,
            subdomains: "abcd",
          }
        ).addTo(map);

        // Custom CSS for pulsing markers
        const style = document.createElement("style");
        style.textContent = `
      @keyframes pulse {
        0%, 100% {
          transform: scale(0.8);
          opacity: 1;
        }
        50% {
          transform: scale(1.2);
          opacity: 0.7;
        }
      }

      @keyframes ripple {
        0% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.8;
        }
        100% {
          transform: translate(-50%, -50%) scale(3);
          opacity: 0;
        }
      }

      .web3-hub-marker {
        position: absolute;
        top: 0;
        left: 0;
        background: radial-gradient(circle, #22c55e 0%, #06b6d4 100%);
        border: 2px solid #22c55e;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(6, 182, 212, 0.5);
        animation: pulse 2s ease-in-out infinite;
        transform-origin: center center;
      }

      .web3-hub-marker.large {
        width: 16px;
        height: 16px;
      }

      .web3-hub-marker.medium {
        width: 12px;
        height: 12px;
      }

      .web3-hub-marker.small {
        width: 10px;
        height: 10px;
      }

      .web3-hub-marker::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid #22c55e;
        transform: translate(-50%, -50%);
        animation: ripple 2s ease-out infinite;
        pointer-events: none;
      }

      .web3-hub-marker::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid #06b6d4;
        transform: translate(-50%, -50%);
        animation: ripple 2s ease-out infinite 1s;
        pointer-events: none;
      }

      /* Blockwave HQ - Kano Marker (no large outer wave) */
      .blockwave-hq-marker {
        position: absolute;
        top: 0;
        left: 0;
        background: radial-gradient(circle, #22c55e 0%, #16a34a 100%);
        border: 3px solid #22c55e;
        border-radius: 50%;
        box-shadow: 
          0 0 12px rgba(34, 197, 94, 0.9), 
          0 0 18px rgba(34, 197, 94, 0.6);
        animation: pulse-hq 3s ease-in-out infinite;
        transform-origin: center center;
        width: 20px;
        height: 20px;
        z-index: 1000;
      }

      @keyframes pulse-hq {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
          box-shadow: 
            0 0 20px rgba(34, 197, 94, 1), 
            0 0 40px rgba(34, 197, 94, 0.8),
            0 0 60px rgba(34, 197, 94, 0.6);
        }
        50% {
          transform: scale(1.3);
          opacity: 0.9;
          box-shadow: 
            0 0 30px rgba(34, 197, 94, 1), 
            0 0 60px rgba(34, 197, 94, 0.9),
            0 0 90px rgba(34, 197, 94, 0.7);
        }
      }

      /* Removed heavy outer wave rings and keyframes to improve performance */

      .connection-line {
        stroke: url(#connectionGradient);
        stroke-width: 2;
        stroke-dasharray: 8 6;
        animation: dash 20s linear infinite;
        opacity: 0.6;
        pointer-events: none;
      }

      /* Make lines more visible on larger screens */
      @media (min-width: 768px) {
        .connection-line {
          stroke-width: 2.5;
          opacity: 0.65;
        }
      }

      @media (min-width: 1024px) {
        .connection-line {
          stroke-width: 3;
          opacity: 0.7;
        }
      }

      @media (min-width: 1536px) {
        .connection-line {
          stroke-width: 3.5;
          opacity: 0.75;
        }
      }

      @keyframes dash {
        to {
          stroke-dashoffset: -100;
        }
      }

      /* Ensure SVG overlay is properly layered */
      .leaflet-overlay-pane {
        z-index: 400 !important;
      }

      .leaflet-marker-pane {
        z-index: 600 !important;
      }

      .leaflet-container {
        background: transparent !important;
      }
    `;
        document.head.appendChild(style);

        // Add markers for tech hubs
        memoizedTechHubs.forEach((hub, index) => {
          // Check if this is the Blockwave HQ (Kano)
          const isBlockwaveHQ = hub.name.includes("Blockwave HQ");

          const icon = L.divIcon({
            className: "custom-marker",
            html: `<div class="${
              isBlockwaveHQ ? "blockwave-hq-marker" : "web3-hub-marker"
            } ${hub.size}" style="animation-delay: ${index * 0.2}s"></div>`,
            iconSize: isBlockwaveHQ ? [24, 24] : [20, 20],
            iconAnchor: isBlockwaveHQ ? [12, 12] : [10, 10],
          });

          const marker = L.marker([hub.lat, hub.lng], { icon }).addTo(map);

          // Tooltip with hub information
          marker.bindTooltip(
            `<div style="background: rgba(0, 0, 0, 0.9); padding: 8px; border-radius: 6px; border: 1px solid ${
              isBlockwaveHQ ? "#22c55e" : "#22c55e"
            };">
          <strong style="color: ${isBlockwaveHQ ? "#22c55e" : "#22c55e"};">${
              hub.name
            }</strong><br/>
          <span style="color: #94a3b8; font-size: 12px;">${
            hub.country
          }</span><br/>
          <span style="color: #06b6d4; font-size: 11px;">${
            isBlockwaveHQ ? "🌊 Headquarters" : "Web3 Hub"
          }</span>
        </div>`,
            {
              direction: "top",
              offset: [0, -10],
              opacity: 1,
              className: "hub-tooltip",
            }
          );
        });

        // Draw connection lines between major hubs - Comprehensive network for all countries
        const connections = [
          // North Africa - Egypt
          [0, 1], // Cairo - Alexandria

          // Tunisia
          [2, 3], // Tunis - Sfax
          [0, 2], // Cairo - Tunis

          // Algeria
          [4, 5], // Algiers - Oran
          [2, 4], // Tunis - Algiers
          [4, 6], // Algiers - Ghardaia (central Algeria)
          [5, 6], // Oran - Ghardaia (connecting west coast to heart)
          [6, 7], // Ghardaia - Tamanrasset (central to south)
          [4, 7], // Algiers - Tamanrasset (capital to south)

          // Morocco
          [8, 9], // Casablanca - Rabat
          [4, 8], // Algiers - Casablanca

          // Libya
          [10, 11], // Tripoli - Benghazi
          [2, 10], // Tunis - Tripoli
          [0, 11], // Cairo - Benghazi
          [6, 10], // Ghardaia - Tripoli (Algeria heart to Libya)

          // Sudan
          [12, 13], // Khartoum - Omdurman
          [0, 12], // Cairo - Khartoum

          // South Sudan
          [14, 15], // Juba - Malakal
          [12, 14], // Khartoum - Juba

          // West Africa - Nigeria
          [16, 17], // Lagos - Abuja
          [17, 18], // Abuja - Kano (Blockwave HQ)
          [16, 18], // Lagos - Kano (HQ connection)

          // Ghana
          [19, 20], // Accra - Kumasi
          [16, 19], // Lagos - Accra

          // Senegal
          [21, 22], // Dakar - Touba
          [9, 21], // Casablanca - Dakar

          // Côte d'Ivoire
          [23, 24], // Abidjan - Yamoussoukro
          [19, 23], // Accra - Abidjan

          // Mali
          [25, 26], // Bamako - Sikasso
          [21, 25], // Dakar - Bamako
          [7, 25], // Tamanrasset - Bamako (Algeria south to Mali)
          [18, 25], // Kano - Bamako (HQ to Mali)

          // Burkina Faso
          [27, 28], // Ouagadougou - Bobo-Dioulasso
          [25, 27], // Bamako - Ouagadougou

          // Niger
          [29, 30], // Niamey - Zinder
          [17, 29], // Abuja - Niamey
          [27, 29], // Ouagadougou - Niamey
          [7, 29], // Tamanrasset - Niamey (Algeria south to Niger border)
          [18, 29], // Kano - Niamey (HQ to Niger)

          // Guinea
          [31, 32], // Conakry - Nzérékoré
          [21, 31], // Dakar - Conakry

          // Sierra Leone
          [33, 34], // Freetown - Bo
          [31, 33], // Conakry - Freetown

          // Liberia
          [35, 36], // Monrovia - Gbarnga
          [33, 35], // Freetown - Monrovia

          // Benin
          [37, 38], // Cotonou - Porto-Novo
          [16, 37], // Lagos - Cotonou

          // Togo
          [39, 40], // Lomé - Sokodé
          [19, 39], // Accra - Lomé

          // Mauritania
          [41, 42], // Nouakchott - Nouadhibou
          [21, 41], // Dakar - Nouakchott
          [9, 41], // Casablanca - Nouakchott (Morocco to Mauritania)
          [7, 41], // Tamanrasset - Nouakchott (Algeria south to Mauritania)

          // Gambia
          [43, 44], // Banjul - Serekunda
          [21, 43], // Dakar - Banjul

          // Guinea-Bissau
          [45, 46], // Bissau - Bafatá
          [31, 45], // Conakry - Bissau

          // Cape Verde
          [47, 48], // Praia - Mindelo
          [21, 47], // Dakar - Praia

          // East Africa - Kenya
          [49, 50], // Nairobi - Mombasa

          // Ethiopia
          [51, 52], // Addis Ababa - Dire Dawa
          [0, 51], // Cairo - Addis Ababa

          // Tanzania
          [53, 54], // Dar es Salaam - Dodoma
          [49, 53], // Nairobi - Dar es Salaam

          // Uganda
          [55, 56], // Kampala - Entebbe
          [49, 55], // Nairobi - Kampala

          // Rwanda
          [57, 58], // Kigali - Butare
          [49, 57], // Nairobi - Kigali
          [55, 57], // Kampala - Kigali

          // Burundi
          [59, 60], // Bujumbura - Gitega
          [57, 59], // Kigali - Bujumbura

          // Somalia
          [61, 62], // Mogadishu - Hargeisa
          [51, 61], // Addis Ababa - Mogadishu

          // Eritrea
          [63, 64], // Asmara - Keren
          [51, 63], // Addis Ababa - Asmara

          // Djibouti
          [65, 66], // Djibouti City - Ali Sabieh
          [51, 65], // Addis Ababa - Djibouti

          // Central Africa - DRC
          [67, 68], // Kinshasa - Lubumbashi

          // Cameroon
          [69, 70], // Yaoundé - Douala
          [17, 69], // Abuja - Yaoundé
          [18, 69], // Kano HQ - Yaoundé

          // Congo
          [71, 72], // Brazzaville - Pointe-Noire
          [67, 71], // Kinshasa - Brazzaville

          // CAR
          [73, 74], // Bangui - Bimbo
          [67, 73], // Kinshasa - Bangui

          // Chad
          [75, 76], // N'Djamena - Moundou
          [12, 75], // Khartoum - N'Djamena
          [69, 75], // Yaoundé - N'Djamena
          [18, 75], // Kano HQ - N'Djamena

          // Gabon
          [77, 78], // Libreville - Port-Gentil
          [71, 77], // Brazzaville - Libreville

          // Equatorial Guinea
          [79, 80], // Malabo - Bata
          [69, 79], // Yaoundé - Malabo

          // São Tomé
          [81, 82], // São Tomé - Santo António
          [77, 81], // Libreville - São Tomé

          // Southern Africa - South Africa
          [83, 84], // Johannesburg - Cape Town
          [83, 85], // Johannesburg - Durban
          [83, 86], // Johannesburg - Pretoria

          // Zambia
          [87, 88], // Lusaka - Ndola
          [67, 87], // Kinshasa - Lusaka
          [83, 87], // Johannesburg - Lusaka

          // Zimbabwe
          [89, 90], // Harare - Bulawayo
          [87, 89], // Lusaka - Harare
          [83, 89], // Johannesburg - Harare

          // Mozambique
          [91, 92], // Maputo - Beira
          [85, 91], // Durban - Maputo
          [89, 92], // Harare - Beira

          // Namibia
          [93, 94], // Windhoek - Walvis Bay
          [84, 93], // Cape Town - Windhoek

          // Botswana
          [95, 96], // Gaborone - Francistown
          [83, 95], // Johannesburg - Gaborone

          // Angola
          [97, 98], // Luanda - Huambo
          [67, 97], // Kinshasa - Luanda

          // Malawi
          [99, 100], // Lilongwe - Blantyre
          [53, 99], // Dar es Salaam - Lilongwe

          // Lesotho
          [101, 102], // Maseru - Teyateyaneng
          [83, 101], // Johannesburg - Maseru

          // Eswatini
          [103, 104], // Mbabane - Manzini
          [85, 103], // Durban - Mbabane

          // Madagascar
          [105, 106], // Antananarivo - Toamasina
          [91, 105], // Maputo - Antananarivo

          // Mauritius
          [107, 108], // Port Louis - Vacoas
          [105, 107], // Antananarivo - Port Louis

          // Comoros
          [109, 110], // Moroni - Mutsamudu
          [105, 109], // Antananarivo - Moroni

          // Seychelles
          [111, 112], // Victoria - Anse Royale
          [49, 111], // Nairobi - Victoria

          // Major cross-continental routes
          [16, 49], // Lagos - Nairobi (West to East)
          [18, 49], // Kano HQ - Nairobi (strategic East-West link)
          [19, 51], // Accra - Addis Ababa
          [21, 0], // Dakar - Cairo (West to North)
          [16, 83], // Lagos - Johannesburg (West to South)
          [18, 83], // Kano HQ - Johannesburg (HQ to South hub)
          [49, 83], // Nairobi - Johannesburg (East to South)
          [51, 12], // Addis Ababa - Khartoum
          [67, 83], // Kinshasa - Johannesburg (Central to South)
          [0, 49], // Cairo - Nairobi (North to East)
          [18, 0], // Kano HQ - Cairo (HQ to North)
          [9, 16], // Casablanca - Lagos
          [53, 91], // Dar es Salaam - Maputo

          // Additional North Africa cross-connections (Egypt, Libya, Algeria visibility)
          [1, 11], // Alexandria - Benghazi (coastal route)
          [10, 4], // Tripoli - Algiers (coastal route)
          [5, 9], // Oran - Casablanca (Maghreb route)
          [0, 16], // Cairo - Lagos (North to West hub)
          [4, 16], // Algiers - Lagos (North to West hub)
          [4, 18], // Algiers - Kano HQ
          [10, 12], // Tripoli - Khartoum (North Africa interior)
          [0, 83], // Cairo - Johannesburg (major North-South route)
          [4, 51], // Algiers - Addis Ababa (North to East)
          [11, 51], // Benghazi - Addis Ababa (Libya to East Africa)
          [3, 9], // Sfax - Rabat (Tunisia to Morocco)
          [1, 2], // Alexandria - Tunis (coastal North Africa)
          [5, 21], // Oran - Dakar (West Africa connection)
          [13, 51], // Omdurman - Addis Ababa (Sudan to Ethiopia)
        ];

        // Create SVG overlay for connection lines
        const svgOverlay = L.svg({ pane: "overlayPane" });
        svgOverlay.addTo(map);

        const svg = document.querySelector(".leaflet-overlay-pane svg");
        if (svg) {
          // Ensure SVG has proper attributes for visibility
          svg.setAttribute(
            "style",
            "position: absolute; pointer-events: none;"
          );
          svg.setAttribute("class", "connection-lines-svg");

          // Add gradient definition
          const defs = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "defs"
          );
          const gradient = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "linearGradient"
          );
          gradient.setAttribute("id", "connectionGradient");
          gradient.innerHTML = `
        <stop offset="0%" stop-color="#22c55e" stop-opacity="0.8"/>
        <stop offset="50%" stop-color="#06b6d4" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#22c55e" stop-opacity="0.8"/>
      `;
          defs.appendChild(gradient);
          svg.appendChild(defs);

          // Draw connection lines
          let linesCreated = 0;
          connections.forEach(([startIdx, endIdx]) => {
            const start = memoizedTechHubs[startIdx];
            const end = memoizedTechHubs[endIdx];

            if (!start || !end) {
              console.warn(`Invalid connection: ${startIdx} -> ${endIdx}`);
              return;
            }

            const startPoint = map.latLngToLayerPoint([start.lat, start.lng]);
            const endPoint = map.latLngToLayerPoint([end.lat, end.lng]);

            const line = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "line"
            );
            line.setAttribute("x1", startPoint.x.toString());
            line.setAttribute("y1", startPoint.y.toString());
            line.setAttribute("x2", endPoint.x.toString());
            line.setAttribute("y2", endPoint.y.toString());
            line.setAttribute("class", "connection-line");
            line.setAttribute("stroke", "url(#connectionGradient)");
            line.setAttribute("stroke-width", "2.5");

            svg.appendChild(line);
            linesCreated++;

            // Update line positions on zoom/pan
            map.on("zoom move", () => {
              const newStart = map.latLngToLayerPoint([start.lat, start.lng]);
              const newEnd = map.latLngToLayerPoint([end.lat, end.lng]);
              line.setAttribute("x1", newStart.x.toString());
              line.setAttribute("y1", newStart.y.toString());
              line.setAttribute("x2", newEnd.x.toString());
              line.setAttribute("y2", newEnd.y.toString());
            });
          });

          console.log(`Created ${linesCreated} connection lines on map`);
        } else {
          console.warn("Could not find SVG element for connection lines");
        }

        // Cleanup
        return () => {
          clearTimeout(timer);
          if (mapRef.current) {
            mapRef.current.remove();
            mapRef.current = null;
          }
          if (document.head.contains(style)) {
            document.head.removeChild(style);
          }
        };
      }, 100);

      return () => {
        clearTimeout(timer);
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }
      };
    }, [memoizedTechHubs]);

    return (
      <div
        className={`relative w-full bg-transparent ${className}`}
        style={{ height }}
      >
        <div ref={mapContainerRef} className="w-full h-full bg-transparent" />
      </div>
    );
  }
);

// Add displayName for better debugging
LeafletAfricaMap.displayName = "LeafletAfricaMap";

export default LeafletAfricaMap;
