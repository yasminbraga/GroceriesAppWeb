"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { apiFetch } from "../utils/api";

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
      const data = await apiFetch("/notifications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
    <div className="relative md:w-fit w-full">
      <button
        className="cursor-pointer flex items-center justify-between gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="h-10 relative flex items-center justify-center w-10">
          <span className="w-5 h-5 rounded-full bg-red-600 text-white text-xs font-semibold absolute right-0 top-0 flex items-center justify-center">
            {unreadCount}
          </span>
          <span className="material-symbols-outlined !text-[32px] text-gray-400">
            notifications
          </span>
        </div>
        <span className="md:hidden text-gray-400">Notificações</span>
      </button>

      {isOpen && (
        <div className="absolute left-12 bottom-12 md:left-auto md:bottom-auto md:right-2 md:top-10 bg-white shadow-lg border-1 border-gray-100 rounded-lg min-w-[300px]">
          <h3 className="font-semibold p-4">Notificações</h3>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b-1 border-b-gray-100 text-sm ${
                notification.isRead ? "bg-transparent" : "bg-orange-50"
              }`}
            >
              <Link
                href={`http://localhost:3000/notifications/${notification.id}`}
              >
                {notification.message}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationIcon;
