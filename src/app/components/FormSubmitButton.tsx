"use client"; 

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
    children: React.ReactNode,
    classNam?: string,
} & ComponentProps<"button">;

export default function FormSubmitButton({
    children, 
    className, 
    ...props
} : FormSubmitButtonProps) {
    const {pending} = useFormStatus();

    return(
        <button 
        {...props}
        className={`btn btn-primary ${className}`}
        type="submit"
        disabled={pending}
        >
            {pending && <span className="loading loading-spinner"/>}
            {children}</button>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> b766a8736ee9fa9ace61951b3ab0ae6228a7b8b9
