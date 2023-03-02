import React from "react";
import { useSelector } from "react-redux";

import ContactItems from "./ContactItems";
import SearchBox from "./SearchBox";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  return (
    <div>
      <SearchBox />
      {contactList.map((item) => (
        <ContactItems item={item} />
      ))}
    </div>
  );
};

export default ContactList;
