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
    body: data.body || "Discover the JBL Flip 7 with its high-quality build, Pushlock accessory system, detachable wrist strap, and dedicated Auracast button",
    image: data.image || "https://elomymelo.com/story-images/jbl-flip-7/flip-7-05.jpg",
    data: { url: data.url || "https://elomymelo.com/web-stories/flip-7-story.html" }
  };

  // Title falls back to Flip 7 article if not provided
  event.waitUntil(
    self.registration.showNotification(
      data.title || "Top 5 features of the new JBL Flip 7 bluetooth speaker",
      options
    )
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
