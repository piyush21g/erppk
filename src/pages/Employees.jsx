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
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <Header title="Employees" style={{ fontSize: '1rem', marginTop: '0.5rem' }} />
      <div className="mt-2 bg-white rounded-lg shadow">
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
          style={{ marginTop: '0.5rem' }}
        >
          <ColumnsDirective>
            {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Toolbar, Edit, Page, CommandColumn]} />
        </GridComponent>
      </div>
    </div>
  );
};

export default Employees;
