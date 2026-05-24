export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  dietary?: string[];
};

export type MenuSection = {
  id: string;
  title: string;
  description?: string;
  items: MenuItem[];
};

export type ThreeByJoMenuData = {
  brandName: string;
  tagline: string;
  intro: string;
  currencyNote: string;
  updatedAt: string;
  sections: MenuSection[];
};

export const THREE_BY_JOE_MENU: ThreeByJoMenuData = {
  brandName: "Three by Jo",
  tagline: "Real People / Real Food / Real Laughter",
  intro:
    "Seasonal plates, considered pairings and a room designed for slow evenings. Menu items and pricing below are placeholders - replace with your live offering.",
  currencyNote: "All prices shown in USD. Subject to seasonal availability.",
  updatedAt: "2026",
  sections: [
    {
      id: "starters",
      title: "Starters",
      description: "Small plates to begin.",
      items: [
        {
          name: "Heritage Tomato & Burrata",
          description: "Basil oil, aged balsamic, sourdough crostini",
          price: "12",
          dietary: ["V"],
        },
        {
          name: "Crisp Calamari",
          description: "Lemon aioli, pickled chilli, fresh herbs",
          price: "14",
        },
        {
          name: "Roasted Beetroot Salad",
          description: "Goat's cheese, walnut, honey dressing",
          price: "11",
          dietary: ["V"],
        },
        {
          name: "Soup of the Day",
          description: "Ask your server for today's seasonal preparation",
          price: "9",
          dietary: ["V", "GF"],
        },
      ],
    },
    {
      id: "mains",
      title: "Mains",
      description: "Chef-led mains from the pass.",
      items: [
        {
          name: "Pan-Seared Line Fish",
          description: "Citrus butter, charred greens, new potatoes",
          price: "26",
          dietary: ["GF"],
        },
        {
          name: "Herb-Roasted Chicken",
          description: "Wild mushroom jus, roasted root vegetables",
          price: "22",
          dietary: ["GF"],
        },
        {
          name: "Hand-Cut Beef Tagliata",
          description: "Rocket, parmesan, truffle oil, fries",
          price: "28",
        },
        {
          name: "Seasonal Risotto",
          description: "Rotating vegetables, parmesan, finishing oil",
          price: "20",
          dietary: ["V", "GF"],
        },
        {
          name: "Plant-Based Bowl",
          description: "Ancient grains, roasted vegetables, tahini dressing",
          price: "19",
          dietary: ["V", "VG", "GF"],
        },
      ],
    },
    {
      id: "drinks",
      title: "Drinks",
      description: "Signature serves, classics and zero-proof options.",
      items: [
        {
          name: "Three by Jo Spritz",
          description: "House aperitif, prosecco, orange bitters",
          price: "11",
        },
        {
          name: "Rose Garden",
          description: "Gin, rose, lemon, sparkling finish",
          price: "12",
        },
        {
          name: "Old Fashioned",
          description: "Bourbon, bitters, orange zest",
          price: "13",
        },
        {
          name: "Craft Lager",
          description: "330ml - rotating local selection",
          price: "6",
        },
        {
          name: "Fresh Pressed Lemonade",
          description: "Mint, sparkling or still",
          price: "5",
          dietary: ["V", "VG", "GF"],
        },
      ],
    },
    {
      id: "desserts",
      title: "Desserts",
      description: "A sweet finish.",
      items: [
        {
          name: "Dark Chocolate Torte",
          description: "Sea salt, creme fraiche",
          price: "10",
          dietary: ["V"],
        },
        {
          name: "Seasonal Fruit Crumble",
          description: "Vanilla custard",
          price: "9",
          dietary: ["V"],
        },
        {
          name: "Affogato",
          description: "Espresso poured over vanilla gelato",
          price: "8",
          dietary: ["V", "GF"],
        },
        {
          name: "Cheese Selection",
          description: "Three pieces, accompaniments, crackers",
          price: "14",
          dietary: ["V"],
        },
      ],
    },
  ],
};

