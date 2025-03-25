
self.addEventListener('install', event => {
  self.skipWaiting(); // Activate immediately after install
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

  // Use custom Flip 7 data as fallback if no valid payload
  const options = {
    body: data.body || "Discover top 10 features of the new JBL Charge 6 speaker, including its detachable carrying handle, bold JBL logo, Type-C charging with power bank support, improved stability, IP68 waterproof rating, and enhanced 7-band EQ.",
    image: data.image || "https://elomymelo.com/story-images/jbl-charge-6/charge-6-06.jpg",
    icon: data.icon || "https://elomymelo.com/old-images/circle-trans.png",
    data: { url: data.url || "https://elomymelo.com/web-stories/charge-6-story.html" }
  };

  // Trigger update and show notification
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

