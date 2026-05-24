import {
  formatMenuAsHtml,
  formatMenuAsText,
  THREE_BY_JOE_MENU,
  type ThreeByJoMenuData,
} from "@/data/three-by-joe-menu";

function triggerDownload(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export function downloadThreeByJoMenuText(menu: ThreeByJoMenuData = THREE_BY_JOE_MENU) {
  triggerDownload(formatMenuAsText(menu), "three-by-jo-menu.txt", "text/plain;charset=utf-8");
}

export function downloadThreeByJoMenuHtml(menu: ThreeByJoMenuData = THREE_BY_JOE_MENU) {
  triggerDownload(formatMenuAsHtml(menu), "three-by-jo-menu.html", "text/html;charset=utf-8");
}
