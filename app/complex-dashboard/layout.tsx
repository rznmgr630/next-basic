export default function DashboardLayout({
  children,
  analytics,
  notification,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notification: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div>{analytics}</div>
      <div>{notification}</div>
    </div>
  );
}
