import styled, { css } from 'styled-components';
import { device } from '~/styles';

interface IProps {
  $fullHeight?: boolean;
  $align: 'top' | 'center' | 'bottom';
}

const conentCSS = css<IProps>`
  padding: 20px;
  margin-top: 80px;

  ${({ $fullHeight }) =>
    $fullHeight &&
    css`
      min-height: calc(100vh - 107px);
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}

  ${({ $align }) =>
    $align &&
    $align !== 'center' &&
    css`
      & > .container {
        flex: 1;
      }
    `}
`;

export const StyledContent = styled(
  ({
    p,
    px,
    py,
    m,
    mx,
    my,
    mt,
    borderBottomWidth,
    $fullHeight,
    $align,
    ...rest
  }) => <div {...rest} />
)<IProps>`
  ${conentCSS}
`;
