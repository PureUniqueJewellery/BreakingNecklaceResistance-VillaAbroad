// ================================
// Pure Unique Jewellery Tracker
// DATA FILE (v1.0)
// ================================

// Your workflow stages (fixed system)
const TASKS = [
  { id: "beaded", label: "Necklace Beaded" },
  { id: "catalogued", label: "Necklace Catalogued" },
  { id: "clasped", label: "Necklace Clasped" },
  { id: "description", label: "Write Description" },
  { id: "certificate_ai", label: "Prepare Certificate (AI)" },
  { id: "certificate_print", label: "Print Certificate" },
  { id: "signed", label: "Date & Sign" },
  { id: "guillotine", label: "Guillotine" },
  { id: "rounded", label: "Round Corners" },
  { id: "laminated", label: "Laminate" },
  { id: "trimmed", label: "Trim Laminate" },
  { id: "polished", label: "Polish Necklace" },
  { id: "video", label: "Videos (x2)" },
  { id: "photos", label: "Photos" },
  { id: "sealed", label: "Seal Away" },
  { id: "sort_media", label: "Sort Photos & Videos" },
  { id: "tiktok", label: "TikTok / CapCut" },
  { id: "social", label: "Facebook / Social Upload" }
];

// Your page structure (from your SKUs)
const PAGES = {
  1: [501, 575, 590, 591],
  2: [513, 592, 600, 599],
  3: [521, 601, 503, 576],
  4: [502, 618, 564, 565],
  5: [583, 613, 512, 567],
  6: [520, 522, 563, 509],
  7: [632, 633, 654, 655],
  8: [610, 611, 612, 577],
  9: [578, 573, 574, 587],
  10: [589, 492, 535, 536],
  11: [488, 550, 660, 625],
  12: [540, 505, 556, 557]
};

// Convert pages into full necklace database
function generateNecklaces() {
  const necklaces = [];

  Object.entries(PAGES).forEach(([page, skus]) => {
    skus.forEach((sku) => {
      const tasks = {};
      TASKS.forEach(t => {
        tasks[t.id] = false;
      });

      necklaces.push({
        sku: `SKU-${sku}`,
        page: Number(page),
        tasks: tasks,
        created: Date.now()
      });
    });
  });

  return necklaces;
}

// Initial app data
const NECKLACES = generateNecklaces();
