import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get("email");

  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ success: false, message: "Please provide a valid email." }, { status: 422 });
  }

  console.info("[NapBlog] Newsletter signup:", email);

  return NextResponse.redirect(
    new URL("/?newsletter=thanks", request.url),
    { status: 303 }
  );
}
