export default function ServiceFeatureList({
  features,
}: {
  features: string[];
}) {
  return (
    <ul className="flex flex-col">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-3 py-1.5">
          <span className="font-body text-lg font-bold text-accent-to">
            ✓
          </span>
          <span className="font-body text-base text-white md:text-xl">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}