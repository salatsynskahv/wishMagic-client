'use client'
import HeroSection from "@/app/heroSection";
import React, {useEffect, useState} from "react";
import Wishlists from "@/app/wishlists/page";
import {Provider} from "react-redux";
import {getUserWishlist} from "@/components/services/api/WishlistService";
import configurePreloadedStore from "@/components/store/store";
import Wishlist from "@/types/Wishlist";
import {useAuth} from "@/components/context/AuthContext";

export default (): React.JSX.Element => {
    const [loading, setLoading] = useState(true);
    const [wishlists, setWishlist] = useState<Wishlist[]>();
    const {getUser} = useAuth();

    useEffect(() => {
        const user = getUser();

        if (!user) {
            setLoading(false)
        } else {
            getUserWishlist().then(
                (result) => {
                    console.log(result);
                    setWishlist(result.data);
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
                <Provider store={configurePreloadedStore({wishlist: {wishlists}})}>
                    <HeroSection/>
                    <Wishlists/>
                </Provider>
            }
        </>

    )
}