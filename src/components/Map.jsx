import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Papa from "papaparse";

// Helper function to create colored tree icons using FontAwesome HTML
const createTreeIcon = (color) => {
  return L.divIcon({
    className: "custom-tree-icon",
    html: `<span style="color:${color}; font-size:24px;">
             <i class="fa-solid fa-tree"></i>
           </span>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
};

// Map health values to colors
const icons = {
  Good: createTreeIcon("green"),
  Fair: createTreeIcon("yellow"),
  Poor: createTreeIcon("red"),
};

const Map = () => {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    // Load CSV from public folder
    Papa.parse("/data/Woodside_Tree_Health.csv", {
      download: true,
      header: true,
      complete: (results) => {
        setTrees(results.data);
      },
    });
  }, []);

  return (
    <MapContainer
      center={[40.744, -73.900]}
      zoom={14}
      className="w-full h-screen"
    >
      {/* Base map tiles */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
        subdomains={["a", "b", "c", "d"]}
        maxZoom={20}
      />

      {/* Render tree markers */}
      {trees.map((tree, index) => {
        if (!tree.latitude || !tree.longitude) return null; // skip invalid rows
        const healthKey = tree.health || "Good"; // default to Good
        const icon = icons[healthKey];

        return (
          <Marker
            key={index}
            position={[parseFloat(tree.latitude), parseFloat(tree.longitude)]}
            icon={icon}
          >
            <Popup>
              <b>Health:</b> {tree.health}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;

