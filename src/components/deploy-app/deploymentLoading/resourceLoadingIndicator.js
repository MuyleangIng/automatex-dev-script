import React from "react";
function ResourceLoadingIndicator() {
    return (
        <div className="mt-10 w-full rounded-xl border-dashed border-2 border-gray-300 dark:border-gray-700 bg-white py-4 px-2 shadow dark:bg-gray-800 hover:cursor-wait">
            <div className="space-y-4 relative">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className={"animate-pulse h-16 text-cyan-500 bg-gray-300 dark:bg-gray-700 rounded"}> </div>
                ))}
            </div>
        </div>

    )
}
export default ResourceLoadingIndicator;