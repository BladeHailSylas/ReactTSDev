import type { PredictDto } from "../../types/PredictDto";

export default function MyPrediction({predict} : {predict: PredictDto}){
    return(
        <p className="bg-base-200">{predict.predictedResultText}</p>
    )
}