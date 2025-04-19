import DataToolsProps from "@/cardToolsProps";

export default function CardTools({ icon, name, describe }: DataToolsProps) {
  return (
    <div>
      <div>
        {icon}
        <p className="mt-8 text-lg font-semibold leading-tight text-black">
          {name}
        </p>
        {describe && (
          <p className="mt-1 text-base leading-tight text-gray-600">
            {describe}
          </p>
        )}
      </div>

      <div className="hidden lg:block"></div>
    </div>
  );
}
