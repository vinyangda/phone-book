import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ContactItems from "./ContactItems";
import SearchBox from "./SearchBox";

const ContactList = () => {
  const { contact, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let list = contact.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
    } else {
      setFilteredList(contact);
    }
  }, [keyword]);
  return (
    <div>
      <SearchBox />
      <div className="contact-list">
        num:{filteredList.length}
        {filteredList.map((item) => (
          <ContactItems item={item} />
        ))}
      </div>
    </div>
  );
};
export default ContactList;
