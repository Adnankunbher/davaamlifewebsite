export default function Reviews({
  params,
}: {
  params: {
    review_id: string;
    product_id: string;
  };
}) {
  return (
    <h1>
      ReviewID {params.review_id} of product {params.product_id}
    </h1>
  );
}
