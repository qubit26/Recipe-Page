import omeletteImage from "../assets/image-omelette.jpeg";

const RecipeCard = () => {

    return (
        <section className="w-full lg:w-5/10 lg:rounded-2xl bg-white lg:p-8">
            <img src={omeletteImage} alt="Omelette" className="w-full lg:rounded-lg" aria-description="A delicious omelette." title="A delicious omelette." />

            <h1 className="w-full p-4 lg:p-0 text-3xl lg:text-5xl font-young-serif text-custom-stone-800 my-2 lg:my-8">Simple Omelette Recipe</h1>

            <p className="w-full p-4 lg:p-0 text-lg font-outfit text-custom-stone-800 mb-2 lg:mb-8">
                An ease and quick dish, perfect for any meal. This classic omellete combines beaten eggs
                cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>

            <div className="w-full p-4 lg:p-8 rounded-lg bg-custom-rose-50">
                <h3 className="text-2xl lg:text-3xl font-outfit font-semibold text-custom-rose-800 my-2 lg:my-8">Preparation time</h3>

                <ul className="list-disc ml-6">
                    <li className="text-lg font-outfit text-custom-stone-800 mb-2"><span className="font-bold">Total:</span> Approximately 10 minutes</li>
                    <li className="text-lg font-outfit text-custom-stone-800 mb-2"><span className="font-bold">Preparation:</span> 5 minutes</li>
                    <li className="text-lg font-outfit text-custom-stone-800 mb-2"><span className="font-bold">Cooking:</span> 5 minutes</li>
                </ul>
            </div>

            <h2 className="w-full p-4 lg:p-0 text-3xl lg:text-4xl font-young-serif text-brown-800 my-2 lg:my-8">Ingredients</h2>

            <ul className="w-full p-4 lg:p-0 list-disc list-inside mb-8">
                <li className="text-lg font-outfit text-custom-stone-800 mb-2">2-3 large eggs</li>
                <li className="text-lg font-outfit text-custom-stone-800 mb-2">Salt, to taste</li>
                <li className="text-lg font-outfit text-custom-stone-800 mb-2">Pepper, to taste</li>
                <li className="text-lg font-outfit text-custom-stone-800 mb-2">1 Tablespoon of butter of oil</li>
                <li className="text-lg font-outfit text-custom-stone-800 mb-2">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>

            <hr className="border-custom-stone-600/50 bg-custom-stone-600/50" />

            <h2 className="w-full p-4 lg:p-0 text-3xl lg:text-4xl font-young-serif text-brown-800 my-2 lg:my-8">Instructions</h2>

            <ol className="w-full p-4 lg:p-0 list-inside list-decimal mb-8">
                <li className="text-lg font-outfit text-custom-stone-800 mb-3"><span className="font-semibold">Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>

                <li className="text-lg font-outfit text-custom-stone-800 mb-3"><span className="font-semibold">Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</li>

                <li className="text-lg font-outfit text-custom-stone-800 mb-3"><span className="font-semibold">Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>

                <li className="text-lg font-outfit text-custom-stone-800 mb-3"><span className="font-semibold">Add fillings (Optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>

                <li className="text-lg font-outfit text-custom-stone-800 mb-3"><span className="font-semibold">Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>

                <li className="text-lg font-outfit text-custom-stone-800 mb-3"><span className="font-semibold">Enjoy:</span> Serve hot, with additional salt and pepper if needed.</li>
            </ol>

            <hr className="border-custom-stone-600/50 bg-custom-stone-600/50" />

            <h2 className="w-full p-4 lg:p-0 text-3xl lg:text-4xl font-young-serif text-brown-800 my-2 lg:my-8">Nutrition</h2>

            <p className="w-full p-4 lg:p-0 text-lg font-outfit text-custom-stone-800 mb-2 lg:mb-8">
                The table below shows nutritional values per serving wihtout the additional fillings.
            </p>

            <table className="border-collapse w-full mb-8 p-4 lg:p-0">
                <tbody>
                    <tr>
                        <td className="py-3 px-8 text-lg font-outfit text-custom-stone-800 border-b border-b-custom-stone-600/30">Calories</td>
                        <td className="py-3 px-6 text-lg font-outfit font-semibold text-brown-800 border-b border-b-custom-stone-600/30">277 Kcal</td>
                    </tr>
                    <tr>
                        <td className="py-3 px-8 text-lg font-outfit text-custom-stone-800 border-b border-b-custom-stone-600/30">Carbs</td>
                        <td className="py-3 px-6 text-lg font-outfit font-semibold text-brown-800 border-b border-b-custom-stone-600/30">0g</td>
                    </tr>
                    <tr>
                        <td className="py-3 px-8 text-lg font-outfit text-custom-stone-800 border-b border-b-custom-stone-600/30">Protein</td>
                        <td className="py-3 px-6 text-lg font-outfit font-semibold text-brown-800 border-b border-b-custom-stone-600/30">20g</td>
                    </tr>
                    <tr>
                        <td className="py-3 px-8 text-lg font-outfit text-custom-stone-800 border-b border-b-custom-stone-600/30">Fat</td>
                        <td className="py-3 px-6 text-lg font-outfit font-semibold text-brown-800 border-b border-b-custom-stone-600/30">22g</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default RecipeCard;