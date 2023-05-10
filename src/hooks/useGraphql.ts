import { CREATE_RENTAL } from "../graphql/mutations/rentals";
import {
  CREATE_NEW_USER,
  LOGIN_USER,
  UPDATE_USER_BY_ID,
} from "../graphql/mutations/users";
import {
  GET_ALL_CARS_WITH_PAGINATION,
  GET_CARS_BY_PASSENGERS,
  GET_CARS_BY_TYPE,
} from "../graphql/queries/cars";
// import Cookies from "universal-cookie";
// import Cookies from "js-cookie";
import { GET_USER_BY_ID } from "../graphql/queries/users";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { resetApolloContext, useLazyQuery, useMutation } from "@apollo/client";
import { CREATE_CAR } from "../graphql/mutations/cars";
import { GET_OWN_RENTALS } from "../graphql/queries/rentals";
import { Alert } from "react-native";

const useGraphql = () => {
  // USER QUERIES
  const [getUserById, { loading: getUserByIdLoading }] = useLazyQuery(
    GET_USER_BY_ID,
    {
      pollInterval: 100,
      fetchPolicy: "network-only",
      nextFetchPolicy: "network-only",
    }
  );

  // USER MUTATIONS
  const [createNewUser, { loading: createUserLoading }] =
    useMutation(CREATE_NEW_USER);

  const [loginUser, { loading: loginUserLoading }] = useMutation(LOGIN_USER);
  const [updateUserById, { loading: updateUserLoading }] =
    useMutation(UPDATE_USER_BY_ID);

  // CARS QUERIES
  const [getCarsByPagination, { loading: getCarsByPageLoading }] = useLazyQuery(
    GET_ALL_CARS_WITH_PAGINATION,
    { pollInterval: 500 }
  );

  const [getCarsByPassengers, { loading: getCarsByPassengerLoading }] =
    useLazyQuery(GET_CARS_BY_PASSENGERS, { pollInterval: 500 });

  const [getCarsByType, { loading: getCarsByTypeLoading }] = useLazyQuery(
    GET_CARS_BY_TYPE,
    { pollInterval: 500 }
  );

  // CARS MUTATIONS
  const [createCar, { loading: createCarLoading }] = useMutation(CREATE_CAR);

  // RENTALS QUERIES
  const [getOwnRentals, { loading: getOwnRentalsLoading }] = useLazyQuery(
    GET_OWN_RENTALS,
    { pollInterval: 500 }
  );

  // RENTALS MUTATIONS
  const [createRental, { loading: createRentalLoading }] =
    useMutation(CREATE_RENTAL);

  //============================================================
  const signUp = async (email: string, password: string, role: string) => {
    try {
      const response = (
        await createNewUser({
          variables: {
            email,
            password,
            role,
          },
        })
      ).data;

      const { createUser } = response;

      // Cookies.set("token", createUser?.token);
      // Cookies.set("userId", createUser?.user.id);
      AsyncStorage.setItem("token", createUser?.token);
      AsyncStorage.setItem("userID", createUser?.user.id);

      return true;
    } catch (error: any) {
      console.log("error from apollo/createNewUser", error);
      const errors = new Error(error);
      return false;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = (
        await loginUser({
          variables: {
            email,
            password,
          },
        })
      ).data;

      const { loginUser: data } = response;

      AsyncStorage.setItem("token", data?.token);
      AsyncStorage.setItem("userId", data?.userId);

      return true;
    } catch (error: any) {
      console.log("error from apollo/loginUser", error);
      const errors = new Error(error);
      return false;
    }
  };

  const getUserByID = async (id: string) => {
    try {
      const response = (
        await getUserById({
          variables: {
            id,
          },
        })
      ).data;

      const { getUserById: data } = response;

      return data;
    } catch (error: any) {
      console.log("error from apollo/getUserUserById", error);
      const errors = new Error(error);
      return false;
    }
  };

  const updateUserByID = async (
    id: string,
    name: string,
    phone: string,
    email?: string
  ) => {
    try {
      const response = (
        await updateUserById({
          variables: {
            id,
            name,
            phone,
            email,
          },
        })
      ).data;

      const { updateUserById: data } = response;

      return true;
    } catch (error: any) {
      console.log("error from apollo/updateUser", error);
      const errors = new Error(error);
      return false;
    }
  };

  const createCarData = async (params: createCarDataType) => {
    const {
      image,
      type,
      typeDefinition,
      model,
      kml,
      transmission,
      passengers,
      price,
      userId,
    } = params;

    try {
      const response = (
        await createCar({
          variables: {
            image,
            type,
            typeDefinition,
            model,
            kml,
            transmission,
            passengers,
            price,
            userId,
          },
        })
      ).data;

      if (response) {
        const { createCar: data } = response;
        return data;
      }
    } catch (error: any) {
      console.log("ERROR with createCar", error);
      const errors = new Error(error);
      Alert.alert("Something wrong with user id");
    }
  };

  const getAllCarsByPage = async (
    skip: number,
    take: number,
    priceSort: string
  ) => {
    try {
      const response = (
        await getCarsByPagination({
          variables: {
            skip,
            take,
            priceSort,
          },
        })
      ).data;

      return response;
    } catch (error: any) {
      console.log("ERROR with getAllCarsByPage", error);
      const errors = new Error(error);
      Alert.alert(error);
    }
  };

  const getAllCarsByPeople = async (passengers: number) => {
    try {
      const response = (
        await getCarsByPassengers({
          variables: {
            passengers,
          },
        })
      ).data;

      const { getCarsByPassengers: data } = response;
      return data;
    } catch (error: any) {
      console.log("ERROR with getAllCarsByPassengers", error);
      const errors = new Error(error);
      Alert.alert(errors?.message);
    }
  };
  const getAllCarsByType = async (type: string) => {
    try {
      const response = (
        await getCarsByType({
          variables: {
            type,
          },
        })
      ).data;

      if (!response) {
        Alert.alert(`No cars found with ${type} type`);
        return;
      }

      const data = response?.getCarsByType;
      return data;
    } catch (error: any) {
      console.log("ERROR with getAllCarsByPassengers", error);
      const errors = new Error(error);
    }
  };
  const createRentals = async (args: Rental) => {
    const {
      userId,
      dateRent,
      dateReturn,
      totalDays,
      location,
      verified,
      extras,
      car,
    } = args;

    try {
      const response = (
        await createRental({
          variables: {
            userId,
            dateRent,
            dateReturn,
            totalDays,
            location,
            verified,
            extras,
            car,
          },
        })
      ).data;

      // if (!response) toast.error(`No cars found with ${type} type`);
      if (!response) {
        Alert.alert(`No cars found with type`);
        return;
      }

      const data = response?.createRental;
      return data;
    } catch (error: any) {
      console.log("ERROR with getAllCarsByPassengers", error);
      const errors = new Error(error);
      Alert.alert(errors?.message);
      // return new Error(error);
    }
  };

  const getOwnRentalsById = async (userId: string) => {
    try {
      const response = (
        await getOwnRentals({
          variables: {
            userId,
          },
        })
      ).data;

      const data = response?.getOwnRentals;

      return data;
    } catch (error: any) {
      console.log("ERROR with getAllCarsByPage", error);
      const errors = new Error(error);
      Alert.alert(errors?.message);
    }
  };

  return {
    login,
    signUp,
    getUserByID,
    createRentals,
    updateUserByID,
    getAllCarsByType,
    getAllCarsByPage,
    getOwnRentalsById,
    getAllCarsByPeople,
    loginUserLoading,
    updateUserLoading,
    createUserLoading,
    getUserByIdLoading,
    createRentalLoading,
    getCarsByPageLoading,
    getCarsByTypeLoading,
    getCarsByPassengerLoading,
  };
};

export default useGraphql;
