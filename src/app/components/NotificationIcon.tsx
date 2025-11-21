"use client";
import { useEffect, useState } from "react";

type NotificationType = {
  id: string;
  message: string;
  fromId: string;
  isRead: boolean;
  type: string;
  resourceUrl: string;
  createdAt: string;
};

const NotificationIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];

    loadNotifications(cookieValue ?? "");
  }, []);

  const loadNotifications = async (token: string) => {
    try {
      const data = await fetch("http://localhost:8080/notifications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        cache: "no-store",
      });
      const dataNotifications = await data.json();
      setNotifications(dataNotifications.notifications);
      setUnreadCount(dataNotifications.unreadCount);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative flex items-center justify-center">
          <span className="w-5 h-5 rounded-full bg-red-600 text-white text-xs font-semibold absolute right-0 top-0 flex items-center justify-center">
            {unreadCount}
          </span>
          <span className="material-symbols-outlined !text-[32px] text-gray-400">
            notifications
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-2 top-10 bg-white shadow-lg border-1 border-gray-100 rounded-lg min-w-[300px]">
          <h3 className="font-semibold p-4">Notificações</h3>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b-1 border-b-gray-100 ${
                notification.isRead ? "bg-transparent" : "bg-orange-50"
              }`}
            >
              <p className="text-sm">{notification.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationIcon;
