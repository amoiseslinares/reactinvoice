import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
export default function Show(props) {
  return (
    <AuthenticatedLayout
      user={props.auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Show Category
        </h2>
      }
    >
      <Head title="Show Category" />
      <div className="py-12">
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white p-6 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Mostrar Categoria
              </h2>
            </div>
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              {/* Name */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="af-account-email"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Name
                </label>
              </div>
              <div className="sm:col-span-7">
                <input
                  id="name"
                  value={props.category.name}
                  type="text"
                  className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  disabled
                />
              </div>
              <div className="sm:col-span-2"></div>
              {/* Estado */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="af-account-email"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Estado
                </label>
              </div>
              <div className="sm:col-span-7">
                <input
                  id="status"
                  value={props.category.status}
                  type="text"
                  className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  disabled
                />
              </div>
              <div className="sm:col-span-2"></div>
              {/* Description */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="af-account-email"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Description
                </label>
              </div>
              <div className="sm:col-span-7">
                <textarea
                  id="description"
                  value={props.category.description}
                  type="text"
                  className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  disabled
                />
              </div>
              <div className="sm:col-span-2"></div>
              {/* Created At */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="af-account-email"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Created At
                </label>
              </div>
              <div className="sm:col-span-7">
                <input
                  id="created_at"
                  value={props.category.created_at}
                  type="text"
                  className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  disabled
                />
              </div>
              <div className="sm:col-span-2"></div>
              {/* Updated At */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="af-account-email"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Updated At
                </label>
              </div>
              <div className="sm:col-span-7">
                <input
                  id="updated_at"
                  value={props.category.updated_at}
                  type="text"
                  className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  disabled
                />
              </div>
              <div className="sm:col-span-2"></div>
              {/* Actions */}
              <div className="sm:col-span-2"></div>
              <div className="sm:col-span-7">
                <div className="flex justify-end">
                  <Link
                    href={route("categories.index")}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                  >
                    Regresar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
