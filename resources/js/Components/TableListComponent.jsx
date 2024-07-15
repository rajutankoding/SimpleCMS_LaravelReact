import { router } from "@inertiajs/react";
import Modal from "./Modal";
import { useState } from "react";

const TableListComponent = ({ articles }) => {
    const handleDelete = (id) => {
        router.delete(`/articles/${id}`);
    };
    const [modal, setModal] = useState(false);

    const ArticlePreview = ({ article, onEdit, onDelete }) => {
        return (
            <div className="article-preview justify-center items-center">
                {/* Gambar Artikel */}
                <img
                    // src={`/images/${item.image}`}
                    src={`https://via.placeholder.com/150`}
                    alt="Article Thumbnail"
                    className="article-image"
                />

                {/* Kategori dan Tanggal Upload */}
                <div className="article-details">
                    <div className="category">"testing"</div>
                    <div className="date">testing</div>
                </div>

                {/* Judul Artikel */}
                <h2 className="article-title">testing</h2>

                {/* Isi Artikel */}
                <div className="article-content">testing</div>

                {/* ID Publisher */}
                <div className="publisher-id">Publisher ID: testing</div>

                {/* Tombol Edit dan Hapus */}
                <div className="button-container">
                    <button
                        className="edit-button"
                        onClick={() => onEdit(article)}
                    >
                        Edit
                    </button>
                    <button
                        className="delete-button"
                        onClick={() => onDelete(article)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Publisher</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((item) => (
                        <tr key={item.id}>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={`/images/${item.image}`}
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {item.title}
                                        </div>
                                        <div className="text-sm opacity-50">
                                            {item.category}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: item.content.slice(0, 250),
                                    }}
                                    className="flex items-center"
                                />
                                {/* {item.content} */}
                                {/* </div> */}
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    {item.updated_at}
                                </span>
                            </td>
                            <td>{item.user_id}</td>
                            <th>
                                <button
                                    onClick={() => setModal(true)}
                                    className="btn btn-ghost btn-xs text-blue-400"
                                >
                                    details
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="btn btn-ghost btn-xs text-red-600"
                                >
                                    delete
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Publisher</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>

            <div className="join">
                <button className="join-item btn">«</button>
                <button className="join-item btn">Page 22</button>
                <button className="join-item btn">»</button>
            </div>
            <Modal
                onClose={() => setModal(false)}
                show={modal}
                children={ArticlePreview}
            />
        </div>
    );
};

export default TableListComponent;
