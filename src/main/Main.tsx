import { useState } from "react";
import LoginModal from "../modal/LoginModal";

function Main() {
  const [isClicked, setIsClicked] = useState(false);

  const loginHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div>
      <h1 onClick={loginHandler}>로그인</h1>
      {isClicked === true && <LoginModal />}
    </div>
  );
}

export default Main;
