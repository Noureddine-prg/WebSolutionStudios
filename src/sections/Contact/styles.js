import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 100px;

  background-color: #395d93;
  box-sizing: border-box;
  text-align: start;
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 50px;
`;

export const Form = styled.form`
  width: 1000px;
  height: 500px;

  margin: 50px auto 0px;
  display: flex;
  gap: 50px;
`;

export const FormCol = styled.div`
  height: 100%;
  flex: ${(props) => props.size};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputGroup = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputLabel = styled.label`
  font-size: 20px;
  font-weight: 500;
`;

export const InputField = styled.input`
  height: 10px;
  outline: none;
  border: none;
  padding: 10px 10px;
  border: black 2px solid;

  font-size: 18px;
`;

export const TextArea = styled.textarea`
  height: 100%;
  outline: none;
  border: none;
  padding: 20px 10px;
  margin: 5px 0px 0px;
  border: black 2px solid;

  font-size: 18px;
`;

export const SubmitButton = styled.input`
  height: 50px;
  border: white 2px solid;

  outline: none;
  border: none;
  border-radius: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-size: 20px;
  transition: color 200ms ease, background-color 200ms ease;
  &:hover {
    color: black;
    background-color: white;
  }
`;
