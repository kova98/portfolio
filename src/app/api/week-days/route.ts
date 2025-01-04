import { NextRequest } from 'next/server';
import { config } from '@/config/env';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const startDate = searchParams.get('start');

  if (!startDate) {
    return new Response('Start date is required', { status: 400 });
  }

  const url = `${config.apiUrl}/week-days?start=${startDate}`;
  console.log('Fetching from:', url); // Debug log

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // Log more details about the error
      const errorText = await response.text();
      console.error('API Error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      });
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return new Response('Failed to fetch days', { status: 500 });
  }
}
