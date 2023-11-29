"use client";
import { useEffect, useState } from "react";

/* Lexical Design System */
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { TRANSFORMERS } from "@lexical/markdown";

/* Lexical Plugins Local */
import TreeViewPlugin from "@/app/plugins/TreeViewPlugin";
import ToolbarPlugin from "@/app/plugins/ToolbarPlugin";
import AutoLinkPlugin from "@/app/plugins/AutoLinkPlugin";
import CodeHighlightPlugin from "@/app/plugins/CodeHighlightPlugin";

/* Lexical Plugins Remote */
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";


import {TablePlugin} from '@lexical/react/LexicalTablePlugin';
import useLexicalEditable from '@lexical/react/useLexicalEditable';


import {TablePlugin as NewTablePlugin} from './plugins/TablePlugin';
/* Lexical Others */
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ExampleTheme from "@/app/themes/ExampleTheme";
import { OnChangePlugin as LexicalOnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

/* Lexical Texts */
import { textDailyStandup } from "./text-daily-standup";

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  namespace: "daily-standup-editor",
  editorState: textDailyStandup,
  // Handling of errors during update
  onError(error: unknown) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, CodeHighlightNode, TableNode, TableCellNode, TableRowNode, AutoLinkNode, LinkNode],
};

export function Editor(): JSX.Element | null {
  const [editorState, setEditorState] = useState();
  //   function onChange(editorState: any) {
  //     setEditorState(editorState);
  //   }

  function onChange(editorState: any) {
    // Call toJSON on the EditorState object, which produces a serialization safe string
    const editorStateJSON = editorState.toJSON();
    // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
    setEditorState(JSON.stringify(editorStateJSON));
  }
  console.log(editorState);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <ListPlugin />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <LinkPlugin />
          <TabIndentationPlugin />
          <AutoLinkPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <TreeViewPlugin />
        </div>
      </div>
      <LexicalOnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
}

// "use client";

// /* Lexical Design System */
// import { HeadingNode, QuoteNode } from "@lexical/rich-text";
// import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
// import { ListItemNode, ListNode } from "@lexical/list";
// import { CodeHighlightNode, CodeNode } from "@lexical/code";
// import { AutoLinkNode, LinkNode } from "@lexical/link";
// import { TRANSFORMERS } from "@lexical/markdown";

// /* Lexical Plugins Local */
// import TreeViewPlugin from "@/app/plugins/TreeViewPlugin";
// import ToolbarPlugin from "@/app/plugins/ToolbarPlugin";
// import AutoLinkPlugin from "@/app/plugins/AutoLinkPlugin";
// import CodeHighlightPlugin from "@/app/plugins/CodeHighlightPlugin";

// /* Lexical Plugins Remote */
// import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
// import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
// import { ListPlugin } from "@lexical/react/LexicalListPlugin";
// import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
// import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";

// /* Lexical Others */
// import { LexicalComposer } from "@lexical/react/LexicalComposer";
// import { ContentEditable } from "@lexical/react/LexicalContentEditable";
// import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
// import ExampleTheme from "@/app/themes/ExampleTheme";

// /* Lexical Texts */
// import { textDailyStandup } from "./text-daily-standup";

// import { $getRoot, $getSelection } from "lexical";
// import { useEffect, useState } from "react";

// // import { LexicalComposer } from "@lexical/react/LexicalComposer";
// import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
// // import { ContentEditable } from "@lexical/react/LexicalContentEditable";
// // import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// // import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
// import { OnChangePlugin as LexicalOnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
// import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
// // import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

