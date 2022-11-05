import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangePassword(event) {
    setEmail(event.target.value);
  }
  function onClickSignup(event) {
    console.log(email);
    console.log(password);

    //이메일 안에 @있는지 데이터 검증//

    if (email.includes("@") === false) {
      //   alert("이메일이 올바르지 않습니다! @가 없음");
      //   document.getElementById("error").innerText =
      //     "이메일이 올바르지 않습니다! @가 없음";
      setEmailError("이메일이 올바르지 않습니다! @가 없음");
    } else {
      //   alert("회원가입을 축하합니다");
      //메시지 알림 이전, Backend 컴퓨터에 있는 API 요청하기 //
      setEmailError("회원가입을 축하합니다.");
    }
  }
  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail}></input>
      <div id="error">{emailError}</div>
      비밀번호:<input type="password" onChange={onChangePassword}></input>
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
}
