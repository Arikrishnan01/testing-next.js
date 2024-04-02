"use client";

const Home = () => {
 
  const handleButtonClick = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // Subscription logic
          // For simplicity, let's assume the user is already subscribed
          // Here you should implement your subscription logic
          
          // Simulate receiving a push notification
          const title = 'Push  Notification Added';
          const options = {
            body: 'This is the body of the notification',
          };
          new Notification(title, options);
        }
      });
    }
  };

  return (
    <main>
      <button onClick={handleButtonClick}>Send Push Notification</button>
    </main>
  );
}

export default Home;