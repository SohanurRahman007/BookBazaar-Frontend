import React, { useState } from "react";
import { set } from "react-hook-form";

function page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCondition, setSelectedCondition] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("newest");
  const bookPages = 6;

  const toggleFilter = (section: string, item: string) => {
    const updateFilter = (prev: string[]) => {
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item];
    };
    switch (section) {
      case "condition":
        setSelectedCategory(updateFilter);
        break;
      case "classType":
        setSelectedType(updateFilter);
        break;
      case "category":
        setSelectedCategory(updateFilter);
        break;
      default:
        break;
    }
    setCurrentPage(1);
  };

  return <div>page</div>;
}

export default page;
