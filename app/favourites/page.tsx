import React from "react";
import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getFavouriteListings from "../actions/getFavouriteListings";
import getCurrentUser from "../actions/getCurrentUser";
import FavouritesClient from "./FavouritesClient";

export default async function ListingPage() {
  const listings = await getFavouriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0)
    return (
      <ClientOnly>
        <EmptyState
          title="No favourites yet"
          subtitle="Looks like you have no favourite listings."
        />
      </ClientOnly>
    );

    return (
        <ClientOnly>
            <FavouritesClient listings={listings} currentUser={currentUser} /> 
        </ClientOnly>
    )
}
