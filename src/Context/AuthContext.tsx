import  { createContext, useState, useContext } from 'react'
import type { ReactNode } from 'react';

interface User {
    email: string;
    password: string;
}
interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => boolean;
    logout: () => void;
    register: (email: string, password: string) => void;
}
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string, password: string) => {
        // ✅ Simulate login logic (replace with backend call if needed)
        if (user && email === user.email && password === user.password) {
            return true;
        }
        return false;
    };

    const logout = () => setUser(null);

    const register = (email: string, password: string) => {
        setUser({ email, password });
        console.log('Registered:', { email, password });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};