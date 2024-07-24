import { router } from "@inertiajs/react";
import React from "react";

const BannerCard = ({ imageSource, idd, link }) => {
    const handleDelete = (id) => {
        router.delete(`/banners/${id}`);
    };
    const styles = {
        card: {
            width: "100%",
            // height: "300px",
            margin: "10px",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "white",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s",
        },
        // cardHover: {
        //     transform: "scale(1.05)",
        // },
        image: {
            width: "100%",
            height: "80%",
            objectFit: "cover",
        },
        content: {
            padding: "10px",
            textAlign: "center",
        },
        title: {
            fontSize: "16px",
            fontWeight: "bold",
            color: "blue",
            textDecoration: "none",
        },
        titleHover: {
            textDecoration: "underline",
        },
    };

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            style={{ ...styles.card, ...(isHovered ? styles.cardHover : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                // src={`/images/${imageSource}`}
                src={imageSource}
                alt="banner"
                style={styles.image}
            />
            <div style={styles.content}>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        ...styles.title,
                        ...(isHovered ? styles.titleHover : {}),
                    }}
                >
                    {link}
                </a>
            </div>
            <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="button"
                onClick={() => handleDelete(idd)}
            >
                Hapus ({idd})
            </button>
        </div>
    );
};

export default BannerCard;
