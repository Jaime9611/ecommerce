import { SyntheticEvent } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

const Login = () => {
  const { login, loading } = useAuth();
  const { state, handleChange } = useForm({ password: '', name: '' });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    login(state.name, state.password);
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            aria-label='name'
            value={state.name}
            name='name'
            placeholder='Type Your Name'
            type='text'
            onChange={handleChange}
          />

          <input
            aria-label='password'
            value={state.password}
            name='password'
            placeholder='Password'
            type='password'
            onChange={handleChange}
          />

          <button type='submit'>Login</button>
        </form>
      )}
    </>
  );
};

export default Login;
