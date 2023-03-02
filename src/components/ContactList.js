import React from "react";

import ContactItems from "./ContactItems";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);

  return (
    <div>
      <SearchBox />
      {contactList.map((item) => (
        <ContactItems />
      ))}
    </div>
  );
};

export default ContactList;
