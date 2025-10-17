export default function LoadingOpacity(loading, amount = "opacity-60") {
  return `transition-opacity duration-500 ease-in-out ${loading ? amount : "opacity-100"}`;
}
