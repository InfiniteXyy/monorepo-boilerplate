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

test('should Edit post work', async ({ page }) => {
  await page.goto('/');

  // Create a post first
  const fakePost = {
    title: Math.random().toString().substring(2, 9),
    description: `Description:${Math.random().toString().substring(2, 9)}`,
  };

  // Fill in and submit the form to create a post
  await page.getByRole('textbox', { name: 'Title' }).fill(fakePost.title);
  await page.getByRole('textbox', { name: 'Description' }).fill(fakePost.description);
  await page.getByRole('button', { name: 'Create Post' }).click();
  await page.waitForTimeout(500); // Add a small delay

  // Click on the post to view it
  await page.getByText(fakePost.title).click();
  await expect(page.getByText(fakePost.description)).toBeVisible();

  // Click edit button
  await page.getByRole('button', { name: 'Edit' }).click();

  // Update the post
  const updatedPost = {
    title: `Updated ${fakePost.title}`,
    description: `Updated ${fakePost.description}`,
  };

  // Clear and fill the form fields
  await page.getByRole('textbox', { name: 'Title' }).fill('');
  await page.getByRole('textbox', { name: 'Title' }).fill(updatedPost.title);
  await page.getByRole('textbox', { name: 'Description' }).fill('');
  await page.getByRole('textbox', { name: 'Description' }).fill(updatedPost.description);

  // Save changes
  await page.getByRole('button', { name: 'Save Changes' }).click();

  // Verify the post was updated
  await expect(page.getByText(updatedPost.title)).toBeVisible();
  await expect(page.getByText(updatedPost.description)).toBeVisible();

  // Cleanup by deleting the post
  await page.getByRole('button', { name: `Delete ${updatedPost.title}` }).click();
  await page.waitForTimeout(500); // Add a small delay
  await expect(page.getByText(updatedPost.title)).not.toBeVisible();
});
