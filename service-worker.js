
self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting()); // Activate immediately after install
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim()); // Take control of clients immediately
});

self.addEventListener('push', event => {
  let data = {};
  if (event.data) {
    try {
      data = event.data.json(); // Try to parse encrypted payload
    } catch (e) {
      console.log('Failed to parse push data:', e);
    }
  }

  const options = {
    body: data.body || "Dive into the ultimate showdown between JBL Flip 7 and Flip 6 with 10 essential highlights that reveal their differences and upgrades. The Flip 6 introduced the iconic big, bold JBL logo, setting a cool, stylish tone, while the Flip 7 builds on this with a similar striking design.",
    vibrate: [200, 100, 200], requireInteraction: true, tag: Date.now().toString(),
    image: data.image || "https://elomymelo.com/story-images/jbl-flip-7v6/flip-7v6-01.jpg",
    data: { url: data.url || "https://elomymelo.com/web-stories/charge-6vf7-story.html" },
    icon: data.icon || "https://elomymelo.com/old-images/circle-trans.png"
  };

  event.waitUntil(
    Promise.all([
      self.registration.update(), // Check and install new sw.js in the background
      self.registration.showNotification(
        data.title || "JBL Flip 7 vs Flip 6 | 10 Essential Highlights",
        options
      )
    ])
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});

