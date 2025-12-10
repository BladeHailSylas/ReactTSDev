import { useParams } from "react-router-dom";

export default function NewsPage() {
    const link = useParams();
    return(<>{link}</>);
}