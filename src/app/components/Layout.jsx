import React, { useEffect, useState } from 'react';
import HeaderComponent from '@/app/components/Header/index';
import DashBoard from '@/app/components/DashBoard/index';
import { useRouter } from 'next/navigation';
import { API_ENDPOINTS } from '@/config/api';

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [projects, setProjects] = useState([]);
  const router = useRouter();
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  };

  const checkAccessToken = async () => {
    const token = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!token || !refreshToken) {
      router.push('/login');
      return;
    }

    try {
      const response = await fetch(API_ENDPOINTS.CHECK_TOKEN, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (response.ok) {
        return;
      }

      const refreshResponse = await fetch(API_ENDPOINTS.REFRESH_TOKEN, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${refreshToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (!refreshResponse.ok) {
        throw new Error('Failed to refresh access token');
      }

      const data = await refreshResponse.json();
      localStorage.setItem('accessToken', data.access_token);
    } catch (error) {
      console.error('Error refreshing access token:', error);
      router.push('/login');
    }
  };

  useEffect(() => {
    if (!projects) {
      checkAccessToken();
    }
  }, [setProjects]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.push('/login');
    } else {
      const fetchData = async () => {
        try {
          const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          };
          const response = await fetch(API_ENDPOINTS.PROJECTS, { headers });
          if (!response.ok) {
            throw new Error('Failed to fetch projects');
          }
          const data = await response.json();
          setProjects(data.results);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, []);

  return (
    <div className={`flex flex-col min-h-screen `}>
      <HeaderComponent
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <DashBoard projects={projects} />
    </div>
  );
};

export default Layout;
