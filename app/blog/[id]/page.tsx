type Props = {
  params: { id: string };
};

// export const generateMetadata = ({ params }: Props) => {
//   return {
//     title: `Blog ${params.id}`,
//   };
// };

export const generateMetadata = async ({ params }: Props) => {
  const id = new Promise((resolve) => {
    setTimeout(() => {
      resolve(params.id);
    }, 1000);
  });
  return {
    title: `Blog ${id}`,
  };
};

const BlogDetail = ({ params }: Props) => {
  const { id } = params;
  return <h3>Hello from blog of id {id} detail page</h3>;
};

export default BlogDetail;
