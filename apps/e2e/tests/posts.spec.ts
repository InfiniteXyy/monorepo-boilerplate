import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Web App/);
});

test('should Create post work', async ({ page }) => {
  await page.goto('/');

  const fakePost = {
    title: Math.random().toString().substring(2, 9),
    description: `Description:${Math.random().toString().substring(2, 9)}`,
  };

  // Fill in and submit the form
  await page.getByRole('textbox', { name: 'Title' }).fill(fakePost.title);
  await page.getByRole('textbox', { name: 'Description' }).fill(fakePost.description);
  await page.getByRole('button', { name: 'Create Post' }).click();

  // Expects page to have a heading with the name of the post.
  await expect(page.getByText(fakePost.title)).toBeVisible();

  // After click on the title item, should see the description then
  await page.getByText(fakePost.title).click();
  await expect(page.getByText(fakePost.description)).toBeVisible();

  // cleanup by delete the new created posts
  await page.getByRole('button', { name: `Delete ${fakePost.title}` }).click();
  await page.waitForTimeout(500); // Add a small delay
  await expect(page.getByText(fakePost.title)).not.toBeVisible();
});
