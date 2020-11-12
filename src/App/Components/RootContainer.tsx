import React, { useState } from "react";

import { AppContainer, Row } from "handsome-ui";

import { Page } from "../types";
import SortingContainer from "../../Sorting/Components/SortingContainer";

const RootContainer = () => {
  const MENU_ITEMS = ["About", "Source"];

  const [page, setPage] = useState<Page>(Page.home);

  const _renderMenu = () => {
    return (
      <Row version={1} className="app_menu">
        {MENU_ITEMS.map((item) => (
          <div className="app_menu-item">{item}</div>
        ))}
      </Row>
    );
  };

  return (
    <AppContainer
      className="root_container"
      headerMenu={_renderMenu()}
      mobileMenu={MENU_ITEMS}
      onMobileClick={() => null}
    >
      <SortingContainer />
    </AppContainer>
  );
};

export default RootContainer;
