import React from "react";

import ContactItems from "./ContactItems";
import SearchBox from "./SearchBox";

const ContactList = () => {
  return (
    <div>
      <SearchBox />
      <ContactItems />
    </div>
  );
};

export default ContactList;
