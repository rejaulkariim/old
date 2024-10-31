"use server";

import { db } from "@/lib/db";

export async function SubscribeToWishlist(params: { email: string }) {
  const { email } = params;

  const existingSubscriber = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingSubscriber) {
    return {
      status: 200,
      message: "Already subscribed",
    };
  }

  await db.user.create({
    data: {
      email,
    },
  });

  return {
    status: 200,
    message: "Subscribed successfully",
  };
}
