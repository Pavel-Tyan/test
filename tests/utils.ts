import { Page } from "@playwright/test";
import { BASE_URL } from "./constants";

export async function loadPage(page: Page) {
  await page.goto(BASE_URL);
  await page.waitForSelector("#root");
}
