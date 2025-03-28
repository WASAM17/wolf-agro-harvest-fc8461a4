
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Admin = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Login Failed",
        description: "Admin features are coming soon. Please check back later.",
        variant: "destructive"
      });
      setIsLoggingIn(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-wolf-brown mb-6">
                {t('adminTitle')}
              </h1>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('username')}
                    </label>
                    <Input
                      id="username"
                      name="username"
                      value={credentials.username}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('password')}
                    </label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-wolf-brown hover:bg-wolf-brown/90"
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? 'Logging in...' : t('loginBtn')}
                  </Button>
                </div>
              </form>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                Admin features are currently in development
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
