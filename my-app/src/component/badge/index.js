

const Badge = ({ techno }) => {
    const setPatern = (techno) => {
        let color = "";
        switch (techno) {
            case "java":
                color = "red";
                break
            case "github":
                color = "blue";
                break
            case "react":
                color = "cyan";
                break
            case "rédux":
                color = "indigo";
                break
            case "node.js":
                color = "green";
                break
            case "angular":
                color = "green";
                break
            case "tailwindcss":
                color = "indigo"
                break
            case "css":
                color = "red"
                break
            case "scss":
                color = "red"
                break
            case "html":
                color = "blue"
                break
            case "materialize":
                color = "orange"
                break
            case "typescript":
                color = "lime"
                break
            case "next.js":
                color = "blue"
                break
            default:
        }
        return color;
    }
    return (
        <div
            className={`p-2  border-2 border-${setPatern(techno.toLowerCase())}-500 bg-white text-${setPatern(techno.toLowerCase())}-500 rounded-full cursor-pointer w-32 text-center uppercase`}>
            {techno}
        </div>
    )
}

export default Badge;