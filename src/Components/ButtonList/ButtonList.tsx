const sizes = ['P', 'M', 'G', 'GG', 'GGG'];

const ButtonList = () => {
  return (
    <div className="flex pl-5">
      {sizes.map((size, index) => (
        <button key={index} className="bg-white w-12 h-12 font-inter font-bold text-xl mx-2">
          {size}
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
