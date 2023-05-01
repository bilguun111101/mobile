import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

const RentalContext = createContext<any>(null);

interface Value {
    rental: Rental | undefined;
    setRental: any;
}

export const RentalProvider = ({ children }: PropsWithChildren) => {
    const [rental, setRental] = useState<Rental | undefined>(undefined);

    const value: Value = {
        rental,
        setRental
    }
    return (
        <RentalContext.Provider value={value}>
            { children }
        </RentalContext.Provider>
    )
}

export const useRental = () => useContext(RentalContext);