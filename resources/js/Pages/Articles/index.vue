<template>
    <div class="grid grid-cols-4">
        <div class="col-span-3">
           <div class="grid grid-cols-6 gap-4">
               <div class="p-inputgroup col-start-1 col-span-2">
                   <InputText placeholder="Keyword" class="max-h-12"/>
                   <Button icon="pi pi-search" class="rounded-lg max-h-12 p-button-danger"/>
               </div>
               <div class="col-start-6 col-span-1">
                   <Button label="Create" class="p-button-raised p-button-danger"/>
               </div>
           </div>
            <div class="text-black dark:text-white text-justify mt-3 pr-4 grid grid-cols-3 gap-4">
                <Card style="width: 19rem" class="shadow-2xl mt-6 bg-white dark:bg-slate-900 dark:brightness-100 dark:shadow-2xl">
                        <template #header>
                            <img  class="card-img" src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 15rem" />
                        </template>
                        <template #subtitle>
                            <p class="text-black dark:text-white">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus fugit deserunt consequatur corrupti. Repudiandae, eligendi deleniti! Placeat, voluptas laboriosam quas quaerat ex voluptatum consectetur repellat.
                            </p>
                        </template>
                        <template #footer>
                            
                        </template>
                </Card>
            </div>
        </div>
        <div class="border-l-2 pl-4">
          <div>
              <h1 class="font-black text-2xl dark:text-white text-center mb-4">Categories</h1>
              <div class="flex flex-wrap justify-between">
                  <button type="button" class="min-w-[140px] mb-4 dark:text-white rounded-full border border-black dark:border-white hover:text-teal-500 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Web Design</button>
                  <button type="button" class="min-w-[140px] mb-4 dark:text-white rounded-full border border-black dark:border-white hover:text-teal-500 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Back end</button>
                  <button type="button" class="min-w-[140px] mb-4 dark:text-white rounded-full border border-black dark:border-white hover:text-teal-500 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Data analysis</button>
                  <button type="button" class="min-w-[140px] mb-4 dark:text-white rounded-full border border-black dark:border-white hover:text-teal-500 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0">ITPEC</button>
                  <button type="button" class="min-w-[140px] mb-4 dark:text-white rounded-full border border-black dark:border-white hover:text-teal-500 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0">JIPT</button>
                  <button type="button" class="min-w-[140px] mb-4 dark:text-white rounded-full border border-black dark:border-white hover:text-teal-500 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Front end</button>
              </div>
          </div>
           <div>
               <h1 class="font-black text-2xl dark:text-white text-center mb-4">Languages</h1>
               <div class="flex flex-wrap justify-between">
                   <button type="button" class="max-w-fit mb-4 dark:text-white rounded-full border border-black dark:border-white hover:text-teal-500 font-medium text-sm px-3 py-1 text-center mr-1 md:mr-0.5">Html</button>
                   <button type="button" class="max-w-fit mb-4 dark:text-white rounded-full border border-black dark:border-white hover:text-teal-500 font-medium text-sm px-3 py-1 text-center mr-1 md:mr-0.5">CSS</button>
                   <button type="button" class="max-w-fit mb-4 dark:text-white rounded-full border border-black dark:border-white hover:text-teal-500 font-medium text-sm px-3 py-1 text-center mr-1 md:mr-0.5">Javascript</button>
                   <button type="button" class="max-w-fit mb-4 dark:text-white rounded-full border border-black dark:border-white hover:text-teal-500 font-medium text-sm px-3 py-1 text-center mr-1 md:mr-0.5">PHP</button>
                   <button type="button" class="max-w-fit mb-4 dark:text-white rounded-full border border-black dark:border-white hover:text-teal-500 font-medium text-sm px-3 py-1 text-center mr-1 md:mr-0.5">JQuery</button>
                   <button type="button" class="max-w-fit mb-4 dark:text-white rounded-full border border-black dark:border-white hover:text-teal-500 font-medium text-sm px-3 py-1 text-center mr-1 md:mr-0.5">Vue</button>
                   <button type="button" class="max-w-fit mb-4 dark:text-white rounded-full border border-black dark:border-white hover:text-teal-500 font-medium text-sm px-3 py-1 text-center mr-1 md:mr-0.5">React</button>
                   <button type="button" class="max-w-fit mb-4 dark:text-white rounded-full border border-black dark:border-white hover:text-teal-500 font-medium text-sm px-3 py-1 text-center mr-1 md:mr-0.5">Laravel</button>
               </div>
           </div>
       </div>
    </div>
</template>

<script setup>
import Card from 'primevue/card';

</script>

<style scoped>
.card-img{
    height:12rem !important
}
</style>
