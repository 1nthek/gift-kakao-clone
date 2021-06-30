import styled from 'styled-components';
import { SpaceProps, space } from '~/styles';

type IProps = SpaceProps;

export const StyledContainer = styled(
  ({ p, pl, pr, pt, pb, m, ml, mr, mt, mb, ...props }) => (
    <StyledContainerInner {...props} />
  )
)<IProps>`
  ${space};
`;

export const StyledContainerInner = styled.header`
  max-width: 1140px;
  margin: 0 auto;
`;
