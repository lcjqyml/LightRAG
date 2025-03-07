const LoginForm = () => {
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      setLoading(true);
      const response = await axios.post('/login', {
        username: formData.get('username'),
        password: formData.get('password')
      });

      login(response.data.access_token);
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