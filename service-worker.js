
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
    body: data.body || "Discover the JBL Flip 7 with its high-quality build, Pushlock accessory system, detachable wrist strap, and dedicated Auracast button. Explore its IP68 water and dust resistance, powerful sound with a woofer and tweeter, and the new 7-band EQ for a customized audio experience. Available in 6 stunning colors!",
    image: data.image || "https://elomymelo.com/story-images/jbl-flip-7/flip-7-05.jpg",
    icon: data.icon || "https://elomymelo.com/old-images/circle-trans.png",
    data: { url: data.url || "https://elomymelo.com/web-stories/flip-7-story.html" }
  };

  // Trigger update and show notification
  event.waitUntil(
    Promise.all([
      self.registration.update(), // Check and install new sw.js in the background
      self.registration.showNotification(
        data.title || "Top 5 features of the new JBL Flip 7 bluetooth speaker",
        options
      )
    ])
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});

