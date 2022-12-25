import Icon from "./Icon";
import { segmentationData } from "./SegmentationData";

function Segmentation() {
    return (
        <div className="p-4 h-full">
            <div className="flex justify-between items-center">
                <div className="text-white font-bold">Segmentation</div>

                <Icon path="res-react-dash-options" className="w-2 h-2" />
            </div>
            <div className="mt-3">Used Languages :</div>
            {segmentationData.map(({ c1, c2, c3, color }) => (
                <div className="flex items-center" key={c1}>
                    <div
                        className="w-2 h-2 rounded-full"
                        style={{
                            background: color,
                        }}
                    />
                    <div className="ml-2" style={{ color }}>
                        {c1}
                    </div>
                    <div className="flex-grow" />
                    <div className="" style={{ color }}>
                        {c2}
                    </div>
                    <div className="ml-2 w-12 card-stack-border" />
                    <div className="ml-2 h-8">
                        <div
                            className="scale-up-center w-20 h-28 rounded-lg overflow-hidden"
                            style={{
                                background: c3,
                            }}
                        >
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex mt-3 px-3 items-center justify-between bg-details rounded-xl w-36 h-12">
                <div className="">Details</div>
                <Icon path="res-react-dash-chevron-right" className="w-4 h-4" />
            </div>
        </div>
    );
}
export default Segmentation
