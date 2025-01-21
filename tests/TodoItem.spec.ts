import { expect, test } from "@playwright/test";
import { loadPage } from "./utils";
import { inputSelector } from "./constants";

test.beforeEach(async ({ page }) => {
  await loadPage(page);
});

test("Create todo test", async ({ page }) => {
  await page.fill(inputSelector, "Text");
  await page.getByRole("button", { name: "+" }).click();
  await expect(page).toHaveScreenshot("Create todo test.png");
});

test("Delete todo test", async ({ page }) => {
  await page.fill(inputSelector, "completed");
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "Change status" }).click();
  await page.getByRole("button", { name: "Delete completed" }).click();
  await page.getByRole("button", { name: "Show completed" }).click();
  await expect(page).toHaveScreenshot("Delete todo test.png");
});

test("Show completed todo test", async ({ page }) => {
  await page.fill(inputSelector, "completed");
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "Change status" }).click();
  await page.getByRole("button", { name: "Show completed" }).click();
  await expect(page).toHaveScreenshot("Show completed todo test.png");
});

test("Show active todo test", async ({ page }) => {
  await page.fill(inputSelector, "completed");
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "Change status" }).click();
  await page.getByRole("button", { name: "Show completed" }).click();
  await page.fill(inputSelector, "active");
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "Show active" }).click();
  await expect(page).toHaveScreenshot("Show active todo test.png");
});
