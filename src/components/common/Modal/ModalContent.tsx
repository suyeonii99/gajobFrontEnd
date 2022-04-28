import { ReactNode } from "react";
import styled from "@emotion/styled";
import { Close } from "@mui/icons-material";

interface IModalContentProps {
  title: ReactNode;
  children: ReactNode;
  onClose: () => void;
  kind: string;
}

// Modal 창 open 시 title, content
export const ModalContent = ({
  title,
  children,
  onClose,
  kind,
}: IModalContentProps) => {
  return (
    <Wrapper>
      <CloseButton>
        <Close onClick={kind === "post" ? onClose : () => {}} />
      </CloseButton>

      <HeaderWrapper>
        <div onClick={kind === "post" ? () => {} : onClose}>{title}</div>
      </HeaderWrapper>
      <Content onClick={kind === "post" ? () => {} : onClose}>
        {children}
      </Content>
    </Wrapper>
  );
};

// 전체 Modal 창
const Wrapper = styled.div`
  min-width: 400px;
  max-height: 500px;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  background-color: #fff;
  overflow: scroll;
`;

// Modal title
const HeaderWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 15pt;
`;

// modal close button
const CloseButton = styled.div`
  text-align: right;
  cursor: pointer;
  &:hover,
  &:active {
    color: lightgray;
  }
`;

// Modal content
const Content = styled.div`
  width: 100%;
`;
