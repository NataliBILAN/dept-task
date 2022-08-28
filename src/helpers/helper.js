export  const transformDataForLayout = (data, descriptionItems) => {
  const transformedData = data.reduce((acc, current, index) => {
    if (current.image) {
      return [...acc, { item: current }];
    } else {
      if (descriptionItems.length < 3) {
        descriptionItems.push(current);
      }
    }
    if (descriptionItems.length === 3) {
      acc = [...acc, { item: [...descriptionItems], id: `${index}-d` }];
      descriptionItems = [];
      return acc;
    }

    return acc;
  }, []);

  return transformedData;
};
