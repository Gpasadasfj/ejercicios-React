import { useState } from "react";

export default function TextArea() {
  const [textArea, setTextArea] = useState("");

  return (
    <>
      <textarea
        style={{margin:"20px", minWidth:"200px"}}
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        name="textarea"
      />
    </>
  );
}
