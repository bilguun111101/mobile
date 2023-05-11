import {
  useState,
  useEffect,
  useContext,
  createContext,
  PropsWithChildren,
} from "react";
import useGraphql from "../hooks/useGraphql";

const CarsData = createContext<any>(null);

interface Value {
  loading: boolean;
  secondLoading: boolean;
  firstFiveCarsData: Car[] | [];
  getFirstFiveCarsData: () => void;
}

export const CarsDataProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { getAllCarsByPage, getCarsByPageLoading } = useGraphql();
  const [secondLoading, setSecondLoading] = useState<boolean>(false);
  const [firstFiveCarsData, setFirstFiveCarsData] = useState<Car[] | []>([]);

  const getFirstFiveCarsData = async () => {
    setSecondLoading(true);
    try {
      const data = await getAllCarsByPage(0, 5, "desc");
      if (data) {
        const timeout = setTimeout(() => {
          setFirstFiveCarsData(data.getAllCarsWithPagination);
          setLoading(true);
          setSecondLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFirstFiveCarsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: Value = {
    firstFiveCarsData,
    loading,
    getFirstFiveCarsData,
    secondLoading,
  };

  return <CarsData.Provider value={value}>{children}</CarsData.Provider>;
};

export const useCarsData = () => useContext(CarsData);
