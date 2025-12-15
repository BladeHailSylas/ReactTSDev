import type { BoardDto } from "../../types/BoardDto";

export default function MyPrediction({post} : {post: BoardDto}){
    return(
        <p className="bg-base-200">{post.content}</p>
    )
}