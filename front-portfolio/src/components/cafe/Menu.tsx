import { drink, food} from '../../data/menus';

const Menu = () => {
    return(
        <div className='py-20 px-4 bg-gray text-center'>
            <h2 className="md:text-4xl text-center-3xl font-bold mb-12">Menu List</h2>

            <h3 className='md:text-3xl text-center-3xl font-bold mb-12'>Food</h3>
            <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
                {food.map((foodItem) => (
                    <div key={foodItem.id} className='bg-gray-100 rounded-lg shadow-md overflow-hidden'>
                        <img src={foodItem.image} alt={foodItem.name} className='h-48 w-full object-cover' />
                        <div className='p-4'>
                            <h3 className='text-xl mb-2 text-center'>{foodItem.name}</h3>
                            <p className='text-gray-600'>Price : {foodItem.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className='md:text-3xl text-center-3xl font-bold mb-12 mt-20'>Drink</h3>
            <div  className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
                {drink.map((drinkItem) => (
                    <div key={drinkItem.id} className='bg-gray-100 rounded-lg shadow-md overflow-hidden'>
                        <img src={drinkItem.image} alt={drinkItem.name} className='h-48 w-full object-cover'/>
                        <div className='p-4'>
                            <label className='text-xl mb-2 text-center'> {drinkItem.name}</label>
                            <p>price : {drinkItem.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;