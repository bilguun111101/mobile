interface CardProps {
  item: {
    id: string;
    type: string;
    model: string;
    kml: string;
    transmission: string;
    passengers: string;
    doors: string;
    price: number;
    details: {
      make: string;
      model: string;
      year: string;
      exterior: string;
      interior: string;
    };
    mileage: string;
    image: number;
  };
}
interface Props {
  navigation: any;
}
interface createCarDataType extends Car {
  userId: string;
}

interface ListProps {
  item: {
    id: string;
    name: string;
  };
}

interface User {
  id?: string;
  age?: string;
  role: string;
  email: string;
  name?: string;
  phone?: string;
  rentals?: string;
  cars?: Car[];
  transactions?: Transaction[];
  password?: string;
}

interface Car {
  id?: string;
  image: number;
  type: string;
  typeDefinition: string;
  model: string;
  transmission: string;
  kml: number;
  passengers: number;
  price: number;
  user?: User;
  userId?: string;
  name?: string;
  disctrict?: string;
}

interface Rental {
  car?: Car;
  paymentType: string;
  userId?: string;
  dateRent?: string;
  location?: string;
  totalDays?: number;
  dateReturn?: string;
  verified: boolean;
  rental?: User;
  extras?: {
    GPS: boolean;
    coverage: boolean;
    child_safety: boolean;
  };
}

interface Transaction {
  id: string;
  verified: boolean;
  rental?: User;
  userId: string;
  createdAt: string;
}

type InputType =
  | "default"
  | "numeric"
  | "phone-pad"
  | "number-pad"
  | "decimal-pad"
  | "email-address"
  | "current-password";

interface ChooseDate {
  day: number;
  year: number;
  month: number;
  timestamp: number;
  dateString: string;
}
