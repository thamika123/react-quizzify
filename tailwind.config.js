module.exports = {
    purge: [
        "./src/**/*.html",
        "./src/**/*.jsx"
    ],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        fontFamily: {
            "sans": ["Dosis"],
        },
        extend: {
            boxShadow: {
                "lg": "5px 10px 30px #e5e7eb",
                "xl": "10px 25px 20px #e5e7eb",
                "dark": "5px 10px 30px #1F2937"
            },
            fontSize: {
                "lg": "1.25rem",
                "xl": "1.4rem",
                "3xl": "2rem"
            },
            width: {
                "148": "37rem"
            }
        },
    },
    variants: {
        extend: {
            boxShadow: ["dark"]
        },
    },
    plugins: [
        require("@tailwindcss/forms")
    ],
};
