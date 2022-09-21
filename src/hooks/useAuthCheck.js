import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

const useAuthCheck = () => {
  const dispatch = useDispatch();
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.user) {
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: auth.user,
          })
        );
      }
    }
    setAuthCheck(true);
  }, [dispatch]);
  return authCheck;
};

export default useAuthCheck;
