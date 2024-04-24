export default function Card(props) {
    return (
        <div className="w-[300px] grow m-auto card">
            <div className="flex relative items-end rounded-xl overflow-hidden">
                <img
                    className="w-full"
                    src={props.item.thumbnail}
                    alt=""
                />

                <div className="flex items-end justify-between feed-overlay absolute w-full p-4">
                    <div className="flex justify-between items-center w-full">
                        <p className=" text-white">{props.item.title}</p>
                        
                        <div className="flex items-center">
                            <span
                                className="bg-white w-[42px] h-[42px] p-4 ml-2 rounded-full flex items-center justify-center">
                                <i className="bi bi-bookmark"></i>
                            </span>

                            <span
                                className="bg-white w-[42px] h-[42px] p-4 ml-2 rounded-full flex items-center justify-center">
                                <i className="bi bi-heart"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center mt-3">
                <img
                    className="w-6 rounded-full"
                    src={props.item.avatar}
                    alt=""
                />

                <p className="ml-2">{props.item.user}</p>
                <div className=" text-gray-400 ml-auto text-[12px]">
                    <span className="ml-4">
                        <i className="bi bi-heart-fill"></i>
                        {props.item.likes}
                    </span>

                    <span className="ml-4">
                        <i className="bi bi-eye-fill"></i>
                        {props.item.views}k
                    </span>
                </div>
            </div>
        </div>
    )
}