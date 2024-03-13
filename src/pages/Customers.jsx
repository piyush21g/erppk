import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <Header title="Customers" style={{ marginTop: '0.5rem', fontSize: '1rem' }} />
      <div className="mt-2 bg-white rounded-lg shadow">
        <GridComponent
          dataSource={customersData}
          enableHover={true}
          allowPaging={true}
          pageSettings={{ pageCount: 5 }}
          selectionSettings={selectionsettings}
          toolbar={toolbarOptions}
          editSettings={editing}
          allowSorting={true}
          style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}
        >
          <ColumnsDirective>
            {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
        </GridComponent>
      </div>
    </div>
  );
};

export default Customers;
