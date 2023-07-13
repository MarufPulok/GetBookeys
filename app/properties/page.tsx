import React from "react";
import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import PropertiesClient from "./PropertiesClient";
import getListings from "../actions/getListings";

export default async function PropertiesPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="Unauthorized"
        subtitle="You must be signed in to view this page"
      />
    );
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you have no properties yet."
      />
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
}
