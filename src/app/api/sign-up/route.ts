import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import dbConnect from "@/lib/dbConnect";

import UserModel from "@/model/User";

import bcrypt from "bcryptjs";
import { success } from "zod/v4";
export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, email, password } = await request.json();
    const existingUserVerifiedByUsername = await UserModel.findOne({
      username,
      isVerified: true,
    });

    if (existingUserVerifiedByUsername) {
      return Response.json(
        {
          success: false,
          message:
            "Username already exists. Please choose a different username.",
        },
        { status: 400 }
      );
    }

    const existingUserByEmail = await UserModel.findOne({ email });

    if (existingUserByEmail) {
      true;
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);
    }
  } catch (error) {
    console.error("Error registering user", error);
    return new Response(
      JSON.stringify({ success: false, message: "Error Registering User" }),
      { status: 500 }
    );
  }
}