// const theme = {
//   ltr: "ltr",
//   rtl: "rtl",
//   paragraph: "editor-paragraph",
//   quote: "editor-quote",
//   heading: {
//     h1: "editor-heading-h1",
//     h2: "editor-heading-h2",
//     h3: "editor-heading-h3",
//     h4: "editor-heading-h4",
//     h5: "editor-heading-h5",
//     h6: "editor-heading-h6",
//   },
//   list: {
//     nested: {
//       listitem: "editor-nested-listitem",
//     },
//     ol: "editor-list-ol",
//     ul: "editor-list-ul",
//     listitem: "editor-listItem",
//     listitemChecked: "editor-listItemChecked",
//     listitemUnchecked: "editor-listItemUnchecked",
//   },
//   hashtag: "editor-hashtag",
//   image: "editor-image",
//   link: "editor-link",
//   text: {
//     bold: "editor-textBold",
//     code: "editor-textCode",
//     italic: "editor-textItalic",
//     strikethrough: "editor-textStrikethrough",
//     subscript: "editor-textSubscript",
//     superscript: "editor-textSuperscript",
//     underline: "editor-textUnderline",
//     underlineStrikethrough: "editor-textUnderlineStrikethrough",
//   },
//   code: "editor-code",
//   codeHighlight: {
//     atrule: "editor-tokenAttr",
//     attr: "editor-tokenAttr",
//     boolean: "editor-tokenProperty",
//     builtin: "editor-tokenSelector",
//     cdata: "editor-tokenComment",
//     char: "editor-tokenSelector",
//     class: "editor-tokenFunction",
//     "class-name": "editor-tokenFunction",
//     comment: "editor-tokenComment",
//     constant: "editor-tokenProperty",
//     deleted: "editor-tokenProperty",
//     doctype: "editor-tokenComment",
//     entity: "editor-tokenOperator",
//     function: "editor-tokenFunction",
//     important: "editor-tokenVariable",
//     inserted: "editor-tokenSelector",
//     keyword: "editor-tokenAttr",
//     namespace: "editor-tokenVariable",
//     number: "editor-tokenProperty",
//     operator: "editor-tokenOperator",
//     prolog: "editor-tokenComment",
//     property: "editor-tokenProperty",
//     punctuation: "editor-tokenPunctuation",
//     regex: "editor-tokenVariable",
//     selector: "editor-tokenSelector",
//     string: "editor-tokenSelector",
//     symbol: "editor-tokenProperty",
//     tag: "editor-tokenProperty",
//     url: "editor-tokenOperator",
//     variable: "editor-tokenVariable",
//   },
// };

// // const theme = {

// // };

// // Lexical React plugins are React components, which makes them
// // highly composable. Furthermore, you can lazy load plugins if
// // desired, so you don't pay the cost for plugins until you
// // actually use them.
// function MyCustomAutoFocusPlugin() {
//   const [editor] = useLexicalComposerContext();

//   useEffect(() => {
//     // Focus the editor when the effect fires!
//     editor.focus();
//   }, [editor]);

//   return null;
// }

// // Catch any errors that occur during Lexical updates and log them
// // or throw them as needed. If you don't throw them, Lexical will
// // try to recover gracefully without losing user data.
// function onError(error: any) {
//   console.error(error);
// }

// // When the editor changes, you can get notified via the
// // OnChangePlugin!
// function OnChangePlugin({ onChange }: any) {
//   // Access the editor through the LexicalComposerContext
//   const [editor] = useLexicalComposerContext();
//   // Wrap our listener in useEffect to handle the teardown and avoid stale references.
//   useEffect(() => {
//     // most listeners return a teardown function that can be called to clean them up.
//     return editor.registerUpdateListener(({ editorState }) => {
//       // call onChange here to pass the latest state up to the parent.
//       onChange(editorState);
//     });
//   }, [editor, onChange]);
// }

// export default function Editor() {
//   const [editorState, setEditorState] = useState();
//   //   function onChange(editorState: any) {
//   //     setEditorState(editorState);
//   //   }

//   function onChange(editorState: any) {
//     // Call toJSON on the EditorState object, which produces a serialization safe string
//     const editorStateJSON = editorState.toJSON();
//     // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
//     setEditorState(JSON.stringify(editorStateJSON));
//   }
//   console.log(editorState);

//   const initialConfig = {
//     namespace: "MyEditor",
//     theme,
//     onError,
//     // Any custom nodes go here
//     nodes: [HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, CodeHighlightNode, TableNode, TableCellNode, TableRowNode, AutoLinkNode, LinkNode],
//   };

//   return (
//     <LexicalComposer initialConfig={initialConfig}>
//       <ToolbarPlugin />
//       <PlainTextPlugin
//         contentEditable={<ContentEditable />}
//         placeholder={<div>Enter some text...</div>}
//         ErrorBoundary={LexicalErrorBoundary}
//       />
//       <ListPlugin />
//       <HistoryPlugin />
//       <AutoFocusPlugin />
//       <LinkPlugin />
//       <CodeHighlightPlugin />
//       <TabIndentationPlugin />
//       <AutoLinkPlugin />

//       <MyCustomAutoFocusPlugin />
//       <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
//       <TreeViewPlugin />
//       <LexicalOnChangePlugin onChange={onChange} />
//     </LexicalComposer>
//   );
// }
