const DocDetail = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const data = await params;
  console.log(data);
  return (
    <div>
      <h3>Detail of docs </h3>
    </div>
  );
};

export default DocDetail;
