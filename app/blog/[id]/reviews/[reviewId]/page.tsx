const ReviewDetail = ({
  params,
}: {
  params: { reviewId: number; id: number };
}) => {
  const { reviewId, id } = params;
  return (
    <h3>
      This is a review {reviewId} of blog {id}
    </h3>
  );
};

export default ReviewDetail;
