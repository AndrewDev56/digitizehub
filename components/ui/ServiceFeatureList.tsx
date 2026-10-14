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
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
<path d="M1 4.75L4.88917 8.5L12.6667 1" stroke="#FF0036" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </span>
          <span className="font-body text-base text-white md:text-xl">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}