import React from "react";
import { useSelector } from "react-redux";

import { selectSelected, selectData } from "../../redux/reducers/usersDataReducer";

export function SelectedUsers() {
  const selectedRowIndexes = useSelector(selectSelected);
  const data = useSelector(selectData);
  const selectedNames = selectedRowIndexes.map(index => {
      return data[index] && data[index].name;
  });
  const selectedNamesString = selectedNames && selectedNames.length ? selectedNames.join(', ') : '';
  return (
    <div style={{ maxWidth: "100%" }}>
      <p className={"selected-users"}>{selectedNamesString}</p>
    </div>
  );
}
