"use client";
import { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Switch, Button, Box } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notificationCount, setNotificationCount] = useState(0);
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
            body: 'Notification sent successfully',
          };
          new Notification(title, options);
          setNotificationCount(notificationCount + 1);
        }
      });
    }
    setAnimateIcon(true);
    setTimeout(() => {
      setAnimateIcon(false);
    }, 500);
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
            <div className="notification-layer1">
              <div className="notification-layer2">
                <div className="notification-layer3">
                  <NotificationsNoneIcon
                    style={{
                      fontSize: 100,
                      color: '#3f51b5',
                      transition: 'transform 0.5s ease',
                      transform: animateIcon ? 'scale(1.1)' : 'scale(1)',
                    }}
                  />
                  <div className="notification-count">{notificationCount}</div>
                </div>
              </div>
            </div>
          </Box>
          <div className="button-container">
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
              sx={{
                fontSize: '1rem',
                fontFamily: 'Arial, sans-serif',
                backgroundImage: 'linear-gradient(to right, #2196F3, #1976D2)',
                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundImage: 'linear-gradient(to right, #1976D2, #0D47A1)',
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

        .notification-layer1 {
          padding: 20px;
          background-color: #ffffff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        }

        .notification-layer2 {
          padding: 20px;
          background-color: #f0f0f0;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .notification-layer3 {
          padding: 20px;
          background-color: #e0e0e0;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .notification-count {
          position: absolute;
          top: -10px;
          right: -10px;
          background-color: #ffffff;
          color: #3f51b5;
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

