const request = require('supertest');
const http = require('http');

function createTestServer() {
  return http.createServer((req, res) => {
    if (req.method === 'GET' && req.url.startsWith('/quote')) {
      const response = { price: 1200.5, currency: 'USD', eta_days: 55 };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response));
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
}

describe('GET /quote', () => {
  let server;

  beforeAll(() => {
    server = createTestServer();
  });

  afterAll((done) => {
    server.close(done);
  });

  test('returns shipping quote JSON', async () => {
    const res = await request(server).get('/quote');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toEqual(
      expect.objectContaining({
        price: expect.any(Number),
        currency: expect.any(String),
        eta_days: expect.any(Number)
      })
    );
  });
});
