'use client';
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import {serviceApi} from '@/components/misc/ServiceApi'
import {useAuth} from "@/components/context/AuthContext";

export default function Logout(): React.JSX.Element {
    const router = useRouter();
    const {getUser} = useAuth();


    useEffect(() => {
        serviceApi.logout(getUser()).then(
            (result) => {
                console.log(result);
            }
        );
        // router.push("/");
    }, []);

    return (
        <div></div>
    )
}