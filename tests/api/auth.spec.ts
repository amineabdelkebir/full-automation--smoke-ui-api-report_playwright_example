/*import { test, expect } from '@playwright/test';
import { AuthService } from '../../api/AuthService';

test.describe('@smoke API Authentication', () => {

  test('User can login successfully', async ({ request }) => {
    const authService = new AuthService(request);

    const result = await authService.login(
      'user@test.com',
      'Password123'
    );

    expect(result.status).toBe(200);
    expect(result.token).toBeTruthy();
  });

});
*/