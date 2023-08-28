import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit(props) {
  const { data, setData, put, processing, errors } = useForm({
    name: props.category.name,
    status: props.category.status,
    description: props.category.description,
  });

  function handleSubmit(e) {
    e.preventDefault();
    put(route("categories.update", props.category.id));
  }

  return (
    <AuthenticatedLayout
      user={props.auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Edit Category
        </h2>
      }
    >
      <Head title="Edit Category" />
      <div className="py-12">
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white p-6 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Editar Categoria
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
                  <select
                    id="status"
                    value={data.status}
                    onChange={(e) => setData("status", e.target.value)}
                    className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  >
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
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
                  <textarea
                    id="description"
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
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
