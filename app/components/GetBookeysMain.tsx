import React from "react";
import ClientOnly from "./ClientOnly";
import Container from "./Container";
import EmptyState from "./EmptyState";
import getListings, { IListingsParams } from "../actions/getListings";
import ListingCard from "./listings/ListingCard";
import getCurrentUser from "../actions/getCurrentUser";

interface GetBookeysMainProps {
  searchParams: IListingsParams;
}

export default async function GetBookeysMain({ searchParams }: GetBookeysMainProps) {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing) => {
            return (
              <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
}
