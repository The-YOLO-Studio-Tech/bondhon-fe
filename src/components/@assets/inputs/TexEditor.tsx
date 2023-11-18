import dynamic from 'next/dynamic';
import React from 'react';

import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
});
const TexEditor = ({
  setValue,
  value,
  error,
}: {
  setValue: any;
  value: string | undefined;
  error: any;
}) => {
  return (
    <>
      <div>
        <SunEditor
          height="150"
          defaultValue={value}
          // disable={true}
          // disableToolbar={true}
          onChange={(e) => setValue(e)}
          setOptions={{
            buttonList: [
              [
                // 'undo',
                // 'redo',
                'font',
                'fontSize',
                'formatBlock',
                'paragraphStyle',
                // 'blockquote',
                'bold',
                'underline',
                // 'italic',
                // 'strike',
                // 'subscript',
                // 'superscript',
                // 'fontColor',
                // 'hiliteColor',
                'textStyle',
                'removeFormat',
                'outdent',
                'indent',
                'align',
                'horizontalRule',
                'list',
                'lineHeight',
                'table',
                'link',
                'image',
                'video',
                // 'audio',
                // "math",
                // "imageGallery",
                'fullScreen',
                // 'showBlocks',
                // 'codeView',
                // 'preview',
                // 'print',
                // 'save',
                // 'template',
              ],
            ],
          }}
        />
      </div>
      <p className="text-red-600 text-[14px] mt-12" role="alert">
        {error}
      </p>
    </>
  );
};

export default TexEditor;
