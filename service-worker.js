
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
    image: data.image || "https://elomymelo.com/story-images/jbl-charge-6/charge-6-06.jpg",
    icon: data.icon || "https://elomymelo.com/old-images/circle-trans.png",
    data: { url: data.url || "https://elomymelo.com/web-stories/flip-7v6-story.html" },
    tag: Date.now().toString() // Unique tag for each noti 
  };

  event.waitUntil(
    Promise.all([
      self.registration.update(), // Check and install new sw.js in the background
      self.registration.showNotification(
        data.title || "The New JBL Charge 6, 10 features you must know before buying",
        options
      )
    ])
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});

