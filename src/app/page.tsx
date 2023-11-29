"use client";
import React from "react";
import { TypingAnimation } from "@/app/components/typing-animation";
import { Editor } from "./text-editor";

export default function Home() {
  return (
    <div className="App">
      <TypingAnimation />
      <Editor />
    </div>
  );
}
