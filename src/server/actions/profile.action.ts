"use server";

import { db } from "@/lib/db";
import { getUserFromDB } from "./auth.action";

export async function CreateProfile({ username }: { username: string }) {
  const user = await getUserFromDB();

  try {
    // Check if username already exists
    const existingUserName = await db.profile.findUnique({
      where: {
        username,
      },
    });

    if (existingUserName) {
      return {
        status: 400,
        success: false,
        message: "Username already exists",
      };
    }

    if (!user?.id) {
      throw new Error("User ID is required to create a profile.");
    }

    // Create new user profile
    const data = await db.profile.create({
      data: {
        username,
        authorId: user?.id,
      },
    });

    return {
      status: 201,
      success: true,
      message: "Profile created successfully",
      data: data,
    };
  } catch (error: unknown) {
    console.error("Error creating profile:", error);
    return {
      status: 500,
      success: false,
      message: "An error occurred while creating the profile",
    };
  }
}

export async function GetProfileByUserName({ username }: { username: string }) {
  try {
    // Check if username already exists
    const data = await db.profile.findUnique({
      where: {
        username,
      },
    });

    if (!data) {
      return {
        status: 404,
        success: false,
        message: "Profile not found",
      };
    }

    return {
      status: 200,
      success: true,
      message: "Profile retrieved successfully",
      data: data,
    };
  } catch (error: unknown) {
    console.error("Error creating profile:", error);
    return {
      status: 500,
      success: false,
      message: "An error occurred while creating the profile",
    };
  }
}
