import { FC } from 'react';
import { StyledContainer, StyledContainerInner } from './style';
import { SpaceProps } from '~/styles';

interface IProps extends SpaceProps {
  className?: string;
}

export const Container: FC<IProps> = ({ className, ...props }) => {
  return <StyledContainer className={className} {...props} />;
};
