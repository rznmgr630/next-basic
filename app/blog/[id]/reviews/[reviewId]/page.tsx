import { notFound } from "next/navigation";

const ReviewDetail = ({
  params,
}: {
  params: { reviewId: number; id: number };
}) => {
  const { reviewId, id } = params;
  if (reviewId > 100) return notFound();
  return (
    <h3>
      This is a review {reviewId} of blog {id}
    </h3>
  );
};

export default ReviewDetail;
