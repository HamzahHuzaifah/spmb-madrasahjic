const axios = require('axios');
const http = require('http');

async function test() {
  const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  try {
    // Login
    const params = new URLSearchParams();
    params.append('username', 'admin');
    params.append('password', 'admin123');


    const loginRes = await instance.post('/login', params, {
      maxRedirects: 0,
      validateStatus: (status) => status >= 200 && status < 400
    });

    
    console.log('Login Response:', loginRes.status, loginRes.headers);
    const cookie = loginRes.headers['set-cookie'];
    console.log('Cookie:', cookie);

    if (!cookie) {
      console.log('No cookie returned. Body:', loginRes.data);
      return;
    }

    // Fetch /santri
    const santriRes = await instance.get('/santri', {
      headers: { Cookie: cookie.join('; ') }
    });


    const html = santriRes.data;
    // Find all <select elements in html
    const matches = html.match(/<select[^>]*>/gi);
    console.log('Select tags found in /santri:');
    if (matches) {
      matches.forEach(m => console.log(m));
    } else {
      console.log('No select tags found');
    }
  } catch (err) {
    console.error('Error:', err);
  }

}

test();
