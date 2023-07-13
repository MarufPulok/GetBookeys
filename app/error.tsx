"use client";
import Error from "next/error";
import React, { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorStateProps {
  error: Error;
}

export default function ErrorState({ error }: ErrorStateProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return <EmptyState title="Oops!" subtitle="Something went wrong" />;
}
