import React from "react";
// import "antd/dist/antd.css";
import { notification } from "antd";
export const OpenNotification = (placement: any, text: any) => {
  notification.success({
    message: "Success",
    description: `${text}`,
    placement,
  });
};
