<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">15</span>
        <span class="mx-1 fs-3">Julio</span>
        <span class="mx-2 fs-4 fw-light">2022, Domingo</span>
    </div>

    <div>
        <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
            Subir Foto
            <i class="fa fa-upload"></i>
        </button>
    </div>
  </div>

  <hr>

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="Que sucedio hoy?"></textarea>
  </div>

  <Fab 
    icon="fa-save"/>

  <img 
    class="img-thumbnail"
    src="https://cdn.vox-cdn.com/thumbor/dQH2P64TJYsWNFXqJ6uNMl0XOB0=/0x0:1920x1080/1220x813/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65162399/ply0947_fall_reviews_2019_tv_anime.0.jpg" alt="Entry Picture">
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        background-color: lighten($color: gray, $amount: 45);
        transition: 0.2s all ease-in;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>