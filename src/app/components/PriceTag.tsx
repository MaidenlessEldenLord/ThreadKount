import { formatPrice } from "@/lib/format"

interface PriceTagProps {
    price: number;
    className?: string;
}

export default function PriceTag({price, className}: PriceTagProps) {
    return <span className={`badge ${className}`}>{formatPrice(price)}</span>;
<<<<<<< HEAD
}
=======
}
>>>>>>> b766a8736ee9fa9ace61951b3ab0ae6228a7b8b9
