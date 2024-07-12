import React from "react";

const TableListComponent = ({ articles }) => {
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
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((item) => (
                        <tr>
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
                                                src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
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
                                    // dangerouslySetInnerHTML={{
                                    //     __html: item.content,
                                    // }}
                                    className="flex items-center"
                                >
                                    {item.content}
                                </div>
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    {item.updated_at}
                                </span>
                            </td>
                            <td>{item.user_id}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    details
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>

            <div className="join">
                <button className="join-item btn">«</button>
                <button className="join-item btn">Page 22</button>
                <button className="join-item btn">»</button>
            </div>
        </div>
    );
};

export default TableListComponent;
