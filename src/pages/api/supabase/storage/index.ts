import supabase from '../../../../components/SupabaseClient'
import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
    const formData = await request.json();
    console.log("Form Data: " + JSON.stringify(formData))
    const bucket = 'astro-markdown';
    const name = formData.name;
    const file = formData.file;

  
    // Validate the formData - you'll probably want to do more than this
    if (!bucket || !name || !file) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
        }),
        { status: 400 }
      );
    }
  
    let submission: any = {}
  
    submission.name = name
    submission.bucket = bucket
    submission.file = file
    // submission.students = students
    console.log("Item Submission: " + JSON.stringify(submission))
  
    const { error, data } = await supabase.storage.from(bucket).upload(JSON.stringify(submission.name) + ".md", submission.file);
  
    if (error) {
      return new Response(
        JSON.stringify({
          message: "Error uploading file",
        }),
        { status: 500 }
      );
    } else {
      console.log("File upload successful")
      const { error: fetchError, data: fetchData } = await supabase.storage.from(bucket).list('', { limit: 1, search: JSON.stringify(submission.name) + ".md" });
      
  
      if (fetchError) {
        return new Response(
          JSON.stringify({
            message: "Error fetching file",
          }),
          { status: 500 }
        );
      } 
      // Do something with the formData, then return a success response
      return new Response(
        JSON.stringify({
          message: "Success!",
          id: fetchData[0].id,
        }),
        { status: 200 }
      );
    }
  };