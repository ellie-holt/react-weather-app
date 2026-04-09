const VARIANT_CLASSES = {
  glass: "card--glass",
  glassElevated: "card--glass-elevated",
  plain: "",
};

export default function Card({
  as: Component = "section",
  variant = "glass",
  className = "",
  children,
  ...props
}) {
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.glass;

  return (
    <Component className={`card ${variantClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}
