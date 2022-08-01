import styled from 'styled-components';

export const ContactsContainer = styled.ul`
  padding: 30px;
  margin: 0;
  margin-top: 30px;
  outline: 1px solid white;
  background-color: #4b7f83;
`;

export const ContactEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px 10px 0 10px;
  margin-top: 2px;
  border-radius: 5px;

  & > span {
    width: 50%;
  }
  & > span:first-child {
    text-align: left;
  }
`;
