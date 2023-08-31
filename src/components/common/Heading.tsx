import { ComponentPropsWithRef, Ref, forwardRef } from 'react';
import { default as styled, css } from 'styled-components';

interface CustomProps {
  size?: 'large' | 'medium' | 'small';
}

interface Props extends ComponentPropsWithRef<'h1'>, CustomProps {
  children: React.ReactNode;
}

const Heading = forwardRef(
  ({ size = 'large', children, ...rest }: Props, ref: Ref<HTMLHeadingElement>) => {
    return (
      <H1 ref={ref} size={size} {...rest}>
        {children}
      </H1>
    );
  },
);

const H1 = styled.h1<CustomProps>`
  font-weight: 700;
  margin: 12px 4px;

  ${({ size }) => {
    if (size === 'large') {
      return css`
        font-size: x-large;
      `;
    }
    if (size === 'medium') {
      return css`
        font-size: large;
      `;
    }
    if (size === 'small') {
      return css`
        font-size: medium;
      `;
    }
  }}
`;

export default Heading;
