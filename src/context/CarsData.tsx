import {
  useState,
  useEffect,
  useContext,
  createContext,
  PropsWithChildren,
  useCallback,
} from "react";
import useGraphql from "../hooks/useGraphql";

const CarsData = createContext<any>(null);

interface Value {
  loading: boolean;
  secondLoading: boolean;
  controllCarsData: () => void;
  firstFiveCarsData: Car[] | [];
  getFirstFiveCarsData: () => void;
}

export const CarsDataProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { getAllCarsByPage, getCarsByPageLoading } = useGraphql();
  const [secondLoading, setSecondLoading] = useState<boolean>(false);
  const [firstFiveCarsData, setFirstFiveCarsData] = useState<Car[] | []>([]);

  const getFirstFiveCarsData = async () => {
    try {
      const data = await getAllCarsByPage(0, 5, "desc");
      if (data) {
        const timeout = setTimeout(() => {
          setFirstFiveCarsData(data.getAllCarsWithPagination);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(true);
      setSecondLoading(false);
    }
  };

  const controllCarsData = useCallback(async () => {
    try {
      setSecondLoading(true);
      await getFirstFiveCarsData();
    } catch (error) {
      console.log(error);
    } finally {
      setSecondLoading(false);
    }
  }, [secondLoading]);

  useEffect(() => {
    getFirstFiveCarsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: Value = {
    loading,
    secondLoading,
    controllCarsData,
    firstFiveCarsData,
    getFirstFiveCarsData,
  };

  return <CarsData.Provider value={value}>{children}</CarsData.Provider>;
};

export const useCarsData = () => useContext(CarsData);
