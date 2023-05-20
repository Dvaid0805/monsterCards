import React from 'react';
import styled from 'styled-components';

type Props = {
  className: string;
  placeholder: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = styled.input`
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 150px;
  line-height: 30px;
  margin-bottom: 30px;
`;

export default function SearchBox({
  className,
  placeholder,
  onChangeHandler,
}: Props) {
  return (
    <Input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}
