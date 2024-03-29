import React, { useState } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  // Define event template function
  const eventTemplate = (props) => {
    return (
      <div>
        <div>{props.Subject}</div>
        <div>{props.StartTime.toLocaleString()}</div>
        <div>{props.Location}</div>
        <div>Status: {props.Status}</div> {/* Display the Status here */}
      </div>
    );
  };

  return (
    <div className="mt-0 p-4 bg-gray-100 rounded-3xl overflow-hidden">
      <Header title="Calendar" />
      <div className="m-2 md:m-10 p-6 bg-white rounded-3xl">
        <ScheduleComponent
          height="650px"
          ref={(schedule) => setScheduleObj(schedule)}
          selectedDate={new Date(2024, 0, 10)}
          eventSettings={{
            dataSource: scheduleData,
            template: eventTemplate // Assign the event template
          }}
          dragStart={onDragStart}
        >
          <ViewsDirective>
            {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
          </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
        </ScheduleComponent>
        <PropertyPane>
          <table style={{ width: '100%', background: 'white' }}>
            <tbody>
              <tr style={{ height: '50px' }}>
                <td style={{ width: '100%' }}>
                  <DatePickerComponent
                    value={new Date(2024, 0, 10)}
                    showClearButton={false}
                    placeholder="Current Date"
                    floatLabelType="Always"
                    change={change}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </PropertyPane>
      </div>
    </div>
  );
};

export default Scheduler;
