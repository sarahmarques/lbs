import { createContext, useEffect, useState } from "react";
import { setUser as setFormUser } from "../services/forms";
import jwt_decode from "jwt-decode";
import { getCookie } from "@utilities/cookies";
import { useRouter } from "next/router";

interface UserInfo {
  exp: number;
  iat: number;
  updated_at: number;
  aud: string;
  sub: string;
  app_metadata: {
    authorization: {
      roles: string[];
    };
  };
}

export const UserContext = createContext({
  user: null,
  logoutUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = (user) => {
    setUser(user);
    setFormUser(user.token, user.lbsNumber);
  };

  const router = useRouter();

  const logoutUser = () => {
    document.cookie = "nf_jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //TODO update when login is set in auth0 router.push('/.netlify/functions/logout');
    setUser(null);
  };

  useEffect(() => {
    const token = getCookie("nf_jwt");
    if (token) {
      var decoded: UserInfo = jwt_decode(token);
      // TODO to be updated with the correct data from auth0
      loginUser({
        userData: decoded,
        lbsNumber: decoded.aud,
        token: decoded.aud,
      });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
