export class OrderService {
  constructor(private request: any, private token: string) {}

  async createOrder(productId: number, quantity: number) {
    return await this.request.post('/api/orders', {
      headers: { Authorization: `Bearer ${this.token}` },
      data: { productId, quantity }
    });
  }
}
