import styled from 'styled-components';
import { device } from '~/styles';

export const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid #e3e4e5;
  background-color: #fff;
`;

export const StyledHeaderInner = styled.div`
  margin: 0 auto;
  height: 80px;

  max-width: 1140px;
  ${device.large} {
  }
`;
