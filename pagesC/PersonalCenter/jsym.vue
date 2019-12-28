<template>
    <view id="app">
        <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor> -->
				年后
    </view>
</template>

<script>
    // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        }
    }
</script>