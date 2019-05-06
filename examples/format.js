import 'rc-time-picker/assets/index.less';
import React from 'react';
import ReactDom from 'react-dom';
import dayjs from 'dayjs';
import TimePicker from 'rc-time-picker';

ReactDom.render(
  <div>
    <TimePicker defaultValue={dayjs()} showHour={false} />
    <TimePicker defaultValue={dayjs()} showMinute={false} />
    <TimePicker defaultValue={dayjs()} showSecond={false} />

    <TimePicker defaultValue={dayjs()} showMinute={false} showSecond={false} />
    <TimePicker defaultValue={dayjs()} showHour={false} showSecond={false} />
    <TimePicker defaultValue={dayjs()} showHour={false} showMinute={false} />
  </div>,
  document.getElementById('__react-content'),
);
