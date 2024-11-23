export default async function CreateArticle() {
  const createArticleAction = async (data) => {
    "use server";
    console.log("CREA ARTICOLO", data);
  };
  return (
    <form
      className="bg-red-300 flex flex-col p-4 gap-2"
      action={createArticleAction}
    >
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="content" placeholder="content" />
      <button type="submit" className="bg-blue-200">
        Create article
      </button>
    </form>
  );
}
