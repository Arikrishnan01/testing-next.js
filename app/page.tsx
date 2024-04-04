"use client";
import { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Switch, Button, Box } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notificationCount, setNotificationCount] = useState(0); // State for notification count
  const [animateIcon, setAnimateIcon] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleButtonClick = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          const title = 'Push Notification Added';
          const options = {
            body: 'Notification send successfully',
          };
          new Notification(title, options);
          // Increment notification count
          setNotificationCount(notificationCount + 1);
        }
      });
    }
    // Start the animation when button is clicked
    setAnimateIcon(true);
    // Reset the animation after 500ms
    setTimeout(() => {
      setAnimateIcon(false);
    }, 500);
    // Reset notification count after 5 seconds
    setTimeout(() => {
      setNotificationCount(0);
    }, 5000);
  };

  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
        typography: {
          fontFamily: 'Arial, sans-serif',
        },
      })}
    >
      <CssBaseline />
      <div className="main-container">
        <div className="container">
          <div className="navbar">
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>SEND PUSH NOTIFICATION</h1>
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              name="toggleDarkMode"
              inputProps={{ 'aria-label': 'toggle dark mode' }}
            />
          </div>
          <Box display="flex" justifyContent="center" alignItems="center" height="70vh" className="notification-icon">
            <NotificationsNoneIcon
              style={{
                fontSize: 100,
                color: '#3f51b5', // Change color of notification count
                transition: 'transform 0.5s ease',
                transform: animateIcon ? 'scale(1.1)' : 'scale(1)',
              }}
            />
            <div className="notification-count">{notificationCount}</div>
          </Box>
          <div className="button-container">
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
              sx={{
                fontSize: '1rem', // Decreased font size
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#2196F3',
                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
                transition: 'background-color 0.3s ease',
                '&:hover': { // Add hover effect
                  backgroundColor: '#1976D2', // Darker background color on hover
                },
              }}
            >
              Send Notification
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .main-container {
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${darkMode ? '#212121' : '#FFFFFF'};
          transition: background-color 0.5s ease-in-out;
        }

        .container {
          width: 80%;
          max-width: 600px;
          background-color: ${darkMode ? '#333333' : '#F5F5F5'};
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: ${darkMode ? '#FFFFFF' : '#000000'};
          margin-bottom: 20px;
        }

        .notification-icon {
          position: relative;
        }

        .notification-count {
          position: absolute;
          top: 5px;
          right: 5px;
          background-color: #ffffff; // Background color of count
          color: #3f51b5; // Color of count
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        }

        .button-container {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </ThemeProvider>
  );
};

export default Home;
