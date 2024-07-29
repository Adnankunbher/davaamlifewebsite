export default function ProductDetails({
  params,
}: {
  params: { product_id: string };
}) {
  return <h1>Details About Product {params.product_id}</h1>;
}
