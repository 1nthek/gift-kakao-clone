import styled from 'styled-components';
import { device } from '~/styles';

export const StyledHeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid #e3e4e5;
  background-color: #fff;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 80px;
  max-width: 1280px;
`;

export const StyledLogoWrapper = styled.div`
  width: 81px;
`;
