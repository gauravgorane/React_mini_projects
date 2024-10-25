import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function Editor({ currentNote, updateNote }) {
  return (
    <section className="editor">
      <SimpleMDE value={currentNote.body} onChange={updateNote} />
    </section>
  );
}