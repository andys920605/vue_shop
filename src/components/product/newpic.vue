<template>
    <div class="outer">
        <!-- <h1>練習 : 製作上傳圖片的區塊</h1> -->
        <input type="file" ref="fileUploader" class="display_none" @change="handleFiles($event.target.files)" />
        <div
            ref="uploadZone"
            class="upload_zone"
            @click="openFileUploader"
            @dragenter="dragEnter"
            @dragleave="dragLeave"
            @dragover="dragOver"
            @drop="handleDrop"
            :class="{ upload_zone_enter: isDragOver }"
            :style="{ backgroundImage: 'url(' + uploadedImages[uploadedImages.length - 1] + ')',backgroundSize: 'cover' }"
        >
            <!-- 請將要上傳的圖片拖曳至此 -->
        </div>

        <i class="bi bi-x-circle"></i>
        <i class="bi bi-plus-lg"></i>
    </div>
</template>

<!-- ... -->


<!-- ... -->

<!-- ... -->


<!-- ... -->


<script>
export default {
    data() {
    return {
        uploadedImages: [],
        isDragOver: false,
    };
    },
    methods: {
    openFileUploader() {
        this.$refs.fileUploader.click();
    },
    dragEnter(event) {
        event.preventDefault();
        event.stopPropagation();
        this.isDragOver = true;
    },
    dragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.isDragOver = false;
    },
    dragOver(event) {
        event.preventDefault();
        event.stopPropagation();
    },
    handleFiles(files) {
        for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageType = /image.*/;

        if (!file.type.match(imageType)) {
            continue;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            this.uploadedImages.push(e.target.result);
        };
        reader.readAsDataURL(file);
        }
    },
    handleDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.isDragOver = false;
        const dt = event.dataTransfer;
        const files = dt.files;
        this.handleFiles(files);
    },
    },
};
</script>

<style lang="css" scoped>
.upload_zone {
    width: 20%;
    height: 40vh;
    margin: 20px;
    padding: 10px;
    cursor: pointer;

    border: 1px solid black;
    border-radius: .5rem;
    background-size: cover; /* 背景圖片大小調整為適應區塊 */
    background-position: center center; /* 背景圖片位置居中 */
    /* object-fit: contain; */
    /* overflow: hidden; */
    box-sizing: border-box;
}

.upload_zone_enter {
    border: 10px dashed black;
    background-clip: content-box;
}

.display_none {
    display: none;
}

</style>
