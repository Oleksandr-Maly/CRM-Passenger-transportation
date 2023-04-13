import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/usersSlice';

export const useUserDispatcher = () => {
  const dispatch = useDispatch();

  const dispatchUser = (email, id, token, role, name) => {
    dispatch(setUser({
      email,
      id,
      token,
      role,
      name,
    }));
  }

  return { dispatchUser };
}
