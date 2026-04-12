const VARIANT_CLASSES = {
  round: "button--round",
  roundSm: "button--round-sm",
  rounded: "button--rounded",
  search: "button--search",
};

export default function Button({
  children,
  variant = "rounded",
  className = "",
  type = "button",
  ...props
}) {
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.rounded;

  return (
    <button type={type} className={`button ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
