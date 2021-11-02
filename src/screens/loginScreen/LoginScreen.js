import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";
import useWindowDimensions from "../../WindowScreen";

import "./loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);
  const { height, width } = useWindowDimensions();
  const handleLogin = () => {
    dispatch(login());
  };

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      {width < 780 ? null : <div className="leftside"></div>}
      <div className="rightside">
        <div className="rightside__text-wrapper">
          <img
            src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
            width="300"
          />
          <h1>Welcome to youtube clone</h1>
          <p>you can login using your google account</p>
          <button onClick={handleLogin}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