export function formatMenuAsText(menu: ThreeByJoMenuData = THREE_BY_JOE_MENU): string {
  const lines: string[] = [
    menu.brandName.toUpperCase(),
    menu.tagline,
    "",
    menu.intro,
    "",
    menu.currencyNote,
    "",
    "=".repeat(48),
    "",
  ];

  menu.sections.forEach((section) => {
    lines.push(section.title.toUpperCase());
    if (section.description) {
      lines.push(section.description);
    }
    lines.push("");

    section.items.forEach((item) => {
      const dietary = item.dietary?.length ? ` (${item.dietary.join(", ")})` : "";
      lines.push(`${item.name}${dietary} - $${item.price}`);
      if (item.description) {
        lines.push(`  ${item.description}`);
      }
      lines.push("");
    });

    lines.push("-".repeat(48));
    lines.push("");
  });

  lines.push(`Menu updated ${menu.updatedAt}`);
  lines.push("Three by Jo - The Artisan Collection");
  lines.push("P6 Office, Westgate Shopping Centre");
  lines.push("info@artisancollectionzim.com");

  return lines.join("\n");
}

export function formatMenuAsHtml(menu: ThreeByJoMenuData = THREE_BY_JOE_MENU): string {
  const sections = menu.sections
    .map(
      (section) => `
    <section>
      <h2>${section.title}</h2>
      ${section.description ? `<p class="section-note">${section.description}</p>` : ""}
      <ul>
        ${section.items
          .map(
            (item) => `
          <li>
            <div class="item-row">
              <span class="item-name">${item.name}${
                item.dietary?.length ? ` <span class="dietary">(${item.dietary.join(", ")})</span>` : ""
              }</span>
              <span class="item-price">$${item.price}</span>
            </div>
            ${item.description ? `<p class="item-desc">${item.description}</p>` : ""}
          </li>`
          )
          .join("")}
      </ul>
    </section>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${menu.brandName} Menu</title>
  <style>
    body { font-family: Georgia, serif; color: #1a1a1f; max-width: 720px; margin: 2rem auto; padding: 0 1.5rem; line-height: 1.5; }
    h1 { font-size: 2rem; letter-spacing: 0.08em; margin-bottom: 0.25rem; }
    .tagline { color: #8b4a5c; font-style: italic; margin-bottom: 1rem; }
    .intro, .note { color: #444; font-size: 0.95rem; }
    h2 { font-size: 1.25rem; letter-spacing: 0.2em; text-transform: uppercase; border-bottom: 1px solid #ddd; padding-bottom: 0.35rem; margin-top: 2rem; }
    .section-note { color: #666; font-size: 0.9rem; margin-top: 0.35rem; }
    ul { list-style: none; padding: 0; margin: 1rem 0 0; }
    li { margin-bottom: 1rem; }
    .item-row { display: flex; justify-content: space-between; gap: 1rem; font-weight: 600; }
    .item-price { white-space: nowrap; }
    .item-desc { margin: 0.25rem 0 0; color: #555; font-size: 0.92rem; font-weight: 400; }
    .dietary { font-size: 0.75rem; font-weight: 400; color: #8b4a5c; }
    footer { margin-top: 2.5rem; padding-top: 1rem; border-top: 1px solid #ddd; font-size: 0.85rem; color: #666; }
  </style>
</head>
<body>
  <h1>${menu.brandName}</h1>
  <p class="tagline">${menu.tagline}</p>
  <p class="intro">${menu.intro}</p>
  <p class="note">${menu.currencyNote}</p>
  ${sections}
  <footer>
    <p>Menu updated ${menu.updatedAt}</p>
    <p>Three by Jo - The Artisan Collection</p>
    <p>P6 Office, Westgate Shopping Centre - info@artisancollectionzim.com</p>
  </footer>
</body>
</html>`;
}
