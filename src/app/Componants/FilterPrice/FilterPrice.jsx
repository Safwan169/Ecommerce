import { BsArrows } from "react-icons/bs";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const FilterPrice = ({ maxPrice, setPrice }) => {
 

 
  const handlePriceValue = (e) => {
    e.preventDefault();

    const min = parseInt((e.target.min.value)) || 0 
    const max = parseInt((e.target.max.value)) || 0
    // console.log(min, max,"price is there ")

      if (min>= 0 && min <= maxPrice && max>0 && max<=maxPrice && max>min) {

        console.log(min, max,"price is there ")
      
      setPrice([{min}, {max}]);
    }
    

    
  };
  return (
    <>
      <h1 className="text-xl mb-3">Price</h1>
      <p>The highest price is ${maxPrice}</p>

      <form onSubmit={handlePriceValue}>
        <div className="flex gap-1 items-center justify-center ">
          <input
            className="border text-center w-16 p-2 "
            type="number"
            placeholder="Min"
            name="min"    
            id=""
          />
          <BsArrows />

          <input
            className="border text-center w-16 p-2"
            type="number"
            placeholder="Max"
            name="max"
            id=""
          />
          <button className="text-red-700">
            <IoIosArrowDroprightCircle size={30} />
          </button>
        </div>
      </form>
    </>
  );
};

export default FilterPrice;
