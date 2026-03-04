import { APIRequestContext } from '@playwright/test';

export class AuthService {
  constructor(private request: APIRequestContext) {}

  async login(email: string, password: string) {
    const response = await this.request.post('/api/login', {
      data: { email, password }
    });

    const body = await response.json();
    return {
      status: response.status(),
      token: body.token
    };
  }
}
