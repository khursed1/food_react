import { MenuImg } from "../utils/Constant";
const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left">
                    <div className="flex justify-between">
                        <div className="w-9/12">
                            <span className=" font-medium">{item.card.info.name} </span>
                            <br />
                            <span className="text-sm">RS {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                            </span>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12">
                        <div className="absolute">
                            <button className="bg-gray-500  text-white p-1 rounded-lg ml-12 hover:bg-gray-600">Add +</button>
                            </div>
                            {item.card.info.imageId?(<img src={MenuImg + item.card.info.imageId} className="w-32 h-24 m-auto rounded-lg shadow-2xl" />):(null)}
                            
                            </div>
                    </div>
                </div>

            ))}
        </div>
    )
}
export default ItemList;