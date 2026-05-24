import { describe, expect, it } from "vitest";
import {
  formatMenuAsHtml,
  formatMenuAsText,
  THREE_BY_JOE_MENU,
} from "./three-by-joe-menu";

describe("three-by-joe-menu", () => {
  it("includes all menu sections in text export", () => {
    const text = formatMenuAsText();

    expect(text).toContain("Three by Jo".toUpperCase());
    expect(text).toContain("STARTERS");
    expect(text).toContain("MAINS");
    expect(text).toContain("DRINKS");
    expect(text).toContain("DESSERTS");
    expect(text).toContain("Heritage Tomato & Burrata");
    expect(text).toContain("info@artisancollectionzim.com");
  });

  it("includes menu items with prices in html export", () => {
    const html = formatMenuAsHtml();

    expect(html).toContain("<title>Three by Jo Menu</title>");
    expect(html).toContain("Pan-Seared Line Fish");
    expect(html).toContain("$26");
    expect(html).toContain(THREE_BY_JOE_MENU.tagline);
  });
});
