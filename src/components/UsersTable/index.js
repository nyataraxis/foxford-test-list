import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MUIDataTable from "mui-datatables";

import {
  changeSelected,
  saveReq,
  selectData,
} from "../../redux/reducers/usersDataReducer";

export function UsersTable() {

  const cols = [
    {
      label: "Имя",
      name: "name",
    },
    {
      label: "Фамилия",
      name: "surname",
    },
    {
      label: "Возраст",
      name: "age",
    },
  ];

  const data = useSelector(selectData);

  const dispatch = useDispatch();

  // один раз при загрузке страницы вызываем
  useEffect(() => {
    dispatch(saveReq());
  }, []);

  const handleSelectionChange = (curRowsSel, allRowsSel, allRowsIndexes) => {
    dispatch(changeSelected(allRowsIndexes));
  };

  const options = {
    filter: false,
    pagination: false,
    search: false,
    onRowSelectionChange: handleSelectionChange,
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      <MUIDataTable
        title={"Список сотрудников"}
        data={data}
        columns={cols}
        options={options}
      />
    </div>
  );
}
