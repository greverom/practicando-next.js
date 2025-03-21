import styled from "styled-components";
import Link from "next/link";
import { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #ff6a00, #4a5568);
  padding: 1rem;
  z-index: 50;
`;

export const NavbarContent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
  width: 100%;
    padding: 0 0.5rem;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none; 
  }
`;

export const NavLink = styled(Link)`
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &.active {
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: white;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
`;

export const MobileButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; 
  }
`;

export const Spacer = styled.div`
  padding-top: 64px; 
`;

export const MobileMenuContainer = styled.ul`
  position: fixed;  
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8); 
  padding: 2rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100; 
  text-align: left;
  animation: ${slideDown} 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 

  li {
    padding: 1rem 0;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.4;
  }
`;