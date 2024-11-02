"use server";

import { db } from "@/lib/db";

export async function CreateProfile(params) {
  try {
    // Check if username already exists
    const existingUserName = await db.profile.findUnique({
      where: {
        userName: params.username,
      },
    });

    if (existingUserName) {
      return {
        status: 400,
        success: false,
        message: "Username already exists",
      };
    }

    // Create new user profile
    await db.user.create({
      data: {
        name: params.name,
        email: params.email,
        image: params.image,
      },
    });

    return {
      status: 201,
      success: true,
      message: "Profile created successfully",
    };
  } catch (error: unknown) {
    console.error("Error creating profile:", error);
    return {
      status: 500,
      success: false,
      message: "An error occurred while creating the profile",
      error: error.message, // Optional: Include error message for debugging
    };
  }
}
