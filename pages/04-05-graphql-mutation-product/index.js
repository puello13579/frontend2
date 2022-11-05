import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_PRODUCT);
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variable 가 $역할을 대신 해준다
        seller: "네오", //이 함수에 없으면 스코프 체인을 통해서 위에 함수가 있는지 찾아보게 된다.
        createProductInput: {
          name: "빨간약",
          detail: "진실을 알게 해주는 알약",
          price: 3000,
        },
      },
    });
    console.log(result);
    alert(result.data.createProduct.message);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기)-요청하기</button>
    </>
  );
}
