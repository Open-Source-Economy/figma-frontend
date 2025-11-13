import { useState, useEffect } from 'react';

export interface MaintainerAuth {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  initials: string;
}

interface UseAuthReturn {
  user: MaintainerAuth | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  // Mock function to simulate logged-in state for demo
  mockLogin: () => void;
}

/**
 * Mock authentication hook
 * In production, this would connect to Passport.js backend
 */
export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<MaintainerAuth | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate checking auth state on mount
  useEffect(() => {
    const checkAuth = async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Check localStorage for demo purposes
      const storedUser = localStorage.getItem('mock_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock successful login
    const mockUser: MaintainerAuth = {
      id: '1',
      name: 'Sarah Chen',
      email: email,
      initials: 'SC'
    };
    
    setUser(mockUser);
    localStorage.setItem('mock_user', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mock_user');
  };

  const mockLogin = () => {
    const mockUser: MaintainerAuth = {
      id: '1',
      name: 'Sarah Chen',
      email: 'sarah@example.com',
      initials: 'SC',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    };
    
    setUser(mockUser);
    localStorage.setItem('mock_user', JSON.stringify(mockUser));
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    mockLogin
  };
}
