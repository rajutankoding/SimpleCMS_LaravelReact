import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import "react-quill/dist/quill.snow.css";

const Banner = ({ auth }) => {
    const [thumbnail, setThumbnail] = useState("");
    const [link, setlink] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("thumbnail", thumbnail);
        formData.append("link", link);
        // formData.append("image", image);
        formData.append("user_id", auth.user.id);

        router.post("/banners", formData, {
            onError: (errors) => {
                console.log(errors);
            },
            onSuccess: () => {
                console.log("Banner created successfully");
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Articles
                </h2>
            }
        >
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Tambah Banner</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="thumbnail"
                        >
                            Thumbnail
                        </label>
                        <input
                            id="thumbnail"
                            type="text"
                            value={thumbnail}
                            onChange={(e) => setThumbnail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="link"
                        >
                            Link URL
                        </label>
                        <input
                            id="link"
                            type="text"
                            value={link}
                            onChange={(e) => setlink(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    {/* <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="image"
                        >
                            Unggah Gambar
                        </label>
                        <input
                            id="image"
                            type="file"
                            onChange={handleImageChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            accept="image/*"
                            required
                        />
                    </div>
                    {preview && (
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Preview Gambar
                            </label>
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-1/3"
                            />
                        </div>
                    )} */}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Tambah Banner
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Banner;
