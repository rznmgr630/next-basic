const BlogDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <h3>Hello from blog of id {id} detail page</h3>;
};

export default BlogDetail;
