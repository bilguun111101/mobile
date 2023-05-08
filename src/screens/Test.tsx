import { View } from "react-native";
import useGraphql from "../hooks/useGraphQL";
import { ChangeEvent, useEffect, useState } from "react";

const take = 5;
const perPage = 5;

const Cars = () => {
  const [carsData, setCarsData] = useState<Car[]>([]);

  const { getAllCarsByPage, getCarsByPageLoading: loading } = useGraphql();
  const [active, setActive] = useState(1);

  // Get data at every click on the PAGINATION number
  const paginationHandler = async (page: number) => {
    const skip = page === 1 ? 0 : perPage * page - perPage;

    const data = await getAllCarsByPage(skip, take);

    if (data) {
      setCarsData([...data]);
    } else {
      setCarsData([]);
    }
  };

  // Get data at every click on the Price Sort select option
  const onSelectHandler = async (e: ChangeEvent<HTMLSelectElement>) => {
    const priceValue = e.target.value;
    if (priceValue === "Price: High to Low") {
      const data = await getAllCarsByPage(0, take);

      if (data) {
        setCarsData([...data]);
      } else {
        setCarsData([]);
      }
    }
    if (priceValue === "Price: Low to High") {
      const data = await getAllCarsByPage(0, take);

      if (data) {
        setCarsData([...data]);
      } else {
        setCarsData([]);
      }
    }
  };

  // For first time rendering...
  useEffect(() => {
    (async () => {
      const data = await getAllCarsByPage(0, take);

      if (data) setCarsData([...data]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <View></View>;
};

export default Cars;
