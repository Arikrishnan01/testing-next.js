// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useTheme } from "next-themes";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";

// const Home = () => {

// // Determines the current theme based on the 'theme' context and
// // handles 'system' theme setting.
//   const {theme, setTheme} = useTheme();

//   const currentTheme = theme === 'system' ? systemTheme : theme;

//   // handle click fun when user click button the notification will send
//   const handleButtonClick = () => {
//     if ('Notification' in window) {
//       Notification.requestPermission().then((permission) => {
//         if (permission === 'granted') {
//           // Subscription logic
//           // For simplicity, let's assume the user is already subscribed
//           // Here you should implement your subscription logic

//           // Simulate receiving a push notification
//           const title = 'Push  Notification Added';
//           const options = {
//             body: 'This is the body of the notification',
//           };
//           new Notification(title, options);
//         }
//       });
//     }
//   };

//   return (
//     <div className="container">
//       <div>
//        
//        </div>
//       <div>
//         <button onClick={handleButtonClick}>Send Push Notification</button>
//       </div>
//     </div>
//   );
// }

// export default Home;
/*     ---------------------------------       */

// "use client";
// Home.js

// import { useState } from 'react';
// import { ThemeProvider, createTheme, CssBaseline, Switch, Button } from '@mui/material';
// import styles from './styles/home.module.css'; // No need to import the CSS module

// const Home = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   // Define custom theme
//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light', // Set the mode based on darkMode state
//     },
//   });

//   // handle click fun when user click button the notification will send
//   const handleButtonClick = () => {
//         if ('Notification' in window) {
//           Notification.requestPermission().then((permission) => {
//             if (permission === 'granted') {
//               // Subscription logic
//               // For simplicity, let's assume the user is already subscribed
//               // Here you should implement your subscription logic
    
//               // Simulate receiving a push notification
//               const title = 'Push  Notification Added';
//               const options = {
//                 body: 'This is the body of the notification',
//               };
//               new Notification(title, options);
//             }
//           });
//         }
//       };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <div className={`${styles.container} ${darkMode ? styles.dark : ''}`}>
//         <div className={styles['top-section']}>
//           <h1>SEND PUSH NOTIFICATION</h1>
//           <div className="top-mode-con">
//             <span className='top-mode-title'>mode</span>
//             <Switch
//               checked={darkMode}
//               onChange={toggleDarkMode}
//               name="toggleDarkMode"
//               inputProps={{ 'aria-label': 'toggle dark mode' }}
//             />
//           </div>
//         </div>
//         <div className={styles['main-section']}>
//           <button className='send-btn' onClick={handleButtonClick}>Send Push Notification</button>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default Home;

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
            body: 'This is the body of the notification',
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
              Send Push Notification
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

























