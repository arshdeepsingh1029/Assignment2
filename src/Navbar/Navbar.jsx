import { useEffect, useState } from "react";
import {
  Brand,
  BrandImage,
  Container,
  NavLink,
  Menu,
  MenuItems,
  Nav,
  MobileMenu,
  MobileMenuContainer,
  MobileMenuHover,
} from "./NavbarStyle";
import { NavbarData } from "./NavbarData";

export default function Navbar() {
  const screenSize = 580;
  const [menu, setMenu] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth < screenSize) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth < screenSize) setMenu(true);
  }, []);

  return (
    <div>
      <Nav>
        <Container ss={screenSize}>
          <MobileMenuContainer
            menu={menu}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <MobileMenu />
            <MobileMenuHover />
          </MobileMenuContainer>
          <Menu toggleMenu={toggleMenu} ss={screenSize}>
            {NavbarData.map((item, index) => (
              <MenuItems key={index} toggleMenu={toggleMenu} ss={screenSize}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </MenuItems>
            ))}
          </Menu>
        </Container>
      </Nav>
    </div>
  );
}
