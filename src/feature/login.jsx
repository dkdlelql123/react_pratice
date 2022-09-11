function Login() {
  // 로그인 폼 체크
  // 로그인 ajax
  // 로컬스토리지 멤버 등록 - setMember
  // 로그인 상태 변경 - setLogined

  return (
    <div>
      <form>
        <input type="text" name="loginId" placeholder="ID" required />
        <input type="text" name="loginPw" placeholder="PW" required />
        <button>로그인</button>
      </form>
    </div>
  );
}

export default Login;
