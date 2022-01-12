import { Flex, Spacer } from '@chakra-ui/react';
import React, { ReactChildren, ReactChild } from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import Hearder from '../Header';

type LayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex>
      <Sidebar>
        <Hearder />
        <Content>{children}</Content>
      </Sidebar>
    </Flex>
  );
}

const Content = styled.div`
  height: 100%;
`;

// const Menu = styled(Sidebar)`
//   height: 100%;
//   width: 20%;
//   background: red;
// `;
