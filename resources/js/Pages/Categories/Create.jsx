import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create(props) {
  const { data, setData, post, processing, errors } = useForm({
    name: "Abraham Moises Linares",
    status: "active",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route("categories.store"));
  }

  return (
    <AuthenticatedLayout
      user={props.auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Create Category
        </h2>
      }
    >
      <Head title="Create Category" />
      <div className="py-12">
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white p-6 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Nueva Categoria
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Manage your name, password and account settings.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
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
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    type="text"
                    className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs italic mt-2">
                      {errors.name}
                    </p>
                  )}
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
                    value={data.status}
                    onChange={(e) => setData("status", e.target.value)}
                    type="text"
                    className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  />
                  {errors.status && (
                    <p className="text-red-500 text-xs italic mt-2">
                      {errors.status}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2"></div>

                {/* Descripcion */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="af-account-email"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Descripcion
                  </label>
                </div>
                <div className="sm:col-span-7">
                  <input
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    type="text"
                    className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-xs italic mt-2">
                      {errors.description}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-x-2">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
