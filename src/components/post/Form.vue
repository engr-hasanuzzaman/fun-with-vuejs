<template>
    <div class="m-20">
        <div class="flex flex-col mb-4">
            <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="title">Title</label>
            <input class="border py-2 px-3 text-grey-darkest" type="text" name="title" id="title">
        </div>
        <div class="flex flex-col mb-4">
            <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="body">Body</label>
            <textarea class="border py-2 px-3 text-grey-darkest" type="text" name="body" id="body" rows="4" cols="12" />
        </div>
        <button class="block bg-blue-200 hover:bg-teal-dark uppercase text-lg mx-auto p-4 rounded" type="submit">Create Post</button>
    </div>
</template>

<script>
export default {
    name: 'NewPost'
}
</script>