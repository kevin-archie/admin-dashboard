import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto h-svh flex items-center justify-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-6">
          <Link
            href="/dashboard/analytics"
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
          >
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="size-[38px] rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrK8R9m8AsagkNIFBdpAg7oHdkT67-XBHT2cjZCHIJA&s"
                    alt="Image Description"
                  />
                  <div className="ms-3">
                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                      Analytics
                    </h3>
                  </div>
                </div>
                <div className="ps-3">
                  <svg
                    className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/dashboard/export"
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
          >
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="size-[38px] rounded-full"
                    src="https://repogempa.bmkg.go.id/ALTE320/img/data.jpg"
                    alt="Image Description"
                  />
                  <div className="ms-3">
                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                      Export
                    </h3>
                  </div>
                </div>
                <div className="ps-3">
                  <svg
                    className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
