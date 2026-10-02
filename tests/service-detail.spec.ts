import { expect, test } from "@playwright/test";

test("service detail route renders the hero and key content", async ({ page }) => {
  await page.goto("/services/branding");

  await expect(page.locator("h1")).toContainText("Hire Top");
  await expect(page.locator("h1")).toContainText("UI / UX");
  await expect(page.locator("h1")).toContainText("Company in USA");
  await expect(page.getByText(/Leading UI\/UX design agency/i)).toBeVisible();
});
