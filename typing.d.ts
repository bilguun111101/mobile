interface CardProps {
    item: {
        id: string,
        type: string,
        model: string,
        kml: string,
        transmission: string,
        passengers: string,
        doors: string,
        price: number,
        details: {
            make: string,
            model: string,
            year: string,
            exterior: string,
            interior: string,
        },
        mileage: string,
        image: number;
    }
}
interface Props {
    navigation: any;
  }

interface ListProps {
    item: {
        id: string,
        name: string,
    }
}

type InputType = 'default'
| 'numeric'
| 'phone-pad'
| 'number-pad'
| 'decimal-pad'
| 'email-address'
| 'current-password'