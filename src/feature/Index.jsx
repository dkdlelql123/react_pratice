import Login from "./login";
import Lists from "./pokemon/Lists";
import { useState } from "react";

function Index() {
  const [member, setMember] = useState(localStorage.member);
  const [logined, setLogined] = useState(member?.id ? true : false);

  const pageData = [
    { id: 1, title: "투두 리스트", link: "/todos" },
    { id: 2, title: "포켓몬 리스트", link: "/pokemon" },
  ];

  const pageList = pageData.map((data, idx) => {
    return (
      <li key={data.id}>
        <a href={data.link}>
          {idx}. {data.title}
        </a>
      </li>
    );
  });

  return (
    <div className="index">
      {logined ? <div>로그인 상태입니다.</div> : <Login />}

      <ul>{pageList}</ul>

      <Lists />
    </div>
  );
}

export default Index;
