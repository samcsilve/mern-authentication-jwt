import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [dispatch, userInfo, history]);

  return (
    <>
      <h3>Welcome, {userInfo && userInfo.name}!</h3>
    </>
  );
};

export default HomeScreen;
