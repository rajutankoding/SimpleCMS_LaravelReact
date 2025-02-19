import React from "react";
import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TableListComponent from "@/Components/TableListComponent";
import NavLink from "@/Components/NavLink";

const ArticlesPages = ({ articles, auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Articles
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <NavLink href={route("articles.create")}>
                                <button className="btn btn-sm">
                                    + Articles
                                </button>
                            </NavLink>
                            <TableListComponent articles={articles} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ArticlesPages;
