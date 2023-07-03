import { openRequestAttendance } from "@/store/reducers/modal";
import { useSelector, useDispatch } from "react-redux";
import { FiX } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import moment from "moment";

interface CProps {
  title: string;
}

export default function RequestAttendance({title}: CProps) {
  const {request_attendance} = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(openRequestAttendance(false));
  }

  const [date, setDate] = useState<Date>(moment().toDate());

  const handleChange = (dates: any) => {
    setDate(dates);
  }

  return (<>
    <input type="checkbox" className="modal-toggle" checked={request_attendance} onChange={() => {}} />
    <div className="modal">
      <div className="modal-box px-0 pb-0">
        <div className="flex items-center justify-between mb-5" style={{paddingLeft: "1.5rem", paddingRight: "1.5rem"}}>
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="w-auto h-auto cursor-pointer bg-primary p-1 rounded-full" onClick={handleClose}>
            <FiX size={24} color="#FFF" />
          </div>
        </div>
        <div className="flex h-full">
          <div className="w-full h-auto bg-primary">
            <div className="h-full flex flex-col items-center justify-center relative gap-4">
              <div
                className="text-center absolute top-0 py-3 bg-primary-semidark text-white w-full text-sm"
              >
                {moment(date).format("dddd")}
              </div>
              <span className="font-bold text-white">{moment(date).format("MMMM")}</span>
              <span className="font-bold text-white text-6xl">{moment(date).format("D")}</span>
              <span className="font-bold text-white text-xl">{moment(date).format("YYYY")}</span>
            </div>
          </div>
          <DatePicker
            selected={date}
            onChange={handleChange}
            minDate={moment().startOf("month").toDate()}
            maxDate={moment().endOf("month").toDate()}
            inline
          />
        </div>
        </div>
    </div>
  </>);
}