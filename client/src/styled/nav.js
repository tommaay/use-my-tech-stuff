import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
   width: 100%;
   padding: 10px;
   background: #0c1425;
   text-align: right;
   border-bottom: 1px solid gray;
   box-shadow: -2px -1px 1px gray;
`;

export const LinksContainer = styled.div`
   padding-right: 50px;
`;

export const NavItem = styled(NavLink)`
   color: white;
   font-size: 1.2rem;
   padding-right: 50px;
   text-decoration: none;
`;
