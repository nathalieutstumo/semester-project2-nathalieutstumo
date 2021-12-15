export const filteringAnArray = (array, filterString) => {
    return array.filter((arrayElement) => {
      return arrayElement.attributes.title
        .toLowerCase()
        .includes(filterString.toLowerCase());
    });
  };