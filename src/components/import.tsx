import supabase from "../components/SupabaseClient";

export async function getStaticPaths() {
  const { data: fileNames, error: fileListError } = await supabase.storage
  .from("astro-markdown")
  .list('mdx');

  let files = [];
  if (fileNames == null){
    return [];
  }
  for (let i = 0; i < fileNames.length; i++) {
    let file = fileNames[i].name.split('.').shift();
    let fileType = fileNames[i].name.split('.').pop();
    if (file == ""){
      continue;
    } else {
    files.push({params: {mdx: file}, props: { type: "." + fileType}}, );
    }
  }
  console.log(files);
  return files;
}

const { mdx } = Astro.params;
const { type } = Astro.props;

if (!mdx) {
  return Astro.redirect("/404");
}

const { data, error } = await supabase.storage
  .from("astro-markdown")
  .download("mdx/" + mdx + type);

if (error) {
  return Astro.redirect("/404");
}

const file = new File([data], mdx + type, {type: data.type,});