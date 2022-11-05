import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD);
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variable 가 $역할을 대신 해준다
        writer: "도날드",
        title: "안녕하세요",
        contents: "반갑습니다",
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };
  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기)-요청하기</button>
    </>
  );
}
