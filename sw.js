self.addEventListener('push', () => {

    self.registration.sendNotification('test Message', {})
});