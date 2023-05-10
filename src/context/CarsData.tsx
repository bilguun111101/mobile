import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import useGraphql from "../hooks/useGraphql";

const CarsData = createContext<any>(null);

interface Value {
  firstFiveCarsData: Car[] | [];
  loading: boolean;
}

export const CarsDataProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [firstFiveCarsData, setFirstFiveCarsData] = useState<Car[] | []>([]);
  const { getAllCarsByPage, getCarsByPageLoading } = useGraphql();
  useEffect(() => {
    (async () => {
      const data = await getAllCarsByPage(0, 5, "desc");

      if (data) {
        const timeout = setTimeout(() => {
          setFirstFiveCarsData(data.getAllCarsWithPagination);
          setLoading(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const value: Value = { firstFiveCarsData, loading };
  return <CarsData.Provider value={value}>{children}</CarsData.Provider>;
};

export const useCarsData = () => useContext(CarsData);
