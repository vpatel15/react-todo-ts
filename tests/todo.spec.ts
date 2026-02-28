import { test, expect } from '@playwright/test';

// simple end-to-end scenario: add two todos then delete one

test.describe('Todo app', () => {
  test('should add two todos and delete one', async ({ page }) => {
    // navigate to root (webServer takes care of starting vite)
    await page.goto('/');

    // The input has a label "Enter todo here" (from our custom Input component)
    const input = page.getByLabel('Enter todo here');
    const addButton = page.getByRole('button', { name: 'Add Task' });

    // add first task
    await input.fill('Buy milk');
    await addButton.click();

    // add second task
    await input.fill('Walk dog');
    await addButton.click();

    // verify both items appear
    await expect(page.getByText('Buy milk')).toBeVisible();
    await expect(page.getByText('Walk dog')).toBeVisible();

    // take a screenshot after adding tasks
    await page.screenshot({ path: 'screenshots/after-adding.png' });

    // delete the first item (the list renders a Delete button per item)
    const firstDelete = page.getByRole('button', { name: 'Delete' }).first();
    await firstDelete.click();

    await expect(page.getByText('Buy milk')).not.toBeVisible();

    // screenshot after deletion
    await page.screenshot({ path: 'screenshots/after-deleting.png' });
  });
});
