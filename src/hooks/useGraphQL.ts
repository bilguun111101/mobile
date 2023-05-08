import { CREATE_RENTAL } from "../server/mutations/rentals";
import {
  CREATE_NEW_USER,
  LOGIN_USER,
  UPDATE_USER_BY_ID,
} from "../server/mutations/users";
import {
  GET_ALL_CARS_WITH_PAGINATION,
  GET_CARS_BY_PASSENGERS,
  GET_CARS_BY_TYPE,
} from "../server/queries/cars";
// import Cookies from "universal-cookie";
// import Cookies from "js-cookie";
import { GET_USER_BY_ID } from "../server/queries/users";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { resetApolloContext, useLazyQuery, useMutation } from "@apollo/client";

const useGraphql = () => {
  // USER QUERIES
  const [getUserById, { loading: getUserByIdLoading }] = useLazyQuery(
    GET_USER_BY_ID,
    { pollInterval: 500 }
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

  const updateUserByID = async (id: string, name: string, phone: string) => {
    try {
      const response = (
        await updateUserById({
          variables: {
            id,
            name,
            phone,
          },
        })
      ).data;

      const { updateUserByID: data } = response;

      return true;
    } catch (error: any) {
      console.log("error from apollo/updateUser", error);
      const errors = new Error(error);
      return false;
    }
  };

  const getAllCarsByPage = async (skip: number, take: number) => {
    try {
      const response = (
        await getCarsByPagination({
          variables: {
            skip,
            take,
          },
        })
      ).data;

      return response;
    } catch (error: any) {
      console.log("ERROR with getAllCarsByPage", error);
      const errors = new Error(error);
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
        console.log(response);
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
      if (!response) console.log(`No cars found with type`);

      const data = response?.createRental;
      return data;
    } catch (error: any) {
      console.log("ERROR with getAllCarsByPassengers", error);
      return new Error(error);
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
