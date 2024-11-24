const NotFound = () => {
  return (
    <div className="flex flex-col h-screen w-full gap-3 justify-center items-center">
      <h3 className="text-3xl">Page not found</h3>
      <p className="font-bold">
        Could not found the request URL at the moment.
      </p>
    </div>
  );
};

export default NotFound;
