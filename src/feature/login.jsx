function Login() {
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
