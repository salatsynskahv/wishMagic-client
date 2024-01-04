'use client'
import HeroSection from "@/app/[locale]/heroSection";
import React, {useEffect, useState} from "react";
import Wishlists from "@/app/[locale]/wishlists/page";
import {getUserWishlist} from "@/components/services/api/WishlistService";
import {useAuth} from "@/components/context/AuthContext";
import {useAppDispatch} from "@/lib/hooks";
import {init} from "@/components/store/slices/wishlistSlice";
import {useTranslations} from "next-intl";

export default (): React.JSX.Element => {
    const [loading, setLoading] = useState(true);
    const dispatch = useAppDispatch();
    const {getUser} = useAuth();
    const t = useTranslations('Index');

    useEffect(() => {
        const user = getUser();
        if (!user) {
            setLoading(false)
        } else {
            getUserWishlist().then(
                (result) => {
                    console.log(result);
                    dispatch(init({wishlists: result.data}));
                    setLoading(false);
                },
            ).catch(
                (error) => {
                    console.log(error);
                    setLoading(false);
                }
            )
        }
    }, []);

    return (
        <>
            {loading ? <div>loading</div> :
                <>
                    <HeroSection/>
                    <Wishlists/>
                </>
            }
        </>

    )
}