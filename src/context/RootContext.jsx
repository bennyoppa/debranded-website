import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  pageData,
  menuButtonsData,
  validUrls,
  logoText,
  logoIcon,
} from "../constants/index";

export const RootContext = createContext({});

const RootContextProvider = (props) => {
  const history = useHistory();
  const [menuButtons, setMenuButtons] = useState(menuButtonsData);
  const [currentUrl, setCurrentUrl] = useState(history.location.pathname);
  const [openDrawer, setOpenDrawer] = useState(false);

  const redirectPageHandler = (url) => {
    setCurrentUrl(url);
    setOpenDrawer(false);

    if (validUrls.includes(url)) {
      const newMenuButtons = menuButtons.map((b) => {
        if (b.url === url) {
          b.selected = true;
        } else {
          b.selected = false;
        }
        return b;
      });
      setMenuButtons(newMenuButtons);
    }

    history.push({ pathname: url });
  };

  const drawerCloseHandler = () => {
    setOpenDrawer(false);
  };

  const openDrawerHandler = () => {
    setOpenDrawer(true);
  };

  const initialValue = {
    pageData,
    validUrls,
    menuButtons,
    logoText,
    logoIcon,
    currentUrl,
    openDrawer,
    redirectPageHandler,
    drawerCloseHandler,
    openDrawerHandler,
  };

  return (
    <RootContext.Provider value={initialValue}>
      {props.children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;

RootContext.displayName = "RootContexts";
