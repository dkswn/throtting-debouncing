import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let timerId = null;
  const [state, setState] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // 메모리 누수 방지
    return () => {
      // ㅣ언마운트 시
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  });

  const throttle = (delay) => {
    if (timerId) {
      // timerId 가 있으면 바로 함수 종료
      return;
    }
    setState(!state);
    console.log(`API 요청 실행 ${delay}ms 동안 추가요청사항은 안받습니다`);
    timerId = setTimeout(() => {
      console.log(`${delay}ms 지남 추가 요청 받습니다!`);
      timerId = null;
    }, delay);
  };

  // 반복적인 이벤트 이후 ,delay가 지나면 function
  const debounce = (delay) => {
    if (timerId) {
      // 할당되어 있는 timerId 에 해당하는 타이머 제거
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      console.log(`마지막 요청으로 부터 ${delay}ms 지났으므로 API 요청 실행`);
      timerId = null;
    }, delay);
  };
  return (
    <div
      style={{
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <h1>Button 이벤트 예제</h1>
      <button onClick={() => throttle(2000)}>쓰로틀링 버튼</button>
      <button onClick={() => debounce(2000)}>디바운싱 버튼</button>
      <div>
        <button
          onClick={() => {
            navigate("/componey");
          }}
        >
          페이지 이동
        </button>
      </div>
    </div>
  );
}

export default Home;
