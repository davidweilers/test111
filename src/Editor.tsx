import StarterKit from "@tiptap/starter-kit";
import {
    MenuButtonBold,
    MenuButtonBulletedList,
    MenuButtonItalic,
    MenuButtonOrderedList,
    MenuButtonStrikethrough,
    MenuButtonSubscript,
    MenuControlsContainer,
    MenuDivider,
    MenuSelectHeading,
    RichTextEditor,
    type RichTextEditorRef,
} from "mui-tiptap";
import { useRef } from "react";
import { sessionGet, sessionSet } from "./Page";

export default function Editor() {
    const rteRef = useRef<RichTextEditorRef>(null);

    return (
        <div>
            <RichTextEditor
                ref={rteRef}
                onUpdate={() => {
                    sessionSet('editor', rteRef.current?.editor?.getHTML() ?? "");
                }}
                extensions={[StarterKit]} // Or any Tiptap extensions you wish!
                content={sessionGet('editor')} // Initial content for the editor
                // Optionally include `renderControls` for a menu-bar atop the editor:
                renderControls={() => (
                    <MenuControlsContainer>
                        <MenuSelectHeading />
                        <MenuDivider />
                        <MenuButtonBold />
                        <MenuButtonItalic />
                        <MenuButtonStrikethrough />
                        {/* <MenuButtonSubscript /> */}
                        <MenuButtonOrderedList />
                        <MenuButtonBulletedList />
                        {/* Add more controls of your choosing here */}
                    </MenuControlsContainer>
                )}
            />
        </div>
    );
}