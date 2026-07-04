const TASKS = [
  { id: "beaded", label: "Beaded" },
  { id: "catalogued", label: "Catalogued" },
  { id: "clasped", label: "Clasped" },
  { id: "description", label: "Description" },
  { id: "certificate", label: "Certificate" },
  { id: "photographed", label: "Photographed" },
  { id: "uploaded", label: "Uploaded" }
];

// Example starting dataset
const NECKLACES = [
  {
    sku: 501,
    page: 1,
    tasks: {
      beaded: true,
      catalogued: false,
      clasped: false,
      description: false,
      certificate: false,
      photographed: false,
      uploaded: false
    }
  },
  {
    sku: 502,
    page: 1,
    tasks: {
      beaded: false,
      catalogued: false,
      clasped: false,
      description: false,
      certificate: false,
      photographed: false,
      uploaded: false
    }
  }
];
