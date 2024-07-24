import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import TableListComponent2 from "@/Components/TableListComponent";
import BannerCard from "@/Components/BannerCard";

const BannerPages = ({ banner, auth }) => {
    console.log("Data Banners", banner);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Banner
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <NavLink href={route("banner.create")}>
                                <button className="btn btn-sm">+ Banner</button>
                            </NavLink>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                                {banner.map(
                                    (item) => (
                                        console.log("testing :", item),
                                        (
                                            <div
                                                key={item.id}
                                                className="justify-center items-center flex"
                                            >
                                                <BannerCard
                                                    imageSource={
                                                        item.link_image
                                                    }
                                                    link={item.link}
                                                    idd={item.id}
                                                />
                                            </div>
                                        )
                                    )
                                )}
                            </div>
                            {/* <TableListComponent2 banners={banner} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default BannerPages;
