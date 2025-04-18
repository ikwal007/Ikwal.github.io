/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A skeleton component for article cards, used as a placeholder
 * while the actual content is loading.
 *
 * @return {JSX.Element} The skeleton component for article cards
 */

/*******  3b013b65-7be4-4414-a3f0-996d629e3c03  *******/
export default function CardArticleSkeleton() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-md border border-gray-200 p-4">
      <div className="flex animate-pulse space-x-4">
        <div className="size-10 rounded-full bg-gray-200"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 rounded bg-gray-200"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-2 rounded bg-gray-200"></div>
              <div className="col-span-1 h-2 rounded bg-gray-200"></div>
            </div>
            <div className="h-2 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
