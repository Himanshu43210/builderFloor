import React, { useState, useEffect } from "react";

const MultiSelect = ({
  locations,
  val,
  setData,
  setLocalData,
  setSelectedDrop,
  id,
  setPageNumber,
}) => {
  const [selected, setSelected] = useState(val);
  const [checked, setChecked] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const changeData = () => {
    // const input = selected.map((index) => locations[index].value);
    // setData(input);
    setData(selected);
    setLocalData(selected);
  };

  useEffect(() => {
    if (checked) {
      changeData();
    } else {
      setChecked(true);
    }
  }, [selected]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredLocations = locations.filter((item) =>
    item.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleLocationClick = (e, index,item) => {
    e.stopPropagation();
    const isSelected = selected.includes(item.value);

    if (!isSelected) {
      const newSelected = [...selected, item.value];
      setSelected(newSelected);
      setSelectedDrop(newSelected);
    } else {
      const newSelected = selected.filter((value) => value !== item.value);
      setSelected(newSelected);
      setSelectedDrop(newSelected);
    }
    setSelectedDrop((prev) => [...prev, id]);
    setPageNumber(1);
  };

  return (
    <div className="w-[100%] min-h-[200px] max-h-[300px] overflow-y-auto scroll-hidden">
      {id === 2 && (
        <input
          type="text"
          className="border-1 border-solid border-[#999] w-[95%] h-8 font-normal pl-2"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      )}  
      {(id === 2 ? filteredLocations : locations).map((item, i) => {
        const isSelected = selected.includes(item.value);
        console.log(item,"please have a look st it!")
        return (
          <div
            key={i}
            style={{
              backgroundColor: isSelected ? "#e4e4e4" : "#fff",
            }}
            onClick={(e) => handleLocationClick(e, i,item)}
            className="w-[100%] h-[40px] flex items-center px-[20px] text-[#444] shrink-0 my-[5px] cursor-pointer font-medium text-left scroll-hidden flex justify-between"
          >
            {item.label}
            {isSelected && (
              <img
                src="/assets/imgs/icons/check-2.png"
                alt="share"
                className="w-6 h-6 "
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MultiSelect;
