import Topic from "../../../../models/topic";
import connectMongoDB from "../../../../libs/mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topic updated successfully." }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json({ topic },{ status: 200 });
}


// export async function DELETE(request) {
//     const { id } = request.nextUrl.searchParams.get("id");
//     await connectMongoDB();
//     await Topic.findByIdAndDelete(id);
//     return NextResponse.json({message: "Topic deleted successfully."}, {status: 200});
// }

export async function DELETE(request, { params }) {
    try {
        const { id } = await params; // Extract ID from params

      await connectMongoDB(); // Ensure DB connection
  
      if (!id) {
        return NextResponse.json({ error: "Missing ID" }, { status: 400 });
      }
  
      const deletedTopic = await Topic.findByIdAndDelete(id);
      if (!deletedTopic) {
        return NextResponse.json({ error: "Topic not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Topic deleted successfully" }, { status: 200 });
    } catch (error) {
      console.error("Delete Error:", error);
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
  }
  