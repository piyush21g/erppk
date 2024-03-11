import React, { useRef } from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Toolbar, Edit, Page, CommandColumn } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const gridRef = useRef(null);

  const toolbarOptions = ['Search', 'Add', 'Delete'];

  const editing = { allowDeleting: true, allowEditing: true };

  const commandClick = (e) => {
    if (e.command === 'delete') {
      gridRef.current.deleteRecord(e.rowData);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        ref={gridRef}
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        commandClick={commandClick}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit, Page, CommandColumn]} />

      </GridComponent>
    </div>
  );
};
export default Employees;
