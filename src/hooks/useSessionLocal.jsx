import { useEffect, useState } from "react";

export const useSessionLocal = () => {

    const [installments, setInstallments] = useState(() => {
        const user = localStorage.getItem("user");
        return user ? true : false;
    });

    function setSession(session){
        localStorage.setItem('user', JSON.stringify(session));
        setInstallments(true);
    }

    function getSession() {
        const local = localStorage.getItem('user');
        return local ? JSON.parse(local) : null;
    }

    function removeSession() {
        localStorage.removeItem('user');
        localStorage.clear();
    }

    
    return {
        setSession,
        getSession,
        removeSession,
        installments,
        setInstallments
    };
}