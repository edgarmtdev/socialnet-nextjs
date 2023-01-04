import React from "react";
import DropdownContext from ".";

const DropdownProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const openCloseModal = () => setOpen(!open);

  return (
    <DropdownContext.Provider
      value={{ state: open, event: openCloseModal  }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;
