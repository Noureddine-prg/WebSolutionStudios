import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 50%;
  height: 50px;
  z-index: 10;
  pointer-events: all;
  background-color: #555555;
  border-radius: 0 0 25px 25px;
`;

export const NavbarLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

export const NavbarLink = styled.a`
  text-decoration: none;
  color: white;
`;

export const NavbarElement = styled.div`
  text-decoration: none;
  font-size: 25px;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }

  &.active::after {
    transform: scaleX(1);
    transform-origin: left;
    background-color: black;
  }
`;
