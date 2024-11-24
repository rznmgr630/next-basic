const DocDetail = async ({ params }: { params: { slug: string[] } }) => {
  console.log(params.slug);
  return (
    <div>
      <h3>Detail of docs </h3>
    </div>
  );
};

export default DocDetail;
