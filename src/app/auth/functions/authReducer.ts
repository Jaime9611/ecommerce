import { ActionType, IAuthAction, IAuthState } from '../models/auth';
import { IUser } from '../models/user';

const authReducer = (state: IAuthState, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        token: action.payload.token,
        user: action.payload.user,
      };

    case ActionType.LOGOUT:
      return { token: '', user: {} as IUser };

    case ActionType.SET_LOADING:
      return { ...state };

    default:
      return state;
  }
};

export default authReducer;
