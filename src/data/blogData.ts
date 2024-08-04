import { BlogPost } from '@/lib/models/blog';

const blogData: BlogPost[] = [
  {
    title: 'Server-Sent Events in .NET',
    subtitle: 'Implementing The Most Elegant HTTP-Based Push Mechanism',
    imageSrc: '/articles/sse.png',
    mediumUrl: 'https://medium.com/p/7f700b21cdb7',
  },
  {
    title: 'Webhooks in .NET',
    subtitle: 'Implementing The Lightweight Publish — Subscribe Alternative',
    imageSrc: '/articles/webhooks.png',
    mediumUrl: 'https://medium.com/@kova98/webhooks-in-net-e79530f0d764',
  },
  {
    title: 'Long Polling in .NET',
    subtitle: 'Implementing a More Efficient Polling Technique',
    imageSrc: '/articles/long-polling.png',
    mediumUrl: 'https://medium.com/@kova98/long-polling-in-net-08caa91000cd',
  },
  {
    title: 'Testing Database Integrations in .NET with xUnit',
    subtitle: 'The Easiest Way To Write Integration Tests in .NET\n',
    imageSrc: '/articles/int-testing.png',
    mediumUrl: 'https://medium.com/@kova98/testing-database-integrations-in-net-with-xunit-b2cea2cb4bc2',
  },
  {
    title: 'Real-Time Apps in .NET with SignalR',
    subtitle: 'Simple, Reliable, and Scalable Real-Time Communication',
    imageSrc: '/articles/signalr.png',
    mediumUrl: 'https://medium.com/@kova98/real-time-apps-in-net-with-signalr-f4e0381771ab',
  },
  {
    title: 'WebSocket in .NET',
    subtitle: 'Real-Time, Two-Way Communication Over TCP/IP',
    imageSrc: '/articles/websocket.png',
    mediumUrl: 'https://medium.com/@kova98/websockets-in-net-59f1fc69bdcb',
  },
];

export default blogData;
