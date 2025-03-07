import { useAuthStore } from "@/stores/state";
import { useState } from "react";
import Input from '@/components/ui/Input'
import Button from "@/components/ui/Button";
import { loginToServer } from '@/api/lightrag'

const LoginForm = () => {
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      setLoading(true);
      const response = await loginToServer(formData.get('username') as string, formData.get('password') as string);
      
      login(response.access_token);
    } catch (error) {
      console.error('Login failed...', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="username" placeholder="username" required />
      <Input name="password" type="password" placeholder="password" required />
      <Button type="submit" disabled={loading}>
        {loading ? 'login...' : 'login'}
      </Button>
    </form>
  );
};

export default LoginForm