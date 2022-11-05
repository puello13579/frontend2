import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/05-08-dynamic-routied-board-query/11");
  };
  const onClickMove2 = () => {
    router.push("/05-08-dynamic-routied-board-query/51");
  };
  const onClickMove100 = () => {
    router.push("/05-08-dynamic-routied-board-query/200");
  };

  return (
    <>
      <button onClick={onClickMove1}>1번 게시글로 이동하기</button>;
      <button onClick={onClickMove2}>2번 게시글로 이동하기</button>;
      <button onClick={onClickMove100}>3번 게시글로 이동하기</button>;
    </>
  );
}
