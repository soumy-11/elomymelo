self.addEventListener('push', event => {
  // No payload from server, use static data
  const title = "Top 5 features of the new JBL Flip 7 bluetooth speaker";
  const options = {
    body: "Discover the JBL Flip 7 with its high-quality build, Pushlock accessory system, detachable wrist strap, and dedicated Auracast button",
    image: "https://elomymelo.com/story-images/jbl-flip-7/flip-7-05.jpg",
    data: { url: "https://elomymelo.com/web-stories/flip-7-story.html" }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
