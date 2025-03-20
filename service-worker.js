
self.addEventListener('push', function(event) {
  if (!event.data) {
    console.error("Push event has no data");
    return;
  }

  const pushData = event.data.json(); // Parse JSON data

  const options = {
    body: pushData.body || 'Click to read more!',
    icon: pushData.icon || 'https://example.com/default-icon.png', // Small icon
    badge: pushData.badge || 'https://example.com/default-badge.png',
    image: pushData.image || 'https://example.com/default-thumbnail.jpg', // Large image
    data: { url: pushData.url || '/' } // Store the URL in the notification
  };

  event.waitUntil(
    self.registration.showNotification(pushData.title || 'New Article', options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url) // Open the article link
  );
});

