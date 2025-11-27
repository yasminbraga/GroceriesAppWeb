import { cookies } from "next/headers";
import Link from "next/link";

export default async function Notification({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const { id } = await params;

  const res = await fetch(`http://localhost:8080/notifications/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) {
    return <h3>Erro ao carregar notificaçao</h3>;
  }
  const notification: NotificationType = await res.json();

  if (!notification.isRead) {
    await fetch(`http://localhost:8080/notifications/${id}/read`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      cache: "no-store",
    });
  }

  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold mb-3">{notification.message}</h3>
      <p>{notification.message}</p>
      <Link
        className="underline"
        href={`http://localhost:3000${notification.resourceUrl}`}
      >
        Acesse a lista
      </Link>
    </div>
  );
}
