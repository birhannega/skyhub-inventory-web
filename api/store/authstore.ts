import { create } from 'zustand';

// Define a user interface
interface User {
  id: number;
  name: string;
  username: string;
}

// Define the shape of the store's state
interface AuthState {
  user: User|null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  login: (username: string, password: string) => Promise<string>;
}

// Create the zustand store
const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set(() => ({ user })),
  setIsAuthenticated: (isAuthenticated) => set(() => ({ isAuthenticated })),
    login: async (username, password) => {
        const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
        const user = await response.json();
        set(() => ({ user, isAuthenticated: true }));
        return '';
        }

        const error = await response.text();
        return error;
    },
}));

export default useAuthStore;

