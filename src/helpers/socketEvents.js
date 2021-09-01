import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import {
  ErrorToast,
  infoToast,
  successToat,
  WarningToast,
} from "../components/toast/customToast";
import AxiosBase from "../config/AxiosBase";
import { headers } from "./helpers";
import history from "./history";

// doctors will be added as user
export const addUserEvent = (socket, auth) => {
  const postData = {
    userId: auth?._id,
    name: `${auth?.firstName} ${auth?.lastName}`,
    role: auth?.role,
  };
  socket.emit("user:add", postData);
};
// doctors will be added as user
export const deleteUserEvent = (socket, auth) => {
  socket.emit("user:delete", { userId: auth?._id });
};

// when triage room crated at patient side this will notify
export const useNotifyTriageRoomOpen = () => {
  const toastId = useRef(null);
  const [isLoading, setisLoading] = useState(false);
  //   notification component
  const NotificationUI = ({ data, socket }) => {
    const { booking, owner, _id } = data;
    console.log(data);
    const onJoin = async () => {
      setisLoading(true);
      try {
        headers();
        const res = await AxiosBase.get(`/triage/join/${_id}`);
        const { bookingToken } = res.data;
        localStorage.setItem("bookingToken", bookingToken);
        socket.emit("triageRoom:join", {
          roomName: "doctor",
          triageRoomData: data,
        });
        history.push("/triage-room");
      } catch (error) {
        error?.response?.data && ErrorToast(error?.response?.data?.message);
        console.log(error);
      }
      setisLoading(false);
      toast.dismiss(toastId.current);
    };
    // main noti return
    return (
      <div className="triageNotification">
        <div>{`${owner?.name} is looking for ${booking?.visitType} consulation for ${booking.problem?.name}`}</div>
        <div className="flexBetweenCenter mt-2">
          <Button
            onClick={onJoin}
            size="sm"
            color="primary"
            style={{ backgroundColor: "#5ad1dd" }}
            disabled={isLoading}
          >
            {isLoading ? "Joining..." : "Join"}
          </Button>
          <Button
            onClick={() => toast.dismiss(toastId.current)}
            size="sm"
            color="secondary"
          >
            Decline
          </Button>
        </div>
      </div>
    );
  };

  //   fun to show notification
  const showToastFun = (socket) => {
    socket.on("triageRoom:open", (data) => {
      if (!toast.isActive(toastId.current)) {
        toastId.current = infoToast(
          <NotificationUI data={data} socket={socket} />
        );
      }
    });
  };

  return showToastFun;
};

// triage room closes
export const triageRoomCloses = (socket) => {
  //   notification component
  const NotificationUI = ({ data }) => {
    const { booking, owner } = data;

    // main noti return
    return (
      <div className="triageNotification">
        <div>{` Triage room by ${owner?.name} for ${booking?.visitType} consulation in ${booking.problem?.name} is now closed`}</div>
      </div>
    );
  };
  // show notification to doctor on close of triage Room
  socket.on("triageRoom:close", (data) => {
    toast.dismiss();
    WarningToast(<NotificationUI data={data} />);
  });
};
// triage room ended by patietn
export const onPatientLeaveEvent = (socket) => {
  // show notification to doctor on close of triage Room
  socket.on("triageRoom:patientLeave", () => {
    console.log(socket);
    successToat("Patient ends the triage room session");
    history.push("/dashboard");
  });
};
