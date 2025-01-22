import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setAuthState, clearAuthState, IAuthState, selectUser, selectToken, selectIsAuthenticated } from "../slices/authSlice";
import { storageUtils } from "@/src/utils/storage-util";
import { useAppSelector } from "./reduxHooks";

const AUTH_STORAGE_KEY = "authState";

export const useAuth = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const loginUser = useAppSelector(selectUser);
  const userRole = loginUser?.role;
  const authToken = useSelector(selectToken);
  const isLogin = useSelector(selectIsAuthenticated);

  const initAuth = () => {
    const authState = storageUtils.get<IAuthState>(AUTH_STORAGE_KEY);
    if (authState) {
      dispatch(setAuthState(authState));
    }
  };

  const logout = () => {
    dispatch(clearAuthState());
  };

  return {
    ...auth,
    initAuth,
    logout,
    loginUser,
    userRole,
    authToken,
    isLogin
  };
};
