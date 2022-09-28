import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(211, 211, 211, 0.5);
  align-items: center;
  z-index: 99;
`;
export const Modals = styled.div`
  position: absolute;
  width: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
`;
export const ImgModal = styled.img`
  display: block;
  width: 100%;
  cursor: pointer;
`;
